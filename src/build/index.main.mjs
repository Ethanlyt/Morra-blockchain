// Automatically generated with Reach 0.1.12 (796d7fb3)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (796d7fb3)';
export const _backendVersion = 25;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc2, ctc2, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function PlayerONE(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for PlayerONE expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for PlayerONE expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v317 = stdlib.protect(ctc0, interact.deadline, 'for PlayerONE\'s interact field deadline');
  const v318 = stdlib.protect(ctc0, interact.wager, 'for PlayerONE\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v318, v317],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:73:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v318, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v322, v323], secs: v325, time: v324, didSend: v71, from: v321 } = txn1;
      
      sim_r.txns.push({
        amt: v322,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v334 = stdlib.safeAdd(v324, v323);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v322, v323], secs: v325, time: v324, didSend: v71, from: v321 } = txn1;
  ;
  const v334 = stdlib.safeAdd(v324, v323);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v334],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v321, v322, v323, v334],
      evt_cnt: 0,
      funcNum: 2,
      lct: v324,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v485, time: v484, didSend: v264, from: v483 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v321,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v485, time: v484, didSend: v264, from: v483 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:65:35:application',
      fs: ['at ./index.rsh:64:13:application call to [unknown function] (defined at: ./index.rsh:64:37:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:63:30:function exp)', 'at ./index.rsh:79:70:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'PlayerONE'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v340, time: v339, didSend: v80, from: v338 } = txn2;
    const v342 = stdlib.add(v322, v322);
    ;
    let v343 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v344 = stdlib.checkedBigNumberify('./index.rsh:81:40:decimal', stdlib.UInt_max, '1');
    let v345 = v339;
    let v352 = v342;
    
    let txn3 = txn2;
    while (await (async () => {
      const v360 = stdlib.eq(v343, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v360;})()) {
      const v367 = stdlib.safeAdd(v345, v323);
      const v371 = stdlib.protect(ctc0, await interact.getHand(v344), {
        at: './index.rsh:88:50:application',
        fs: ['at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:26:function exp)'],
        msg: 'getHand',
        who: 'PlayerONE'
        });
      const v372 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:89:66:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:26:function exp)'],
        msg: 'random',
        who: 'PlayerONE'
        });
      const v373 = stdlib.digest([ctc0, ctc0], [v372, v371]);
      const v375 = stdlib.protect(ctc0, await interact.getGuessSum(v344), {
        at: './index.rsh:92:55:application',
        fs: ['at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:26:function exp)'],
        msg: 'getGuessSum',
        who: 'PlayerONE'
        });
      const v376 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:93:76:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:26:function exp)'],
        msg: 'random',
        who: 'PlayerONE'
        });
      const v377 = stdlib.digest([ctc0, ctc0], [v376, v375]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v321, v322, v323, v338, v344, v352, v367, v373, v377],
        evt_cnt: 2,
        funcNum: 4,
        lct: v345,
        onlyIf: true,
        out_tys: [ctc1, ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:99:17:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v380, v381], secs: v383, time: v382, didSend: v113, from: v379 } = txn4;
          
          ;
          const v391 = stdlib.safeAdd(v382, v323);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v367],
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v321, v322, v323, v338, v344, v352, v367],
          evt_cnt: 0,
          funcNum: 5,
          lct: v345,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v451, time: v450, didSend: v215, from: v449 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v338,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v451, time: v450, didSend: v215, from: v449 } = txn5;
        ;
        const v452 = stdlib.addressEq(v321, v449);
        const v453 = stdlib.addressEq(v338, v449);
        const v454 = v452 ? true : v453;
        stdlib.assert(v454, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:100:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'PlayerONE'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeout(), {
          at: './index.rsh:65:35:application',
          fs: ['at ./index.rsh:64:13:application call to [unknown function] (defined at: ./index.rsh:64:37:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:63:30:function exp)', 'at ./index.rsh:100:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'PlayerONE'
          });
        
        return;
        
        }
      else {
        const {data: [v380, v381], secs: v383, time: v382, didSend: v113, from: v379 } = txn4;
        ;
        const v384 = stdlib.addressEq(v321, v379);
        stdlib.assert(v384, {
          at: './index.rsh:99:17:dot',
          fs: [],
          msg: 'sender correct',
          who: 'PlayerONE'
          });
        const v391 = stdlib.safeAdd(v382, v323);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 6,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v391],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v321, v322, v323, v338, v344, v352, v380, v381, v391],
            evt_cnt: 0,
            funcNum: 7,
            lct: v382,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v433, time: v432, didSend: v181, from: v431 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v321,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1, ctc1, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v433, time: v432, didSend: v181, from: v431 } = txn6;
          ;
          const v434 = stdlib.addressEq(v321, v431);
          const v435 = stdlib.addressEq(v338, v431);
          const v436 = v434 ? true : v435;
          stdlib.assert(v436, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:115:63:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'PlayerONE'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:65:35:application',
            fs: ['at ./index.rsh:64:13:application call to [unknown function] (defined at: ./index.rsh:64:37:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:63:30:function exp)', 'at ./index.rsh:115:63:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'PlayerONE'
            });
          
          return;
          
          }
        else {
          const {data: [v398, v399], secs: v401, time: v400, didSend: v125, from: v397 } = txn5;
          ;
          const v402 = stdlib.addressEq(v338, v397);
          stdlib.assert(v402, {
            at: './index.rsh:114:21:dot',
            fs: [],
            msg: 'sender correct',
            who: 'PlayerONE'
            });
          const txn6 = await (ctc.sendrecv({
            args: [v321, v322, v323, v338, v344, v352, v380, v381, v398, v399, v372, v371, v376, v375],
            evt_cnt: 4,
            funcNum: 8,
            lct: v400,
            onlyIf: true,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:127:21:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v406, v407, v408, v409], secs: v411, time: v410, didSend: v137, from: v405 } = txn6;
              
              ;
              
              const v421 = stdlib.eq(v407, stdlib.checkedBigNumberify('./index.rsh:135:31:decimal', stdlib.UInt_max, '99'));
              if (v421) {
                const v422 = stdlib.safeAdd(v344, stdlib.checkedBigNumberify('./index.rsh:138:29:decimal', stdlib.UInt_max, '1'));
                const cv343 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                const cv344 = v422;
                const cv345 = v410;
                const cv352 = v352;
                
                await (async () => {
                  const v343 = cv343;
                  const v344 = cv344;
                  const v345 = cv345;
                  const v352 = cv352;
                  
                  if (await (async () => {
                    const v360 = stdlib.eq(v343, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                    
                    return v360;})()) {
                    const v367 = stdlib.safeAdd(v345, v323);
                    sim_r.isHalt = false;
                    }
                  else {
                    const v467 = stdlib.eq(v343, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                    const v470 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:157:14:decimal', stdlib.UInt_max, '2'), v322);
                    const v472 = v467 ? v321 : v338;
                    sim_r.txns.push({
                      kind: 'from',
                      to: v472,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }})();}
              else {
                const v426 = stdlib.safeAdd(v407, v398);
                const v427 = stdlib.eq(v409, v399);
                const v428 = stdlib.eq(v426, v409);
                const v429 = stdlib.eq(v426, v399);
                const v500 = v429 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                const v501 = v428 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v500;
                const v425 = v427 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v501;
                const v430 = stdlib.safeAdd(v344, stdlib.checkedBigNumberify('./index.rsh:150:21:decimal', stdlib.UInt_max, '1'));
                const cv343 = v425;
                const cv344 = v430;
                const cv345 = v410;
                const cv352 = v352;
                
                await (async () => {
                  const v343 = cv343;
                  const v344 = cv344;
                  const v345 = cv345;
                  const v352 = cv352;
                  
                  if (await (async () => {
                    const v360 = stdlib.eq(v343, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                    
                    return v360;})()) {
                    const v367 = stdlib.safeAdd(v345, v323);
                    sim_r.isHalt = false;
                    }
                  else {
                    const v467 = stdlib.eq(v343, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                    const v470 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:157:14:decimal', stdlib.UInt_max, '2'), v322);
                    const v472 = v467 ? v321 : v338;
                    sim_r.txns.push({
                      kind: 'from',
                      to: v472,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }})();}
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [v406, v407, v408, v409], secs: v411, time: v410, didSend: v137, from: v405 } = txn6;
          ;
          const v412 = stdlib.addressEq(v321, v405);
          stdlib.assert(v412, {
            at: './index.rsh:127:21:dot',
            fs: [],
            msg: 'sender correct',
            who: 'PlayerONE'
            });
          const v413 = stdlib.digest([ctc0, ctc0], [v406, v407]);
          const v414 = stdlib.digestEq(v380, v413);
          stdlib.assert(v414, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:128:28:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'PlayerONE'
            });
          const v415 = stdlib.digest([ctc0, ctc0], [v408, v409]);
          const v416 = stdlib.digestEq(v381, v415);
          stdlib.assert(v416, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:129:28:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'PlayerONE'
            });
          stdlib.protect(ctc2, await interact.displayInfo(v407, v398, v409, v399), {
            at: './index.rsh:132:37:application',
            fs: ['at ./index.rsh:131:17:application call to [unknown function] (defined at: ./index.rsh:131:40:function exp)'],
            msg: 'displayInfo',
            who: 'PlayerONE'
            });
          
          const v421 = stdlib.eq(v407, stdlib.checkedBigNumberify('./index.rsh:135:31:decimal', stdlib.UInt_max, '99'));
          if (v421) {
            const v422 = stdlib.safeAdd(v344, stdlib.checkedBigNumberify('./index.rsh:138:29:decimal', stdlib.UInt_max, '1'));
            const cv343 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
            const cv344 = v422;
            const cv345 = v410;
            const cv352 = v352;
            
            v343 = cv343;
            v344 = cv344;
            v345 = cv345;
            v352 = cv352;
            
            txn3 = txn6;
            continue;}
          else {
            const v426 = stdlib.safeAdd(v407, v398);
            const v427 = stdlib.eq(v409, v399);
            const v428 = stdlib.eq(v426, v409);
            const v429 = stdlib.eq(v426, v399);
            const v500 = v429 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            const v501 = v428 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v500;
            const v425 = v427 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v501;
            const v430 = stdlib.safeAdd(v344, stdlib.checkedBigNumberify('./index.rsh:150:21:decimal', stdlib.UInt_max, '1'));
            const cv343 = v425;
            const cv344 = v430;
            const cv345 = v410;
            const cv352 = v352;
            
            v343 = cv343;
            v344 = cv344;
            v345 = cv345;
            v352 = cv352;
            
            txn3 = txn6;
            continue;}
          
          }
        
        }
      
      }
    const v467 = stdlib.eq(v343, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v470 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:157:14:decimal', stdlib.UInt_max, '2'), v322);
    const v472 = v467 ? v321 : v338;
    ;
    stdlib.protect(ctc2, await interact.seeOutCome(v343), {
      at: './index.rsh:161:28:application',
      fs: ['at ./index.rsh:160:9:application call to [unknown function] (defined at: ./index.rsh:160:32:function exp)'],
      msg: 'seeOutCome',
      who: 'PlayerONE'
      });
    
    return;
    }
  
  
  
  };
export async function PlayerTWO(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for PlayerTWO expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for PlayerTWO expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v322, v323], secs: v325, time: v324, didSend: v71, from: v321 } = txn1;
  ;
  const v334 = stdlib.safeAdd(v324, v323);
  stdlib.protect(ctc1, await interact.acceptWager(v322), {
    at: './index.rsh:77:29:application',
    fs: ['at ./index.rsh:76:17:application call to [unknown function] (defined at: ./index.rsh:76:22:function exp)'],
    msg: 'acceptWager',
    who: 'PlayerTWO'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v321, v322, v323, v334],
    evt_cnt: 0,
    funcNum: 1,
    lct: v324,
    onlyIf: true,
    out_tys: [],
    pay: [v322, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v340, time: v339, didSend: v80, from: v338 } = txn2;
      
      const v342 = stdlib.add(v322, v322);
      sim_r.txns.push({
        amt: v322,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v343 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v344 = stdlib.checkedBigNumberify('./index.rsh:81:40:decimal', stdlib.UInt_max, '1');
      const v345 = v339;
      const v352 = v342;
      
      if (await (async () => {
        const v360 = stdlib.eq(v343, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v360;})()) {
        const v367 = stdlib.safeAdd(v345, v323);
        sim_r.isHalt = false;
        }
      else {
        const v467 = stdlib.eq(v343, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        const v470 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:157:14:decimal', stdlib.UInt_max, '2'), v322);
        const v472 = v467 ? v321 : v338;
        sim_r.txns.push({
          kind: 'from',
          to: v472,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v334],
    tys: [ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v321, v322, v323, v334],
      evt_cnt: 0,
      funcNum: 2,
      lct: v324,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v485, time: v484, didSend: v264, from: v483 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v321,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v485, time: v484, didSend: v264, from: v483 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:65:35:application',
      fs: ['at ./index.rsh:64:13:application call to [unknown function] (defined at: ./index.rsh:64:37:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:63:30:function exp)', 'at ./index.rsh:79:70:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'PlayerTWO'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v340, time: v339, didSend: v80, from: v338 } = txn2;
    const v342 = stdlib.add(v322, v322);
    ;
    let v343 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v344 = stdlib.checkedBigNumberify('./index.rsh:81:40:decimal', stdlib.UInt_max, '1');
    let v345 = v339;
    let v352 = v342;
    
    let txn3 = txn2;
    while (await (async () => {
      const v360 = stdlib.eq(v343, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v360;})()) {
      const v367 = stdlib.safeAdd(v345, v323);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 4,
        out_tys: [ctc2, ctc2],
        timeoutAt: ['time', v367],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v321, v322, v323, v338, v344, v352, v367],
          evt_cnt: 0,
          funcNum: 5,
          lct: v345,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v451, time: v450, didSend: v215, from: v449 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v338,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v451, time: v450, didSend: v215, from: v449 } = txn5;
        ;
        const v452 = stdlib.addressEq(v321, v449);
        const v453 = stdlib.addressEq(v338, v449);
        const v454 = v452 ? true : v453;
        stdlib.assert(v454, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:100:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'PlayerTWO'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:65:35:application',
          fs: ['at ./index.rsh:64:13:application call to [unknown function] (defined at: ./index.rsh:64:37:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:63:30:function exp)', 'at ./index.rsh:100:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'PlayerTWO'
          });
        
        return;
        
        }
      else {
        const {data: [v380, v381], secs: v383, time: v382, didSend: v113, from: v379 } = txn4;
        ;
        const v384 = stdlib.addressEq(v321, v379);
        stdlib.assert(v384, {
          at: './index.rsh:99:17:dot',
          fs: [],
          msg: 'sender correct',
          who: 'PlayerTWO'
          });
        const v391 = stdlib.safeAdd(v382, v323);
        const v395 = stdlib.protect(ctc0, await interact.getHand(v344), {
          at: './index.rsh:109:60:application',
          fs: ['at ./index.rsh:108:21:application call to [unknown function] (defined at: ./index.rsh:108:26:function exp)'],
          msg: 'getHand',
          who: 'PlayerTWO'
          });
        const v396 = stdlib.protect(ctc0, await interact.getGuessSum(v344), {
          at: './index.rsh:110:65:application',
          fs: ['at ./index.rsh:108:21:application call to [unknown function] (defined at: ./index.rsh:108:26:function exp)'],
          msg: 'getGuessSum',
          who: 'PlayerTWO'
          });
        
        const txn5 = await (ctc.sendrecv({
          args: [v321, v322, v323, v338, v344, v352, v380, v381, v391, v395, v396],
          evt_cnt: 2,
          funcNum: 6,
          lct: v382,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:114:21:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v398, v399], secs: v401, time: v400, didSend: v125, from: v397 } = txn5;
            
            ;
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v391],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v321, v322, v323, v338, v344, v352, v380, v381, v391],
            evt_cnt: 0,
            funcNum: 7,
            lct: v382,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v433, time: v432, didSend: v181, from: v431 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v321,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc2, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v433, time: v432, didSend: v181, from: v431 } = txn6;
          ;
          const v434 = stdlib.addressEq(v321, v431);
          const v435 = stdlib.addressEq(v338, v431);
          const v436 = v434 ? true : v435;
          stdlib.assert(v436, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:115:63:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'PlayerTWO'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:65:35:application',
            fs: ['at ./index.rsh:64:13:application call to [unknown function] (defined at: ./index.rsh:64:37:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:63:30:function exp)', 'at ./index.rsh:115:63:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'PlayerTWO'
            });
          
          return;
          
          }
        else {
          const {data: [v398, v399], secs: v401, time: v400, didSend: v125, from: v397 } = txn5;
          ;
          const v402 = stdlib.addressEq(v338, v397);
          stdlib.assert(v402, {
            at: './index.rsh:114:21:dot',
            fs: [],
            msg: 'sender correct',
            who: 'PlayerTWO'
            });
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 4,
            funcNum: 8,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [v406, v407, v408, v409], secs: v411, time: v410, didSend: v137, from: v405 } = txn6;
          ;
          const v412 = stdlib.addressEq(v321, v405);
          stdlib.assert(v412, {
            at: './index.rsh:127:21:dot',
            fs: [],
            msg: 'sender correct',
            who: 'PlayerTWO'
            });
          const v413 = stdlib.digest([ctc0, ctc0], [v406, v407]);
          const v414 = stdlib.digestEq(v380, v413);
          stdlib.assert(v414, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:128:28:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'PlayerTWO'
            });
          const v415 = stdlib.digest([ctc0, ctc0], [v408, v409]);
          const v416 = stdlib.digestEq(v381, v415);
          stdlib.assert(v416, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:129:28:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'PlayerTWO'
            });
          stdlib.protect(ctc1, await interact.displayInfo(v407, v398, v409, v399), {
            at: './index.rsh:132:37:application',
            fs: ['at ./index.rsh:131:17:application call to [unknown function] (defined at: ./index.rsh:131:40:function exp)'],
            msg: 'displayInfo',
            who: 'PlayerTWO'
            });
          
          const v421 = stdlib.eq(v407, stdlib.checkedBigNumberify('./index.rsh:135:31:decimal', stdlib.UInt_max, '99'));
          if (v421) {
            const v422 = stdlib.safeAdd(v344, stdlib.checkedBigNumberify('./index.rsh:138:29:decimal', stdlib.UInt_max, '1'));
            const cv343 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
            const cv344 = v422;
            const cv345 = v410;
            const cv352 = v352;
            
            v343 = cv343;
            v344 = cv344;
            v345 = cv345;
            v352 = cv352;
            
            txn3 = txn6;
            continue;}
          else {
            const v426 = stdlib.safeAdd(v407, v398);
            const v427 = stdlib.eq(v409, v399);
            const v428 = stdlib.eq(v426, v409);
            const v429 = stdlib.eq(v426, v399);
            const v500 = v429 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            const v501 = v428 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v500;
            const v425 = v427 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v501;
            const v430 = stdlib.safeAdd(v344, stdlib.checkedBigNumberify('./index.rsh:150:21:decimal', stdlib.UInt_max, '1'));
            const cv343 = v425;
            const cv344 = v430;
            const cv345 = v410;
            const cv352 = v352;
            
            v343 = cv343;
            v344 = cv344;
            v345 = cv345;
            v352 = cv352;
            
            txn3 = txn6;
            continue;}
          
          }
        
        }
      
      }
    const v467 = stdlib.eq(v343, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v470 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:157:14:decimal', stdlib.UInt_max, '2'), v322);
    const v472 = v467 ? v321 : v338;
    ;
    stdlib.protect(ctc1, await interact.seeOutCome(v343), {
      at: './index.rsh:161:28:application',
      fs: ['at ./index.rsh:160:9:application call to [unknown function] (defined at: ./index.rsh:160:32:function exp)'],
      msg: 'seeOutCome',
      who: 'PlayerTWO'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAOAAEIBSBYAgcoUKABCWAwJgMBAAEBACI1ADEYQQTMKmRJIls1ASRbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSUMQAJMSSEHDEABQUkkDEAA5yQSRCELNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpJVwAgNf8hBFs1/iEIWzX9VzAgNfwhCVs1+yEFWzX6gagBWzX5STUFSUoiWzX4JFs194EQWzX2gRhbNfWABH+iO1I0+BZQNPcWUDT2FlA09RZQsDT/MQASRDQDV2AgNPgWNPcWUAESRDQDV4AgNPYWNPUWUAESRDT3gWMSQQAVNP80/jT9NPwhBjT7IwgyBjT6QgMqNPc0AyEKWwg19DT/NP40/TT8IyEGNPQ0+RJNIjT0NPUSTSM09TT5Ek00+yMIMgY0+kIC9kghBzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABOIbs6mwMgY0AyEKWw9ENP8xABI0A1cwIDEAEhFEsSKyATQDIQVbsggjshA0/7IHs0IDCEmBBgxAAK1IIQc0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpXACA1/yEEWzX+IQhbNf1XMCA1/CEJWzX7IQVbNfpXYCA1+VeAIDX4STUFSSJbNfckWzX2gARKIcv8NPcWUDT2FlCwMgY0AyEKWwxENPwxABJENP80/hZQNP0WUDT8UDT7FlA0+hZQNPlQNPhQNPcWUDT2FlAoSwFXAH9nKUsBV38xZ0ghCzUBMgY1AkICb0glNAESRDQESSISTDQCEhFEKGRJNQNXMCA1/4AEzJmSXLAyBjQDIQxbD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMhBVuyCCOyEDT/sgezQgIESSEGDEAA6UmBBAxAAKFIJTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKVwAgNf8hBFs1/iEIWzX9VzAgNfwhCVs1+yEFWzX6STUFSVcAIDX5VyAgNfiABGBdpCs0+VA0+FCwMgY0AyEMWwxENP8xABJEMgY0/Qg19zT/NP4WUDT9FlA0/FA0+xZQNPoWUDT5UDT4UDT3FlAoSwFXAH9nKUsBV38pZ0ghBzUBMgY1AkIBcCEGEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIQ1bD0SxIrIBNAMhBFuyCCOyEDQDVwAgsgezQgEUSSMMQABJSCM0ARJENARJIhJMNAISEUQoZEk1AyEEWzX/gASai5F0sDIGNAMhDVsMRDT/iAFLNANXACA0/zQDIQhbMQAjIzIGNP9JCEIAX0iBoI0GiAEqIjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/JFs1/oAErNEfwzT/FlA0/hZQsDT/iAD6MgY0/gg1/TEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgCBNf81/jX9Nfw1+zX6Nfk1+DT8IxJBADI0/jT6CDX3NPg0+RZQNPoWUDT7UDT9FlA0/xZQNPcWUChLAVcAaGdIJTUBMgY1AkIAOLEisgEhBjT5C7III7IQNPs0+DT8IhJNsgezQgAAMRklEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQMxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 176,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v322",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v323",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v322",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v323",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v380",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v381",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v398",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v399",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v406",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v407",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v408",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v409",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v380",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v381",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v398",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v399",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v406",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v407",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v408",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v409",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001d1138038062001d118339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b611994806200037d6000396000f3fe60806040526004361061008f5760003560e01c80638e314769116100565780638e3147691461010a578063ab53f2c61461011d578063bf2c5b2414610140578063cc923b2914610153578063ebdbfdcc1461016657005b80631e93b0f11461009857806321642639146100bc5780632c10a159146100cf5780637eea518c146100e257806383230757146100f557005b3661009657005b005b3480156100a457600080fd5b506003545b6040519081526020015b60405180910390f35b6100966100ca366004611466565b610179565b6100966100dd366004611489565b6103d2565b6100966100f0366004611489565b61056c565b34801561010157600080fd5b506001546100a9565b610096610118366004611489565b6106ea565b34801561012957600080fd5b50610132610885565b6040516100b392919061149b565b61009661014e366004611489565b610922565b6100966101613660046114f8565b610aba565b610096610174366004611466565b610df8565b610189600760005414601c6110af565b6101a38135158061019c57506001548235145b601d6110af565b6000808055600280546101b59061150a565b80601f01602080910402602001604051908101604052809291908181526020018280546101e19061150a565b801561022e5780601f106102035761010080835404028352916020019161022e565b820191906000526020600020905b81548152906001019060200180831161021157829003601f168201915b505050505080602001905181019061024691906115c5565b905061025a8161010001514310601e6110af565b7fb2a03f9306ab783007397921312164b54fbeead1388356342ff3ef55c8552b3f338360405161028b92919061164e565b60405180910390a161029f3415601a6110af565b60608101516102ba906001600160a01b03163314601b6110af565b61032260405180610140016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b81516001600160a01b0390811682526020808401518184015260408085015181850152606080860151909316928401929092526080808501519084015260a0808501519084015260c0808501519084015260e08085015190840152848101356101008401528482013561012084015260096000554360015590516103a89183910161167f565b604051602081830303815290604052600290805190602001906103cc929190611318565b50505050565b6103e260016000541460096110af565b6103fc813515806103f557506001548235145b600a6110af565b60008080556002805461040e9061150a565b80601f016020809104026020016040519081016040528092919081815260200182805461043a9061150a565b80156104875780601f1061045c57610100808354040283529160200191610487565b820191906000526020600020905b81548152906001019060200180831161046a57829003601f168201915b505050505080602001905181019061049f9190611706565b90506104b281606001514310600b6110af565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516104e392919061177f565b60405180910390a16104fc8160200151341460086110af565b61050461139c565b815181516001600160a01b03909116905260208083018051835183015260408085015184518201528351336060909101528284018051600190819052815190940193909352915143920191909152518001602082015160600152610567816110d5565b505050565b61057c600160005414600d6110af565b6105968135158061058f57506001548235145b600e6110af565b6000808055600280546105a89061150a565b80601f01602080910402602001604051908101604052809291908181526020018280546105d49061150a565b80156106215780601f106105f657610100808354040283529160200191610621565b820191906000526020600020905b81548152906001019060200180831161060457829003601f168201915b50505050508060200190518101906106399190611706565b905061064d8160600151431015600f6110af565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161067e92919061177f565b60405180910390a16106923415600c6110af565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106cf573d6000803e3d6000fd5b50600080805560018190556106e6906002906113fc565b5050565b6106fa60056000541460176110af565b6107148135158061070d57506001548235145b60186110af565b6000808055600280546107269061150a565b80601f01602080910402602001604051908101604052809291908181526020018280546107529061150a565b801561079f5780601f106107745761010080835404028352916020019161079f565b820191906000526020600020905b81548152906001019060200180831161078257829003601f168201915b50505050508060200190518101906107b791906117bc565b90506107cb8160c0015143101560196110af565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33836040516107fc92919061177f565b60405180910390a1610810341560156110af565b8051610844906001600160a01b0316331461083a5760608201516001600160a01b0316331461083d565b60015b60166110af565b80606001516001600160a01b03166108fc8260a001519081150290604051600060405180830381858888f193505050501580156106cf573d6000803e3d6000fd5b60006060600054600280805461089a9061150a565b80601f01602080910402602001604051908101604052809291908181526020018280546108c69061150a565b80156109135780601f106108e857610100808354040283529160200191610913565b820191906000526020600020905b8154815290600101906020018083116108f657829003601f168201915b50505050509050915091509091565b61093260076000541460216110af565b61094c8135158061094557506001548235145b60226110af565b60008080556002805461095e9061150a565b80601f016020809104026020016040519081016040528092919081815260200182805461098a9061150a565b80156109d75780601f106109ac576101008083540402835291602001916109d7565b820191906000526020600020905b8154815290600101906020018083116109ba57829003601f168201915b50505050508060200190518101906109ef91906115c5565b9050610a0481610100015143101560236110af565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610a3592919061177f565b60405180910390a1610a493415601f6110af565b8051610a7d906001600160a01b03163314610a735760608201516001600160a01b03163314610a76565b60015b60206110af565b805160a08201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106cf573d6000803e3d6000fd5b610aca60096000541460286110af565b610ae481351580610add57506001548235145b60296110af565b600080805560028054610af69061150a565b80601f0160208091040260200160405190810160405280929190818152602001828054610b229061150a565b8015610b6f5780601f10610b4457610100808354040283529160200191610b6f565b820191906000526020600020905b815481529060010190602001808311610b5257829003601f168201915b5050505050806020019051810190610b87919061185a565b9050610b9f6040518060200160405280600081525090565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808083019190915284013560a08201527fc7e07aa759791812e0e03fb583c5fbed2f43e8adb4535b4faa695e77e84ea4fe9060c00160405180910390a1610c12341560246110af565b8151610c2a906001600160a01b0316331460256110af565b60408051610c7691610c5091602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360c001511460266110af565b604080516060858101356020830152608086013592820192909252610cbc91016040516020818303038152906040528051906020012060001c8360e001511460276110af565b604083013560631415610d4b57610cd161139c565b825181516001600160a01b039182169052602080850151835182015260408086015184519091015260608086015184519316920191909152810151600290526080830151610d20906001611266565b602080830180519091019190915280514360409091015260a08401519051606001526103cc816110d5565b610d618360200160200135836101000151611266565b8152610d6b61139c565b825181516001600160a01b03918216905260208085015183519091015260408085015183519091015260608085015183519216910152610120830151608085013514610ddf578151608085013514610dd857610120830151825114610dd1576001610de2565b6002610de2565b6000610de2565b60015b6020820151526080830151610d20906001611266565b610e0860056000541460126110af565b610e2281351580610e1b57506001548235145b60136110af565b600080805560028054610e349061150a565b80601f0160208091040260200160405190810160405280929190818152602001828054610e609061150a565b8015610ead5780601f10610e8257610100808354040283529160200191610ead565b820191906000526020600020905b815481529060010190602001808311610e9057829003601f168201915b5050505050806020019051810190610ec591906117bc565b9050610edd6040518060200160405280600081525090565b610eee8260c00151431060146110af565b7fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a3384604051610f1f92919061164e565b60405180910390a1610f33341560106110af565b8151610f4b906001600160a01b0316331460116110af565b610f59438360400151611266565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a080860151908401528581013560c08401528582013560e0840152835161010084015260076000554360015590516110849183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b604051602081830303815290604052600290805190602001906110a8929190611318565b5050505050565b816106e65760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516020810190915260008152602082015151600114156112055761110c826020015160400151836000015160400151611266565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c08101919091528251516001600160a01b03908116825283516020908101518184015284516040908101518185015285516060908101519093168385015281860180518301516080860152519092015160a0840152835160c084015260056000554360015590516103a89183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0918201519181019190915260e00190565b6020820151511561121b5781516060015161121f565b8151515b6001600160a01b03166108fc61123e60028560000151602001516112b9565b6040518115909202916000818181858888f193505050501580156106cf573d6000803e3d6000fd5b6000826112738382611905565b91508110156112b35760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016110cc565b92915050565b60008115806112dd575082826112cf818361191d565b92506112db908361193c565b145b6112b35760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b60448201526064016110cc565b8280546113249061150a565b90600052602060002090601f016020900481019282611346576000855561138c565b82601f1061135f57805160ff191683800117855561138c565b8280016001018555821561138c579182015b8281111561138c578251825591602001919060010190611371565b50611398929150611439565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290819081526020016113f76040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b5080546114089061150a565b6000825580601f10611418575050565b601f0160209004906000526020600020908101906114369190611439565b50565b5b80821115611398576000815560010161143a565b60006060828403121561146057600080fd5b50919050565b60006060828403121561147857600080fd5b611482838361144e565b9392505050565b60006040828403121561146057600080fd5b82815260006020604081840152835180604085015260005b818110156114cf578581018301518582016060015282016114b3565b818111156114e1576000606083870101525b50601f01601f191692909201606001949350505050565b600060a0828403121561146057600080fd5b600181811c9082168061151e57607f821691505b6020821081141561146057634e487b7160e01b600052602260045260246000fd5b604051610120810167ffffffffffffffff8111828210171561157157634e487b7160e01b600052604160045260246000fd5b60405290565b604051610140810167ffffffffffffffff8111828210171561157157634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146115c057600080fd5b919050565b600061012082840312156115d857600080fd5b6115e061153f565b6115e9836115a9565b8152602083015160208201526040830151604082015261160b606084016115a9565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b6001600160a01b03831681526080810161148260208301848035825260208082013590830152604090810135910152565b81516001600160a01b031681526101408101602083015160208301526040830151604083015260608301516116bf60608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525092915050565b60006080828403121561171857600080fd5b6040516080810181811067ffffffffffffffff8211171561174957634e487b7160e01b600052604160045260246000fd5b604052611755836115a9565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b0383168152813560208083019190915260608201908301358015158082146117ad57600080fd5b80604085015250509392505050565b600060e082840312156117ce57600080fd5b60405160e0810181811067ffffffffffffffff821117156117ff57634e487b7160e01b600052604160045260246000fd5b60405261180b836115a9565b8152602083015160208201526040830151604082015261182d606084016115a9565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b6000610140828403121561186d57600080fd5b611875611577565b61187e836115a9565b815260208301516020820152604083015160408201526118a0606084016115a9565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152508091505092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611918576119186118ef565b500190565b6000816000190483118215151615611937576119376118ef565b500290565b60008261195957634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212203e5d4365741d21a69de4e2c16f3683223eb1dd29bd11a4436514d365c4a5d2fa64736f6c634300080c0033`,
  BytecodeLen: 7441,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:74:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:79:70:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:158:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:85:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:100:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:102:25:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:115:63:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:117:25:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "PlayerONE": PlayerONE,
  "PlayerTWO": PlayerTWO
  };
export const _APIs = {
  };
