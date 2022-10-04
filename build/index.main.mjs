// Automatically generated with Reach 0.1.12 (816420cc)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (816420cc)';
export const _backendVersion = 24;

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
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1],
      11: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1],
      13: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1],
      15: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1]
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
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v459 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v460 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v460, v459],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:78:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v460, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v464, v465], secs: v467, time: v466, didSend: v73, from: v463 } = txn1;
      
      sim_r.txns.push({
        amt: v464,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v476 = stdlib.safeAdd(v466, v465);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v464, v465], secs: v467, time: v466, didSend: v73, from: v463 } = txn1;
  ;
  const v476 = stdlib.safeAdd(v466, v465);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v476],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v463, v464, v465, v476],
      evt_cnt: 0,
      funcNum: 2,
      lct: v466,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v734, time: v733, didSend: v404, from: v732 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v463,
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
    const {data: [], secs: v734, time: v733, didSend: v404, from: v732 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:74:35:application',
      fs: ['at ./index.rsh:73:15:application call to [unknown function] (defined at: ./index.rsh:73:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:72:34:function exp)', 'at ./index.rsh:85:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v482, time: v481, didSend: v82, from: v480 } = txn2;
    const v484 = stdlib.add(v464, v464);
    ;
    let v485 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v486 = v481;
    let v493 = v484;
    
    let txn3 = txn2;
    while (await (async () => {
      const v501 = stdlib.eq(v485, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v501;})()) {
      const v508 = stdlib.safeAdd(v486, v465);
      const v512 = stdlib.protect(ctc0, await interact.getFingers(), {
        at: './index.rsh:93:48:application',
        fs: ['at ./index.rsh:92:15:application call to [unknown function] (defined at: ./index.rsh:92:19:function exp)'],
        msg: 'getFingers',
        who: 'Alice'
        });
      const v513 = stdlib.protect(ctc0, await interact.getGuess(), {
        at: './index.rsh:94:44:application',
        fs: ['at ./index.rsh:92:15:application call to [unknown function] (defined at: ./index.rsh:92:19:function exp)'],
        msg: 'getGuess',
        who: 'Alice'
        });
      const v514 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:96:52:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:92:15:application call to [unknown function] (defined at: ./index.rsh:92:19:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v515 = stdlib.digest([ctc0, ctc0], [v514, v512]);
      const v517 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:98:62:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:92:15:application call to [unknown function] (defined at: ./index.rsh:92:19:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v518 = stdlib.digest([ctc0, ctc0], [v517, v513]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v463, v464, v465, v480, v493, v508, v515],
        evt_cnt: 1,
        funcNum: 4,
        lct: v486,
        onlyIf: true,
        out_tys: [ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:102:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v521], secs: v523, time: v522, didSend: v113, from: v520 } = txn4;
          
          ;
          const v531 = stdlib.safeAdd(v522, v465);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v508],
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v463, v464, v465, v480, v493, v508],
          evt_cnt: 0,
          funcNum: 5,
          lct: v486,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v700, time: v699, didSend: v355, from: v698 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v480,
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
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v700, time: v699, didSend: v355, from: v698 } = txn5;
        ;
        const v701 = stdlib.addressEq(v463, v698);
        const v702 = stdlib.addressEq(v480, v698);
        const v703 = v701 ? true : v702;
        stdlib.assert(v703, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:103:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeout(), {
          at: './index.rsh:74:35:application',
          fs: ['at ./index.rsh:73:15:application call to [unknown function] (defined at: ./index.rsh:73:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:72:34:function exp)', 'at ./index.rsh:103:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v521], secs: v523, time: v522, didSend: v113, from: v520 } = txn4;
        ;
        const v524 = stdlib.addressEq(v463, v520);
        stdlib.assert(v524, {
          at: './index.rsh:102:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v531 = stdlib.safeAdd(v522, v465);
        const txn5 = await (ctc.sendrecv({
          args: [v463, v464, v465, v480, v493, v521, v531, v518],
          evt_cnt: 1,
          funcNum: 6,
          lct: v522,
          onlyIf: true,
          out_tys: [ctc1],
          pay: [stdlib.checkedBigNumberify('./index.rsh:106:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v534], secs: v536, time: v535, didSend: v119, from: v533 } = txn5;
            
            ;
            const v544 = stdlib.safeAdd(v535, v465);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v531],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc0, ctc1],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v463, v464, v465, v480, v493, v521, v531],
            evt_cnt: 0,
            funcNum: 7,
            lct: v522,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v682, time: v681, didSend: v321, from: v680 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v480,
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
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v682, time: v681, didSend: v321, from: v680 } = txn6;
          ;
          const v683 = stdlib.addressEq(v463, v680);
          const v684 = stdlib.addressEq(v480, v680);
          const v685 = v683 ? true : v684;
          stdlib.assert(v685, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:107:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:74:35:application',
            fs: ['at ./index.rsh:73:15:application call to [unknown function] (defined at: ./index.rsh:73:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:72:34:function exp)', 'at ./index.rsh:107:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v534], secs: v536, time: v535, didSend: v119, from: v533 } = txn5;
          ;
          const v537 = stdlib.addressEq(v463, v533);
          stdlib.assert(v537, {
            at: './index.rsh:106:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v544 = stdlib.safeAdd(v535, v465);
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 8,
            out_tys: [ctc0],
            timeoutAt: ['time', v544],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v463, v464, v465, v480, v493, v521, v534, v544],
              evt_cnt: 0,
              funcNum: 9,
              lct: v535,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v664, time: v663, didSend: v287, from: v662 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v463,
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
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v664, time: v663, didSend: v287, from: v662 } = txn7;
            ;
            const v665 = stdlib.addressEq(v463, v662);
            const v666 = stdlib.addressEq(v480, v662);
            const v667 = v665 ? true : v666;
            stdlib.assert(v667, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:120:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc2, await interact.informTimeout(), {
              at: './index.rsh:74:35:application',
              fs: ['at ./index.rsh:73:15:application call to [unknown function] (defined at: ./index.rsh:73:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:72:34:function exp)', 'at ./index.rsh:120:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v551], secs: v553, time: v552, didSend: v130, from: v550 } = txn6;
            ;
            const v554 = stdlib.addressEq(v480, v550);
            stdlib.assert(v554, {
              at: './index.rsh:119:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v561 = stdlib.safeAdd(v552, v465);
            const txn7 = await (ctc.recv({
              didSend: false,
              evt_cnt: 1,
              funcNum: 10,
              out_tys: [ctc0],
              timeoutAt: ['time', v561],
              waitIfNotPresent: false
              }));
            if (txn7.didTimeout) {
              const txn8 = await (ctc.sendrecv({
                args: [v463, v464, v465, v480, v493, v521, v534, v551, v561],
                evt_cnt: 0,
                funcNum: 11,
                lct: v552,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn8) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v646, time: v645, didSend: v253, from: v644 } = txn8;
                  
                  ;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v463,
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
                tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v646, time: v645, didSend: v253, from: v644 } = txn8;
              ;
              const v647 = stdlib.addressEq(v463, v644);
              const v648 = stdlib.addressEq(v480, v644);
              const v649 = v647 ? true : v648;
              stdlib.assert(v649, {
                at: 'reach standard library:197:11:dot',
                fs: ['at ./index.rsh:123:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'sender correct',
                who: 'Alice'
                });
              ;
              stdlib.protect(ctc2, await interact.informTimeout(), {
                at: './index.rsh:74:35:application',
                fs: ['at ./index.rsh:73:15:application call to [unknown function] (defined at: ./index.rsh:73:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:72:34:function exp)', 'at ./index.rsh:123:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'informTimeout',
                who: 'Alice'
                });
              
              return;
              
              }
            else {
              const {data: [v564], secs: v566, time: v565, didSend: v136, from: v563 } = txn7;
              ;
              const v567 = stdlib.addressEq(v480, v563);
              stdlib.assert(v567, {
                at: './index.rsh:122:11:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Alice'
                });
              const v574 = stdlib.safeAdd(v565, v465);
              const txn8 = await (ctc.sendrecv({
                args: [v463, v464, v465, v480, v493, v521, v534, v551, v564, v574, v514, v512],
                evt_cnt: 2,
                funcNum: 12,
                lct: v565,
                onlyIf: true,
                out_tys: [ctc0, ctc0],
                pay: [stdlib.checkedBigNumberify('./index.rsh:133:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn8) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [v579, v580], secs: v582, time: v581, didSend: v146, from: v578 } = txn8;
                  
                  ;
                  const v592 = stdlib.safeAdd(v581, v465);
                  sim_r.isHalt = false;
                  
                  return sim_r;
                  }),
                soloSend: true,
                timeoutAt: ['time', v574],
                tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              if (txn8.didTimeout) {
                const txn9 = await (ctc.sendrecv({
                  args: [v463, v464, v465, v480, v493, v521, v534, v551, v564, v574],
                  evt_cnt: 0,
                  funcNum: 13,
                  lct: v565,
                  onlyIf: true,
                  out_tys: [],
                  pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                  sim_p: (async (txn9) => {
                    const sim_r = { txns: [], mapRefs: [], maps: [] };
                    let sim_txn_ctr = stdlib.UInt_max;
                    const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                    
                    
                    const {data: [], secs: v628, time: v627, didSend: v219, from: v626 } = txn9;
                    
                    ;
                    sim_r.txns.push({
                      kind: 'from',
                      to: v480,
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
                  tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0],
                  waitIfNotPresent: false
                  }));
                const {data: [], secs: v628, time: v627, didSend: v219, from: v626 } = txn9;
                ;
                const v629 = stdlib.addressEq(v463, v626);
                const v630 = stdlib.addressEq(v480, v626);
                const v631 = v629 ? true : v630;
                stdlib.assert(v631, {
                  at: 'reach standard library:197:11:dot',
                  fs: ['at ./index.rsh:134:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Alice'
                  });
                ;
                stdlib.protect(ctc2, await interact.informTimeout(), {
                  at: './index.rsh:74:35:application',
                  fs: ['at ./index.rsh:73:15:application call to [unknown function] (defined at: ./index.rsh:73:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:72:34:function exp)', 'at ./index.rsh:134:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                  msg: 'informTimeout',
                  who: 'Alice'
                  });
                
                return;
                
                }
              else {
                const {data: [v579, v580], secs: v582, time: v581, didSend: v146, from: v578 } = txn8;
                ;
                const v583 = stdlib.addressEq(v463, v578);
                stdlib.assert(v583, {
                  at: './index.rsh:133:11:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Alice'
                  });
                const v584 = stdlib.digest([ctc0, ctc0], [v579, v580]);
                const v585 = stdlib.digestEq(v521, v584);
                stdlib.assert(v585, {
                  at: 'reach standard library:69:17:application',
                  fs: ['at ./index.rsh:135:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                  msg: null,
                  who: 'Alice'
                  });
                const v592 = stdlib.safeAdd(v581, v465);
                const txn9 = await (ctc.sendrecv({
                  args: [v463, v464, v465, v480, v493, v534, v551, v564, v580, v592, v517, v513],
                  evt_cnt: 2,
                  funcNum: 14,
                  lct: v581,
                  onlyIf: true,
                  out_tys: [ctc0, ctc0],
                  pay: [stdlib.checkedBigNumberify('./index.rsh:138:11:decimal', stdlib.UInt_max, '0'), []],
                  sim_p: (async (txn9) => {
                    const sim_r = { txns: [], mapRefs: [], maps: [] };
                    let sim_txn_ctr = stdlib.UInt_max;
                    const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                    
                    
                    const {data: [v595, v596], secs: v598, time: v597, didSend: v156, from: v594 } = txn9;
                    
                    ;
                    let v602;
                    const v603 = stdlib.eq(v596, v564);
                    if (v603) {
                      v602 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                      }
                    else {
                      const v604 = stdlib.safeAdd(v580, v551);
                      const v605 = stdlib.eq(v604, v596);
                      if (v605) {
                        v602 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                        }
                      else {
                        const v607 = stdlib.eq(v604, v564);
                        if (v607) {
                          v602 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                          }
                        else {
                          v602 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                          }
                        }
                      }
                    const cv485 = v602;
                    const cv486 = v597;
                    const cv493 = v493;
                    
                    await (async () => {
                      const v485 = cv485;
                      const v486 = cv486;
                      const v493 = cv493;
                      
                      if (await (async () => {
                        const v501 = stdlib.eq(v485, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                        
                        return v501;})()) {
                        const v508 = stdlib.safeAdd(v486, v465);
                        sim_r.isHalt = false;
                        }
                      else {
                        const v716 = stdlib.eq(v485, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                        const v719 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:149:16:decimal', stdlib.UInt_max, '2'), v464);
                        const v721 = v716 ? v463 : v480;
                        sim_r.txns.push({
                          kind: 'from',
                          to: v721,
                          tok: undefined /* Nothing */
                          });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }})();
                    return sim_r;
                    }),
                  soloSend: true,
                  timeoutAt: ['time', v592],
                  tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                  waitIfNotPresent: false
                  }));
                if (txn9.didTimeout) {
                  const txn10 = await (ctc.sendrecv({
                    args: [v463, v464, v465, v480, v493, v534, v551, v564, v580, v592],
                    evt_cnt: 0,
                    funcNum: 15,
                    lct: v581,
                    onlyIf: true,
                    out_tys: [],
                    pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                    sim_p: (async (txn10) => {
                      const sim_r = { txns: [], mapRefs: [], maps: [] };
                      let sim_txn_ctr = stdlib.UInt_max;
                      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                      
                      
                      const {data: [], secs: v610, time: v609, didSend: v185, from: v608 } = txn10;
                      
                      ;
                      sim_r.txns.push({
                        kind: 'from',
                        to: v480,
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
                    tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0],
                    waitIfNotPresent: false
                    }));
                  const {data: [], secs: v610, time: v609, didSend: v185, from: v608 } = txn10;
                  ;
                  const v611 = stdlib.addressEq(v463, v608);
                  const v612 = stdlib.addressEq(v480, v608);
                  const v613 = v611 ? true : v612;
                  stdlib.assert(v613, {
                    at: 'reach standard library:197:11:dot',
                    fs: ['at ./index.rsh:139:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Alice'
                    });
                  ;
                  stdlib.protect(ctc2, await interact.informTimeout(), {
                    at: './index.rsh:74:35:application',
                    fs: ['at ./index.rsh:73:15:application call to [unknown function] (defined at: ./index.rsh:73:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:72:34:function exp)', 'at ./index.rsh:139:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                    msg: 'informTimeout',
                    who: 'Alice'
                    });
                  
                  return;
                  
                  }
                else {
                  const {data: [v595, v596], secs: v598, time: v597, didSend: v156, from: v594 } = txn9;
                  ;
                  const v599 = stdlib.addressEq(v463, v594);
                  stdlib.assert(v599, {
                    at: './index.rsh:138:11:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Alice'
                    });
                  const v600 = stdlib.digest([ctc0, ctc0], [v595, v596]);
                  const v601 = stdlib.digestEq(v534, v600);
                  stdlib.assert(v601, {
                    at: 'reach standard library:69:17:application',
                    fs: ['at ./index.rsh:140:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                    msg: null,
                    who: 'Alice'
                    });
                  let v602;
                  const v603 = stdlib.eq(v596, v564);
                  if (v603) {
                    v602 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                    }
                  else {
                    const v604 = stdlib.safeAdd(v580, v551);
                    const v605 = stdlib.eq(v604, v596);
                    if (v605) {
                      v602 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                      }
                    else {
                      const v607 = stdlib.eq(v604, v564);
                      if (v607) {
                        v602 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                        }
                      else {
                        v602 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                        }
                      }
                    }
                  const cv485 = v602;
                  const cv486 = v597;
                  const cv493 = v493;
                  
                  v485 = cv485;
                  v486 = cv486;
                  v493 = cv493;
                  
                  txn3 = txn9;
                  continue;}
                
                }
              
              }
            
            }
          
          }
        
        }
      
      }
    const v716 = stdlib.eq(v485, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v719 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:149:16:decimal', stdlib.UInt_max, '2'), v464);
    const v721 = v716 ? v463 : v480;
    ;
    stdlib.protect(ctc2, await interact.seeOutcome(v485), {
      at: './index.rsh:153:28:application',
      fs: ['at ./index.rsh:152:11:application call to [unknown function] (defined at: ./index.rsh:152:23:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
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
  const {data: [v464, v465], secs: v467, time: v466, didSend: v73, from: v463 } = txn1;
  ;
  const v476 = stdlib.safeAdd(v466, v465);
  stdlib.protect(ctc1, await interact.acceptWager(v464), {
    at: './index.rsh:83:29:application',
    fs: ['at ./index.rsh:82:13:application call to [unknown function] (defined at: ./index.rsh:82:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v463, v464, v465, v476],
    evt_cnt: 0,
    funcNum: 1,
    lct: v466,
    onlyIf: true,
    out_tys: [],
    pay: [v464, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v482, time: v481, didSend: v82, from: v480 } = txn2;
      
      const v484 = stdlib.add(v464, v464);
      sim_r.txns.push({
        amt: v464,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v485 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v486 = v481;
      const v493 = v484;
      
      if (await (async () => {
        const v501 = stdlib.eq(v485, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v501;})()) {
        const v508 = stdlib.safeAdd(v486, v465);
        sim_r.isHalt = false;
        }
      else {
        const v716 = stdlib.eq(v485, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        const v719 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:149:16:decimal', stdlib.UInt_max, '2'), v464);
        const v721 = v716 ? v463 : v480;
        sim_r.txns.push({
          kind: 'from',
          to: v721,
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
    timeoutAt: ['time', v476],
    tys: [ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v463, v464, v465, v476],
      evt_cnt: 0,
      funcNum: 2,
      lct: v466,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v734, time: v733, didSend: v404, from: v732 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v463,
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
    const {data: [], secs: v734, time: v733, didSend: v404, from: v732 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:74:35:application',
      fs: ['at ./index.rsh:73:15:application call to [unknown function] (defined at: ./index.rsh:73:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:72:34:function exp)', 'at ./index.rsh:85:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v482, time: v481, didSend: v82, from: v480 } = txn2;
    const v484 = stdlib.add(v464, v464);
    ;
    let v485 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v486 = v481;
    let v493 = v484;
    
    let txn3 = txn2;
    while (await (async () => {
      const v501 = stdlib.eq(v485, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v501;})()) {
      const v508 = stdlib.safeAdd(v486, v465);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc2],
        timeoutAt: ['time', v508],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v463, v464, v465, v480, v493, v508],
          evt_cnt: 0,
          funcNum: 5,
          lct: v486,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v700, time: v699, didSend: v355, from: v698 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v480,
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
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v700, time: v699, didSend: v355, from: v698 } = txn5;
        ;
        const v701 = stdlib.addressEq(v463, v698);
        const v702 = stdlib.addressEq(v480, v698);
        const v703 = v701 ? true : v702;
        stdlib.assert(v703, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:103:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:74:35:application',
          fs: ['at ./index.rsh:73:15:application call to [unknown function] (defined at: ./index.rsh:73:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:72:34:function exp)', 'at ./index.rsh:103:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v521], secs: v523, time: v522, didSend: v113, from: v520 } = txn4;
        ;
        const v524 = stdlib.addressEq(v463, v520);
        stdlib.assert(v524, {
          at: './index.rsh:102:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v531 = stdlib.safeAdd(v522, v465);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc2],
          timeoutAt: ['time', v531],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v463, v464, v465, v480, v493, v521, v531],
            evt_cnt: 0,
            funcNum: 7,
            lct: v522,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v682, time: v681, didSend: v321, from: v680 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v480,
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
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v682, time: v681, didSend: v321, from: v680 } = txn6;
          ;
          const v683 = stdlib.addressEq(v463, v680);
          const v684 = stdlib.addressEq(v480, v680);
          const v685 = v683 ? true : v684;
          stdlib.assert(v685, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:107:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:74:35:application',
            fs: ['at ./index.rsh:73:15:application call to [unknown function] (defined at: ./index.rsh:73:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:72:34:function exp)', 'at ./index.rsh:107:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v534], secs: v536, time: v535, didSend: v119, from: v533 } = txn5;
          ;
          const v537 = stdlib.addressEq(v463, v533);
          stdlib.assert(v537, {
            at: './index.rsh:106:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v544 = stdlib.safeAdd(v535, v465);
          const v548 = stdlib.protect(ctc0, await interact.getFingers(), {
            at: './index.rsh:115:58:application',
            fs: ['at ./index.rsh:114:15:application call to [unknown function] (defined at: ./index.rsh:114:19:function exp)'],
            msg: 'getFingers',
            who: 'Bob'
            });
          const v549 = stdlib.protect(ctc0, await interact.getGuess(), {
            at: './index.rsh:116:54:application',
            fs: ['at ./index.rsh:114:15:application call to [unknown function] (defined at: ./index.rsh:114:19:function exp)'],
            msg: 'getGuess',
            who: 'Bob'
            });
          
          const txn6 = await (ctc.sendrecv({
            args: [v463, v464, v465, v480, v493, v521, v534, v544, v548],
            evt_cnt: 1,
            funcNum: 8,
            lct: v535,
            onlyIf: true,
            out_tys: [ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:119:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v551], secs: v553, time: v552, didSend: v130, from: v550 } = txn6;
              
              ;
              const v561 = stdlib.safeAdd(v552, v465);
              sim_r.isHalt = false;
              
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v544],
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v463, v464, v465, v480, v493, v521, v534, v544],
              evt_cnt: 0,
              funcNum: 9,
              lct: v535,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v664, time: v663, didSend: v287, from: v662 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v463,
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
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v664, time: v663, didSend: v287, from: v662 } = txn7;
            ;
            const v665 = stdlib.addressEq(v463, v662);
            const v666 = stdlib.addressEq(v480, v662);
            const v667 = v665 ? true : v666;
            stdlib.assert(v667, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:120:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:74:35:application',
              fs: ['at ./index.rsh:73:15:application call to [unknown function] (defined at: ./index.rsh:73:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:72:34:function exp)', 'at ./index.rsh:120:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v551], secs: v553, time: v552, didSend: v130, from: v550 } = txn6;
            ;
            const v554 = stdlib.addressEq(v480, v550);
            stdlib.assert(v554, {
              at: './index.rsh:119:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v561 = stdlib.safeAdd(v552, v465);
            const txn7 = await (ctc.sendrecv({
              args: [v463, v464, v465, v480, v493, v521, v534, v551, v561, v549],
              evt_cnt: 1,
              funcNum: 10,
              lct: v552,
              onlyIf: true,
              out_tys: [ctc0],
              pay: [stdlib.checkedBigNumberify('./index.rsh:122:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [v564], secs: v566, time: v565, didSend: v136, from: v563 } = txn7;
                
                ;
                const v574 = stdlib.safeAdd(v565, v465);
                sim_r.isHalt = false;
                
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: ['time', v561],
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            if (txn7.didTimeout) {
              const txn8 = await (ctc.sendrecv({
                args: [v463, v464, v465, v480, v493, v521, v534, v551, v561],
                evt_cnt: 0,
                funcNum: 11,
                lct: v552,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn8) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v646, time: v645, didSend: v253, from: v644 } = txn8;
                  
                  ;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v463,
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
                tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v646, time: v645, didSend: v253, from: v644 } = txn8;
              ;
              const v647 = stdlib.addressEq(v463, v644);
              const v648 = stdlib.addressEq(v480, v644);
              const v649 = v647 ? true : v648;
              stdlib.assert(v649, {
                at: 'reach standard library:197:11:dot',
                fs: ['at ./index.rsh:123:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'sender correct',
                who: 'Bob'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:74:35:application',
                fs: ['at ./index.rsh:73:15:application call to [unknown function] (defined at: ./index.rsh:73:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:72:34:function exp)', 'at ./index.rsh:123:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'informTimeout',
                who: 'Bob'
                });
              
              return;
              
              }
            else {
              const {data: [v564], secs: v566, time: v565, didSend: v136, from: v563 } = txn7;
              ;
              const v567 = stdlib.addressEq(v480, v563);
              stdlib.assert(v567, {
                at: './index.rsh:122:11:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Bob'
                });
              const v574 = stdlib.safeAdd(v565, v465);
              const txn8 = await (ctc.recv({
                didSend: false,
                evt_cnt: 2,
                funcNum: 12,
                out_tys: [ctc0, ctc0],
                timeoutAt: ['time', v574],
                waitIfNotPresent: false
                }));
              if (txn8.didTimeout) {
                const txn9 = await (ctc.sendrecv({
                  args: [v463, v464, v465, v480, v493, v521, v534, v551, v564, v574],
                  evt_cnt: 0,
                  funcNum: 13,
                  lct: v565,
                  onlyIf: true,
                  out_tys: [],
                  pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                  sim_p: (async (txn9) => {
                    const sim_r = { txns: [], mapRefs: [], maps: [] };
                    let sim_txn_ctr = stdlib.UInt_max;
                    const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                    
                    
                    const {data: [], secs: v628, time: v627, didSend: v219, from: v626 } = txn9;
                    
                    ;
                    sim_r.txns.push({
                      kind: 'from',
                      to: v480,
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
                  tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
                  waitIfNotPresent: false
                  }));
                const {data: [], secs: v628, time: v627, didSend: v219, from: v626 } = txn9;
                ;
                const v629 = stdlib.addressEq(v463, v626);
                const v630 = stdlib.addressEq(v480, v626);
                const v631 = v629 ? true : v630;
                stdlib.assert(v631, {
                  at: 'reach standard library:197:11:dot',
                  fs: ['at ./index.rsh:134:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Bob'
                  });
                ;
                stdlib.protect(ctc1, await interact.informTimeout(), {
                  at: './index.rsh:74:35:application',
                  fs: ['at ./index.rsh:73:15:application call to [unknown function] (defined at: ./index.rsh:73:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:72:34:function exp)', 'at ./index.rsh:134:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                  msg: 'informTimeout',
                  who: 'Bob'
                  });
                
                return;
                
                }
              else {
                const {data: [v579, v580], secs: v582, time: v581, didSend: v146, from: v578 } = txn8;
                ;
                const v583 = stdlib.addressEq(v463, v578);
                stdlib.assert(v583, {
                  at: './index.rsh:133:11:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Bob'
                  });
                const v584 = stdlib.digest([ctc0, ctc0], [v579, v580]);
                const v585 = stdlib.digestEq(v521, v584);
                stdlib.assert(v585, {
                  at: 'reach standard library:69:17:application',
                  fs: ['at ./index.rsh:135:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                  msg: null,
                  who: 'Bob'
                  });
                const v592 = stdlib.safeAdd(v581, v465);
                const txn9 = await (ctc.recv({
                  didSend: false,
                  evt_cnt: 2,
                  funcNum: 14,
                  out_tys: [ctc0, ctc0],
                  timeoutAt: ['time', v592],
                  waitIfNotPresent: false
                  }));
                if (txn9.didTimeout) {
                  const txn10 = await (ctc.sendrecv({
                    args: [v463, v464, v465, v480, v493, v534, v551, v564, v580, v592],
                    evt_cnt: 0,
                    funcNum: 15,
                    lct: v581,
                    onlyIf: true,
                    out_tys: [],
                    pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                    sim_p: (async (txn10) => {
                      const sim_r = { txns: [], mapRefs: [], maps: [] };
                      let sim_txn_ctr = stdlib.UInt_max;
                      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                      
                      
                      const {data: [], secs: v610, time: v609, didSend: v185, from: v608 } = txn10;
                      
                      ;
                      sim_r.txns.push({
                        kind: 'from',
                        to: v480,
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
                    tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
                    waitIfNotPresent: false
                    }));
                  const {data: [], secs: v610, time: v609, didSend: v185, from: v608 } = txn10;
                  ;
                  const v611 = stdlib.addressEq(v463, v608);
                  const v612 = stdlib.addressEq(v480, v608);
                  const v613 = v611 ? true : v612;
                  stdlib.assert(v613, {
                    at: 'reach standard library:197:11:dot',
                    fs: ['at ./index.rsh:139:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Bob'
                    });
                  ;
                  stdlib.protect(ctc1, await interact.informTimeout(), {
                    at: './index.rsh:74:35:application',
                    fs: ['at ./index.rsh:73:15:application call to [unknown function] (defined at: ./index.rsh:73:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:72:34:function exp)', 'at ./index.rsh:139:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                    msg: 'informTimeout',
                    who: 'Bob'
                    });
                  
                  return;
                  
                  }
                else {
                  const {data: [v595, v596], secs: v598, time: v597, didSend: v156, from: v594 } = txn9;
                  ;
                  const v599 = stdlib.addressEq(v463, v594);
                  stdlib.assert(v599, {
                    at: './index.rsh:138:11:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Bob'
                    });
                  const v600 = stdlib.digest([ctc0, ctc0], [v595, v596]);
                  const v601 = stdlib.digestEq(v534, v600);
                  stdlib.assert(v601, {
                    at: 'reach standard library:69:17:application',
                    fs: ['at ./index.rsh:140:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                    msg: null,
                    who: 'Bob'
                    });
                  let v602;
                  const v603 = stdlib.eq(v596, v564);
                  if (v603) {
                    v602 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                    }
                  else {
                    const v604 = stdlib.safeAdd(v580, v551);
                    const v605 = stdlib.eq(v604, v596);
                    if (v605) {
                      v602 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                      }
                    else {
                      const v607 = stdlib.eq(v604, v564);
                      if (v607) {
                        v602 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                        }
                      else {
                        v602 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                        }
                      }
                    }
                  const cv485 = v602;
                  const cv486 = v597;
                  const cv493 = v493;
                  
                  v485 = cv485;
                  v486 = cv486;
                  v493 = cv493;
                  
                  txn3 = txn9;
                  continue;}
                
                }
              
              }
            
            }
          
          }
        
        }
      
      }
    const v716 = stdlib.eq(v485, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v719 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:149:16:decimal', stdlib.UInt_max, '2'), v464);
    const v721 = v716 ? v463 : v480;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v485), {
      at: './index.rsh:153:28:application',
      fs: ['at ./index.rsh:152:11:application call to [unknown function] (defined at: ./index.rsh:152:23:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
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
  appApproval: `ByAUAAFQICgIDwIFDZgBCwkHeKABkAGoAVgwJgMBAAEBACI1ADEYQQfvKmRJIls1ASEFWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBQxABEBJgQwMQAI3SYEODEABE0khBgxAAFYhBhJEIQY0ARJENARJIhJMNAISEUQoZClkUEk1A1cwIDX/gARGR4xesDIGNAMhEFsPRDQDVwAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0IHBUghBjQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSVcAIDX/gYABWzX+STUFSSJbNf0hBVs1/IAEva7n1TT9FlA0/BZQsDIGNAMhEFsMRDT/MQASRDQDV1ggNP0WNPwWUAESRDT8NP4SQQAGIzX7QgAtNAOBiAFbNAMhDlsISTX6NPwSQQAHIQc1+0IAETT6NP4SQQAGIjX7QgADIzX7NP80AyVbNAMhBFs0A1cwIDT7MgY0AyRbQgXtSSEJDEAAU0ghCTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVzAgNf+ABCKflwOwMgY0AyERWw9ENANXACAxABI0/zEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgX1SCEJNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKVwAgNf8lWzX+IQRbNf1XMCA1/CRbNftXeCA1+iEKWzX5IQ9bNfhJNQVJIls19yEFWzX2gATDqpDBNPcWUDT2FlCwMgY0AyERWwxENP8xABJENANXWCA09xY09hZQARJEMgY0/Qg19TT/NP4WUDT9FlA0/FA0+xZQNPpQNPkWUDT4FlA09hZQNPUWUChLAVcAf2cpSwFXfxlnSCEGNQEyBjUCQgVOSYEKDEABAkkhCwxAAFNIIQs0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gATj2TY1sDIGNAMhD1sPRDT/MQASNANXMCAxABIRRLEisgE0AyRbsggjshA0/7IHs0IE0UghCzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSlcAIDX/JVs1/iEEWzX9VzAgNfwkWzX7V1ggNfpXeCA1+SEKWzX4STUFFzX3gASni8ILNPcWULAyBjQDIQ9bDEQ0/DEAEkQyBjT9CDX2NP80/hZQNP0WUDT8UDT7FlA0+lA0+VA0+BZQNPcWUDT2FlAoSwFXAH9nKUsBV38xZ0ghCTUBMgY1AkIERUkhDAxAAFNIIQw0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gASiBWaOsDIGNAMhClsPRDT/MQASNANXMCAxABIRRLEisgE0AyRbsggjshA0/7IHs0IDz0ghDDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSVcAIDX/JVs1/iEEWzX9VzAgNfwkWzX7V1ggNfpXeCA1+Uk1BRc1+IAEL9rpHTT4FlCwMgY0AyEKWwxENPwxABJEMgY0/Qg19zT/NP4WUDT9FlA0/FA0+xZQNPpQNPlQNPgWUDT3FlAoSwFXAH9nKUsBV38pZ0ghCzUBMgY1AkIDTEmBBAxAAdNJgQYMQADtSSENDEAAU0ghDTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVzAgNf+ABOIbs6mwMgY0AyEOWw9ENANXACAxABI0/zEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgLISCENNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpXACA1/yVbNf4hBFs1/VcwIDX8JFs1+1dYIDX6STUFNfmABGnuOz40+VCwMgY0AyEOWwxENP8xABJEMgY0/Qg1+DT/NP4WUDT9FlA0/FA0+xZQNPpQNPlQNPgWUChLAVcAf2cpSwFXfyFnSCEMNQEyBjUCQgJRSSEIDEAAUEghCDQBEkQ0BEkiEkw0AhIRRChkSTUDVzAgNf+ABMyZklywMgY0AyESWw9ENANXACAxABI0/zEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgHeSCEINAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yVbNf4hBFs1/VcwIDX8JFs1+0k1BTX6gAQ4sCMtNPpQsDIGNAMhElsMRDT/MQASRDIGNP0INfk0/zT+FlA0/RZQNPxQNPsWUDT6UDT5FlAoSwFXAH9nKUsBV38BZ0ghDTUBMgY1AkIBckkjDEAAjkkhBwxAAEAhBxJEIzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wMgY0AyETWw9EsSKyATQDJVuyCCOyEDQDVwAgsgezQgEJSCM0ARJENARJIhJMNAISEUQoZEk1AyVbNf+ABJqLkXSwMgY0AyETWwxENP+IAUg0A1cAIDT/NAMhBFsxACMyBjT/SQhCAGBIgaCNBogBKCI0ARJENARJIhJMNAISEURJNQVJIls1/yEFWzX+gASs0R/DNP8WUDT+FlCwNP+IAPcyBjT+CDX9MQA0/xZQNP4WUDT9FlAoSwFXADhnSCM1ATIGNQJCAH41/zX+Nf01/DX7Nfo1+TT9IxJBAC80/jT7CDX4NPk0+hZQNPsWUDT8UDT/FlA0+BZQKEsBVwBgZ0ghCDUBMgY1AkIAOrEisgEhBzT6C7III7IQNPw0+TT9IQcSTbIHs0IAADEZIQgSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAzE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 1,
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
                "name": "v464",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v465",
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
                "name": "v464",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v465",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v564",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
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
    "name": "_reach_e11",
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
                "name": "v579",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v580",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e12",
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
    "name": "_reach_e13",
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
                "name": "v595",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v596",
                "type": "uint256"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T25",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e14",
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
    "name": "_reach_e15",
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
                "name": "v521",
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
                "name": "v534",
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
                "name": "v551",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
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
    "name": "_reach_e9",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v564",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
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
    "name": "_reach_m11",
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
                "name": "v579",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v580",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m12",
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
    "name": "_reach_m13",
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
                "name": "v595",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v596",
                "type": "uint256"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T25",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m14",
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
    "name": "_reach_m15",
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
                "name": "v521",
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
                "name": "v534",
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
                "name": "v551",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
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
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002b3838038062002b388339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b6127bb806200037d6000396000f3fe6080604052600436106100f65760003560e01c8063832307571161008f578063a209ad4e11610061578063a209ad4e146101f6578063ab53f2c614610209578063b608682e1461022c578063bf2c5b241461023f578063de7369981461025257005b806383230757146101a85780638b9fadc8146101bd5780638e314769146101d0578063980b6eac146101e357005b80633a3e43b0116100c85780633a3e43b01461015c5780635471c5a81461016f57806379b8ead7146101825780637eea518c1461019557005b80631e93b0f1146100ff57806329bdceb9146101235780632c10a159146101365780633a31ddbd1461014957005b366100fd57005b005b34801561010b57600080fd5b506003545b6040519081526020015b60405180910390f35b6100fd6101313660046120fe565b610265565b6100fd6101443660046120fe565b610520565b6100fd6101573660046120fe565b6106af565b6100fd61016a366004612133565b610866565b6100fd61017d3660046120fe565b610adf565b6100fd610190366004612133565b610c3a565b6100fd6101a33660046120fe565b610ec5565b3480156101b457600080fd5b50600154610110565b6100fd6101cb3660046120fe565b611028565b6100fd6101de3660046120fe565b6111c0565b6100fd6101f13660046120fe565b61131a565b6100fd6102043660046120fe565b61158c565b34801561021557600080fd5b5061021e6117cf565b60405161011a92919061214f565b6100fd61023a3660046120fe565b61186c565b6100fd61024d3660046120fe565b611aa8565b6100fd6102603660046120fe565b611c02565b6102756009600054146026611d58565b61028f8135158061028857506001548235145b6027611d58565b6000808055600280546102a1906121ac565b80601f01602080910402602001604051908101604052809291908181526020018280546102cd906121ac565b801561031a5780601f106102ef5761010080835404028352916020019161031a565b820191906000526020600020905b8154815290600101906020018083116102fd57829003601f168201915b50505050508060200190518101906103329190612267565b905061034a6040518060200160405280600081525090565b61035b8260e0015143106028611d58565b7f976e76238b62fa1fe413b3051329828ffdf33cbe50b9b9a6e353e59f26de8968338460405161038c929190612313565b60405180910390a16103a034156024611d58565b60608201516103bb906001600160a01b031633146025611d58565b6103c9438360400151611d7e565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c080860151908401528581013560e08401528351610100840152600b6000554360015590516104f59183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b60405160208183030381529060405260029080519060200190610519929190611fb7565b5050505050565b6105306001600054146009611d58565b61054a8135158061054357506001548235145b600a611d58565b60008080556002805461055c906121ac565b80601f0160208091040260200160405190810160405280929190818152602001828054610588906121ac565b80156105d55780601f106105aa576101008083540402835291602001916105d5565b820191906000526020600020905b8154815290600101906020018083116105b857829003601f168201915b50505050508060200190518101906105ed919061233a565b905061060081606001514310600b611d58565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516106319291906123b3565b60405180910390a161064a816020015134146008611d58565b61065261203b565b815181516001600160a01b03909116905260208083018051835183015260408085015184519091015282513360609091015281830180516001905251439201919091525180016020820151604001526106aa81611dd1565b505050565b6106bf600f60005414604b611d58565b6106d9813515806106d257506001548235145b604c611d58565b6000808055600280546106eb906121ac565b80601f0160208091040260200160405190810160405280929190818152602001828054610717906121ac565b80156107645780601f1061073957610100808354040283529160200191610764565b820191906000526020600020905b81548152906001019060200180831161074757829003601f168201915b505050505080602001905181019061077c9190612483565b9050610791816101200151431015604d611d58565b7f25e51d2f848b9d4b7b439abc02e736d9b5c0f74cf1c0a0a6cddab55c2ab0626b33836040516107c29291906123b3565b60405180910390a16107d634156049611d58565b805161080a906001600160a01b031633146108005760608201516001600160a01b03163314610803565b60015b604a611d58565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f1935050505015801561084b573d6000803e3d6000fd5b506000808055600181905561086290600290612094565b5050565b610876600f600054146046611d58565b6108908135158061088957506001548235145b6047611d58565b6000808055600280546108a2906121ac565b80601f01602080910402602001604051908101604052809291908181526020018280546108ce906121ac565b801561091b5780601f106108f05761010080835404028352916020019161091b565b820191906000526020600020905b8154815290600101906020018083116108fe57829003601f168201915b50505050508060200190518101906109339190612483565b9050610952604051806040016040528060008152602001600081525090565b61096482610120015143106048611d58565b7fd1dd1b4b9285adf2c5ce90518e14323d4af41c7bfad5f681c09261f64252d99733846040516109959291906124a0565b60405180910390a16109a934156043611d58565b81516109c1906001600160a01b031633146044611d58565b60408051610a0d916109e791602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a00151146045611d58565b60e082015160408401351415610a265760018152610a72565b610a398261010001518360c00151611d7e565b6020820181905260408401351415610a545760028152610a72565b8160e0015181602001511415610a6d5760008152610a72565b600181525b610a7a61203b565b825181516001600160a01b039182169052602080850151835182015260408086015184518201526060808701518551941693019290925283518184018051919091528051439201919091526080850151905190910152610ad981611dd1565b50505050565b610aef600d600054146040611d58565b610b0981351580610b0257506001548235145b6041611d58565b600080805560028054610b1b906121ac565b80601f0160208091040260200160405190810160405280929190818152602001828054610b47906121ac565b8015610b945780601f10610b6957610100808354040283529160200191610b94565b820191906000526020600020905b815481529060010190602001808311610b7757829003601f168201915b5050505050806020019051810190610bac9190612483565b9050610bc18161012001514310156042611d58565b7f5c210ac1145c4e16faf75d6fa61460a7b8f80dc41bba4f6bdf744f79007642983383604051610bf29291906123b3565b60405180910390a1610c063415603e611d58565b805161080a906001600160a01b03163314610c305760608201516001600160a01b03163314610c33565b60015b603f611d58565b610c4a600d60005414603b611d58565b610c6481351580610c5d57506001548235145b603c611d58565b600080805560028054610c76906121ac565b80601f0160208091040260200160405190810160405280929190818152602001828054610ca2906121ac565b8015610cef5780601f10610cc457610100808354040283529160200191610cef565b820191906000526020600020905b815481529060010190602001808311610cd257829003601f168201915b5050505050806020019051810190610d079190612483565b9050610d1f6040518060200160405280600081525090565b610d318261012001514310603d611d58565b7f67f1c804af90d1a1d51d795a9796fb7e0cd7fdc00118103dfd79581713b75e4d3384604051610d629291906124a0565b60405180910390a1610d7634156038611d58565b8151610d8e906001600160a01b031633146039611d58565b60408051610dda91610db491602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a0015114603a611d58565b610de8438360400151611d7e565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260c08086015160a085015260e08087015191850191909152610100808701519185019190915286830135908401528351610120840152600f6000554360015590516104f59183910161254c565b610ed5600160005414600d611d58565b610eef81351580610ee857506001548235145b600e611d58565b600080805560028054610f01906121ac565b80601f0160208091040260200160405190810160405280929190818152602001828054610f2d906121ac565b8015610f7a5780601f10610f4f57610100808354040283529160200191610f7a565b820191906000526020600020905b815481529060010190602001808311610f5d57829003601f168201915b5050505050806020019051810190610f92919061233a565b9050610fa68160600151431015600f611d58565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503383604051610fd79291906123b3565b60405180910390a1610feb3415600c611d58565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561084b573d6000803e3d6000fd5b611038600b600054146035611d58565b6110528135158061104b57506001548235145b6036611d58565b600080805560028054611064906121ac565b80601f0160208091040260200160405190810160405280929190818152602001828054611090906121ac565b80156110dd5780601f106110b2576101008083540402835291602001916110dd565b820191906000526020600020905b8154815290600101906020018083116110c057829003601f168201915b50505050508060200190518101906110f5919061255b565b905061110a8161010001514310156037611d58565b7f63bba27b9239a4737471a2862db7b80ba95dfab2aa0da84664e856a1ed63a550338360405161113b9291906123b3565b60405180910390a161114f34156033611d58565b8051611183906001600160a01b031633146111795760608201516001600160a01b0316331461117c565b60015b6034611d58565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561084b573d6000803e3d6000fd5b6111d06005600054146017611d58565b6111ea813515806111e357506001548235145b6018611d58565b6000808055600280546111fc906121ac565b80601f0160208091040260200160405190810160405280929190818152602001828054611228906121ac565b80156112755780601f1061124a57610100808354040283529160200191611275565b820191906000526020600020905b81548152906001019060200180831161125857829003601f168201915b505050505080602001905181019061128d91906125e4565b90506112a18160a001514310156019611d58565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33836040516112d29291906123b3565b60405180910390a16112e634156015611d58565b805161080a906001600160a01b031633146113105760608201516001600160a01b03163314611313565b60015b6016611d58565b61132a600760005414601c611d58565b6113448135158061133d57506001548235145b601d611d58565b600080805560028054611356906121ac565b80601f0160208091040260200160405190810160405280929190818152602001828054611382906121ac565b80156113cf5780601f106113a4576101008083540402835291602001916113cf565b820191906000526020600020905b8154815290600101906020018083116113b257829003601f168201915b50505050508060200190518101906113e79190612678565b90506113ff6040518060200160405280600081525090565b6114108260c001514310601e611d58565b7fa2ddd0bc62239facbd79cdab1df75ee0cb72af9166d4371e62852a98cb4ca19c3384604051611441929190612313565b60405180910390a16114553415601a611d58565b815161146d906001600160a01b03163314601b611d58565b61147b438360400151611d7e565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a080860151908401528581013560c0840152835160e084015260096000554360015590516104f59183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b61159c6005600054146012611d58565b6115b6813515806115af57506001548235145b6013611d58565b6000808055600280546115c8906121ac565b80601f01602080910402602001604051908101604052809291908181526020018280546115f4906121ac565b80156116415780601f1061161657610100808354040283529160200191611641565b820191906000526020600020905b81548152906001019060200180831161162457829003601f168201915b505050505080602001905181019061165991906125e4565b90506116716040518060200160405280600081525090565b6116828260a0015143106014611d58565b7f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc033846040516116b3929190612313565b60405180910390a16116c734156010611d58565b81516116df906001600160a01b031633146011611d58565b6116ed438360400151611d7e565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b039081168083526020808601518185019081526040808801518187019081526060808a015187168189019081526080808c0151818b019081528d88013560a0808d019182528d5160c0808f0191825260076000554360015589519b8c019c909c529851978a0197909752945193880193909352905190971696850196909652945190830152925191810191909152905160e0820152610100016104f5565b6000606060005460028080546117e4906121ac565b80601f0160208091040260200160405190810160405280929190818152602001828054611810906121ac565b801561185d5780601f106118325761010080835404028352916020019161185d565b820191906000526020600020905b81548152906001019060200180831161184057829003601f168201915b50505050509050915091509091565b61187c600b600054146030611d58565b6118968135158061188f57506001548235145b6031611d58565b6000808055600280546118a8906121ac565b80601f01602080910402602001604051908101604052809291908181526020018280546118d4906121ac565b80156119215780601f106118f657610100808354040283529160200191611921565b820191906000526020600020905b81548152906001019060200180831161190457829003601f168201915b5050505050806020019051810190611939919061255b565b90506119516040518060200160405280600081525090565b61196382610100015143106032611d58565b7fe4891dc1b339486b9840f8d0c004ee6b9adfc0e7f704831a66f664617244ab1f3384604051611994929190612313565b60405180910390a16119a83415602e611d58565b60608201516119c3906001600160a01b03163314602f611d58565b6119d1438360400151611d7e565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c0808601519084015260e08086015190840152858101356101008401528351610120840152600d6000554360015590516104f59183910161254c565b611ab86007600054146021611d58565b611ad281351580611acb57506001548235145b6022611d58565b600080805560028054611ae4906121ac565b80601f0160208091040260200160405190810160405280929190818152602001828054611b10906121ac565b8015611b5d5780601f10611b3257610100808354040283529160200191611b5d565b820191906000526020600020905b815481529060010190602001808311611b4057829003601f168201915b5050505050806020019051810190611b759190612678565b9050611b898160c001514310156023611d58565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051611bba9291906123b3565b60405180910390a1611bce3415601f611d58565b805161080a906001600160a01b03163314611bf85760608201516001600160a01b03163314611bfb565b60015b6020611d58565b611c12600960005414602b611d58565b611c2c81351580611c2557506001548235145b602c611d58565b600080805560028054611c3e906121ac565b80601f0160208091040260200160405190810160405280929190818152602001828054611c6a906121ac565b8015611cb75780601f10611c8c57610100808354040283529160200191611cb7565b820191906000526020600020905b815481529060010190602001808311611c9a57829003601f168201915b5050505050806020019051810190611ccf9190612267565b9050611ce38160e00151431015602d611d58565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3383604051611d149291906123b3565b60405180910390a1611d2834156029611d58565b8051611183906001600160a01b03163314611d525760608201516001600160a01b03163314611d55565b60015b602a5b816108625760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600082611d8b838261272c565b9150811015611dcb5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401611d75565b92915050565b60408051602081019091526000815260208201515160011415611ef557611e08826020015160200151836000015160400151611d7e565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e00160405160208183030381529060405260029080519060200190610ad9929190611fb7565b602082015151600214611f0d57815160600151611f11565b8151515b6001600160a01b03166108fc611f306002856000015160200151611f58565b6040518115909202916000818181858888f1935050505015801561084b573d6000803e3d6000fd5b6000811580611f7c57508282611f6e8183612744565b9250611f7a9083612763565b145b611dcb5760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401611d75565b828054611fc3906121ac565b90600052602060002090601f016020900481019282611fe5576000855561202b565b82601f10611ffe57805160ff191683800117855561202b565b8280016001018555821561202b579182015b8281111561202b578251825591602001919060010190612010565b506120379291506120d1565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260200161208f60405180606001604052806000815260200160008152602001600081525090565b905290565b5080546120a0906121ac565b6000825580601f106120b0575050565b601f0160209004906000526020600020908101906120ce91906120d1565b50565b5b8082111561203757600081556001016120d2565b6000604082840312156120f857600080fd5b50919050565b60006040828403121561211057600080fd5b61211a83836120e6565b9392505050565b6000606082840312156120f857600080fd5b60006060828403121561214557600080fd5b61211a8383612121565b82815260006020604081840152835180604085015260005b8181101561218357858101830151858201606001528201612167565b81811115612195576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806121c057607f821691505b602082108114156120f857634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff8111828210171561221357634e487b7160e01b600052604160045260246000fd5b60405290565b604051610120810167ffffffffffffffff8111828210171561221357634e487b7160e01b600052604160045260246000fd5b80516001600160a01b038116811461226257600080fd5b919050565b600061010080838503121561227b57600080fd5b6040519081019067ffffffffffffffff821181831017156122ac57634e487b7160e01b600052604160045260246000fd5b816040526122b98461224b565b815260208401516020820152604084015160408201526122db6060850161224b565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6001600160a01b03831681526060810161211a602083018480358252602090810135910152565b60006080828403121561234c57600080fd5b6040516080810181811067ffffffffffffffff8211171561237d57634e487b7160e01b600052604160045260246000fd5b6040526123898361224b565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b0383168152813560208083019190915260608201908301358015158082146123e157600080fd5b80604085015250509392505050565b6000610140828403121561240357600080fd5b61240b6121e1565b90506124168261224b565b815260208201516020820152604082015160408201526124386060830161224b565b60608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e082015261010080830151818301525061012080830151818301525092915050565b6000610140828403121561249657600080fd5b61211a83836123f0565b6001600160a01b03831681526080810161211a60208301848035825260208082013590830152604090810135910152565b80516001600160a01b031682526020810151602083015260408101516040830152606081015161250c60608401826001600160a01b03169052565b506080818101519083015260a0808201519083015260c0808201519083015260e08082015190830152610100808201519083015261012090810151910152565b6101408101611dcb82846124d1565b6000610120828403121561256e57600080fd5b612576612219565b61257f8361224b565b815260208301516020820152604083015160408201526125a16060840161224b565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b600060c082840312156125f657600080fd5b60405160c0810181811067ffffffffffffffff8211171561262757634e487b7160e01b600052604160045260246000fd5b6040526126338361224b565b815260208301516020820152604083015160408201526126556060840161224b565b60608201526080830151608082015260a083015160a08201528091505092915050565b600060e0828403121561268a57600080fd5b60405160e0810181811067ffffffffffffffff821117156126bb57634e487b7160e01b600052604160045260246000fd5b6040526126c78361224b565b815260208301516020820152604083015160408201526126e96060840161224b565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561273f5761273f612716565b500190565b600081600019048311821515161561275e5761275e612716565b500290565b60008261278057634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212208454a37e692de6297b37ce837580978fee3d1e7a9c208db9086e678c2b13baa164736f6c634300080c0033`,
  BytecodeLen: 11064,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:80:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:85:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:150:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:91:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:103:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:104:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:107:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:109:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:120:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:121:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:123:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  13: {
    at: './index.rsh:126:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  14: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:134:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  15: {
    at: './index.rsh:136:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  16: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:139:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
