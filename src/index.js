import React from 'react';
import AppViews from './View/AppViews';
import DeployerViews from './View/DeployerViews';
import AttacherViews from './View/AttacherViews';
import { renderDOM, renderView } from './View/render';
import './index.css';
import * as backend from './build/index.main.mjs';
import { loadStdlib, ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const reach = loadStdlib({
    ...process.env, 
    'REACH_CONNECTOR_MODE': 'ALGO',
    });

reach.setWalletFallback(reach.walletFallback({
    providerEnv: 'TestNet', MyAlgoConnect
}))

const { standardUnit } = reach
const defaults = { defaultFundAmt: '10', defaultWager: '1', standardUnit };

const intToOutcome = ["PLAYER1_WIN", "DRAW", "PLAYER2_WIN"]
const handToInt = {
    'QUIT': 99,
    'ZERO': 0,
    'ONE': 1,
    'TWO': 2,
    'THREE': 3,
    'FOUR': 4,
    'FIVE': 5,
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { view: 'ConnectAccount', ...defaults };
    }

    async componentDidMount() {
        const acc = await reach.getDefaultAccount();
        const balAtomic = await reach.balanceOf(acc);
        const bal = reach.formatCurrency(balAtomic, 4);
        this.setState({ acc, bal });
        if (await reach.canFundFromFaucet()) {
            this.setState({ view: 'FundAccount' });
        } else {
            this.setState({ view: 'DeployerOrAttacher' });
        }
    }

    render() {
        return renderView(this, AppViews)
    }

    async fundAccount(fundAmount) {
        await reach.fundFromFaucet(this.state.acc, reach.parseCurrency(fundAmount));
        this.setState({ view: 'DeployerOrAttacher' });
    }

    async skipFundAccount() {
        this.setState({
            view: 'DeployerOrAttacher',
        })
    }

    selectAttacher() {
        this.setState({ 
            view: 'Wrapper', 
            ContentView: Attacher 
        });
    }

    selectDeployer() {
        this.setState({
            view: 'Wrapper',
            ContentView: Deployer
        });
    }

}

class Player extends React.Component {
    random() {
        return reach.hasRandom.random()
    }

    async getHand(round){
        const hand = await new Promise(resolveHandP => {
            this.setState({
                view: 'GetHand',
                playable: true,
                round: reach.bigNumberToNumber(round),
                resolveHandP
            })
        })
        this.setState({
            view: 'WaitingForResults', 
            round: reach.bigNumberToNumber(round),
            hand
        })
        return handToInt[hand]
    }
    

    async getGuessSum(round){
        const sum = await new Promise(resolveSumP => {
            this.setState({
                view: 'GetSum',
                playable: true,
                round: reach.bigNumberToNumber(round),
                resolveSumP
            })
        })
        this.setState({
            view: 'WaitingForResults',
            round: reach.bigNumberToNumber(round),
            sum
        })
        return sum
    }
    
    seeOutCome(i) { this.setState({ view: 'Done', outcome: intToOutcome[i] }); }
    informTimeout() { this.setState({ view: 'Timeout' }); }
    playHand(hand) { this.state.resolveHandP(hand); }
    playGuess(sum) { this.state.resolveSumP(sum)}


    displayInfo(handPlayer1, handPlayer2, guessPlayer1, guessPlayer2){
        this.setState({
            view: 'Info',
            h1: reach.bigNumberToNumber(handPlayer1), 
            h2: reach.bigNumberToNumber(handPlayer2), 
            g1: reach.bigNumberToNumber(guessPlayer1), 
            g2: reach.bigNumberToNumber(guessPlayer2),
        })
    }
}

class Deployer extends Player {
    constructor(props) {
        super(props);
        this.state = { view: 'SetWager' };
    }
    setWager(wager) { this.setState({ view: 'Deploy', wager }); }
    async deploy() {
        const ctc = this.props.acc.contract(backend);
        this.setState({ view: 'Deploying', ctc });
        this.wager = reach.parseCurrency(this.state.wager); // UInt
        this.deadline = { ETH: 10, ALGO: 100, CFX: 1000 }[reach.connector]; // UInt
        backend.PlayerONE(ctc, this);
        const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
        this.setState({ view: 'WaitingForAttacher', ctcInfoStr });
    }
    render() { return renderView(this, DeployerViews); }
}

class Attacher extends Player {
    constructor(props) {
        super(props);
        this.state = { view: 'Attach' };
    }
    attach(ctcInfoStr) {
        const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
        this.setState({ view: 'Attaching' });
        backend.PlayerTWO(ctc, this);
    }
    async acceptWager(wagerAtomic) { // Fun([UInt], Null)
        const wager = reach.formatCurrency(wagerAtomic, 4);
        return await new Promise(resolveAcceptedP => {
            this.setState({ view: 'AcceptTerms', wager, resolveAcceptedP });
        });
    }
    termsAccepted() {
        this.state.resolveAcceptedP();
        this.setState({ view: 'WaitingForTurn' });
    }
    render() { return renderView(this, AttacherViews); }
}


renderDOM(<App />)
