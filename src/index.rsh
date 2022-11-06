'reach 0.1'
// "In the most popular version, all players throw out a single hand, each showing zero to five 
// fingers, and call out their guess at what the sum of all fingers shown will be. If one player 
// guesses the sum, that player earns one point. The first player to reach three points wins the game."

const [isOutCome, PLAYER1_WIN, DRAW, PLAYER2_WIN] = makeEnum(3)

//Game logic
const winner = (handPlayer1,handPlayer2,guessPlayer1,guessPlayer2) =>{
    const sum = handPlayer1 + handPlayer2

    if (guessPlayer1 == guessPlayer2) 
        return DRAW
    else if (sum == guessPlayer1)
        return PLAYER1_WIN
    else if(sum == guessPlayer2)
        return PLAYER2_WIN
    else{
        return DRAW
    
}
}

assert(winner( 5 , 0 , 5 , 0) == PLAYER1_WIN)
assert(winner( 0 , 5 , 0 , 5) == PLAYER2_WIN)
assert(winner( 0 , 1 , 0 , 0) == DRAW)
assert(winner( 0 , 0 , 5 , 1) == DRAW)

forall(UInt, handPlayer1 =>
    forall(UInt, handPlayer2 => 
        forall(UInt, guessPlayer1 =>
            forall(UInt, guessPlayer2 =>
                assert(isOutCome(winner(handPlayer1, handPlayer2, guessPlayer1, guessPlayer2)))))))

forall(UInt, handPlayer1 => 
    forall(UInt, handPlayer2 =>
        forall(UInt, sameGuess => 
                assert(winner(handPlayer1, handPlayer2, sameGuess, sameGuess) == DRAW))))

//Player function
const PlayerInterface = {
    ...hasRandom,
    getHand: Fun([UInt],UInt),
    getGuessSum: Fun([UInt],UInt),
    seeOutCome: Fun([UInt],Null),
    surrender: Fun([Bool],Bool),
    informTimeout: Fun([], Null),
    displayInfo: Fun([UInt, UInt, UInt, UInt],Null)
}

//initial commit
export const main = Reach.App ( () => {
    const Player1 = Participant('PlayerONE', {
        ...PlayerInterface,
        wager: UInt,
        deadline: UInt,
    })

    const Player2 = Participant('PlayerTWO', {
        ...PlayerInterface,
        acceptWager: Fun([UInt], Null),
    })
    init()

    const informTimeout = () => {
        each([Player1, Player2], () => {
            interact.informTimeout();
        });
    };

    Player1.only( () => {
        const wager = declassify(interact.wager)
        const deadline = declassify(interact.deadline)
    })
    Player1.publish(wager,deadline).pay(wager)
    commit()

    Player2.only( () => {
        interact.acceptWager(wager)
    })
    Player2.pay(wager).timeout(relativeTime(deadline) , () => closeTo(Player1,informTimeout))

    var [ outcome , round ] = [ DRAW , 1 ]
    invariant( balance() == 2 * wager && isOutCome(outcome))

//Game process
    while( outcome == DRAW){
        commit();

        Player1.only( () => {
            const _handPlayer1 = interact.getHand(round);
            const [_commitPlayer1, _saltPlayer1] = makeCommitment(interact, _handPlayer1)
            const commitPlayer1 = declassify(_commitPlayer1)

            const _guessPlayer1 = interact.getGuessSum(round)
            const [_commitGuessPlayer1, _saltGuessPlayer1] = makeCommitment(interact, _guessPlayer1)
            const commitGuessPlayer1 = declassify(_commitGuessPlayer1)
           
        })

        
        Player1.publish(commitPlayer1, commitGuessPlayer1)
            .timeout(relativeTime(deadline), () => closeTo(Player2, informTimeout));
        
                commit();
        
        unknowable(Player2, Player1(_handPlayer1, _saltPlayer1));
        unknowable(Player2, Player1(_guessPlayer1, _saltGuessPlayer1));


        Player2.only( () => {
            const handPlayer2 = declassify(interact.getHand(round));
            const guessPlayer2 = declassify(interact.getGuessSum(round));

        });

            Player2.publish(handPlayer2, guessPlayer2)
                .timeout(relativeTime(deadline), () => closeTo(Player1,informTimeout))
        
                commit();
            
            Player1.only( () => {
                const saltPlayer1 = declassify(_saltPlayer1);
                const handPlayer1 = declassify(_handPlayer1);

                const saltGuessPlayer1 = declassify(_saltGuessPlayer1);
                const guessPlayer1 = declassify(_guessPlayer1);

            })
            Player1.publish(saltPlayer1, handPlayer1, saltGuessPlayer1, guessPlayer1);
            checkCommitment(commitPlayer1, saltPlayer1, handPlayer1);
            checkCommitment(commitGuessPlayer1, saltGuessPlayer1, guessPlayer1);
            
            each([Player1,Player2], () => {
                interact.displayInfo(handPlayer1, handPlayer2, guessPlayer1, guessPlayer2)
            });

            if(handPlayer1 == 99){
                [outcome, round] = [
                    winner(0, 0, 1, 0),
                    round + 1];
                continue;
            }
            else if (handPlayer1 == 99) {
                [outcome, round] = [
                    winner(0, 0, 0, 1),
                    round + 1];
                continue;
            }

        [outcome, round] = [  
            winner(handPlayer1, handPlayer2, guessPlayer1, guessPlayer2),
            round + 1];
            continue;
            
    }

//End gmae: Game result
    assert(outcome == PLAYER1_WIN || outcome == PLAYER2_WIN)

    transfer(2 * wager).to(outcome == PLAYER1_WIN ? Player1 : Player2)
    commit()

    each([Player1,Player2], () => {
        interact.seeOutCome(outcome)
    })

    exit()
})
