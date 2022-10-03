import { loadStdlib, ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

const isAlice = await ask.ask(
  `Are you Alice?`,
  ask.yesno
);
const who = isAlice ? 'Alice' : 'Bob';
console.log(`Starting Morra game! as ${who}`);

let acc = null;
const createAcc = await ask.ask(
  `Would you like to create an account? (only possible on devnet)`,
  ask.yesno
);

if (createAcc) {
  acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000));
} else {
    const secret = await ask.ask(
      `What is your account secret?`,
      (x => x)
  );
  acc = await stdlib.newAccountFromSecret(secret);
}

let ctc = null;
if (isAlice) {
  ctc = acc.contract(backend);
  ctc.getInfo().then((info) => {
    console.log(`The contract is deployed as = ${JSON.stringify(info)}`); 
  });
} else {
  const info = await ask.ask(
    `Please paste the contract information:`,
    JSON.parse
  );
  ctc = acc.contract(backend, info);
}

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async () => fmt(await stdlib.balanceOf(acc));

const before = await getBalance();
console.log(`Your balance is ${before}`);

const interact = { ...stdlib.hasRandom };

interact.informTimeout = () => {
  console.log(`There was a timeout.`);
  process.exit(1);
};

if(isAlice){
  // if alice, set the wager
  const amt= await ask.ask(
      `How much do you want to wager ?`,
      stdlib.parseCurrency
  );
  interact.wager= amt;
  interact.deadline= {ETH: 100, ALGO: 100, CFX: 1000}[stdlib.connector];      // the faster the network, the longer the deadline
} else{
  // if bob, accept the wager
  interact.acceptWager= async (amt) => {
      const accepted= await ask.ask(
          `Do you accept the wager of ${fmt(amt)} ?`,
          ask.yesno
      );
      if(!accepted){
          // bob rejects to play, if the wager is too high
          process.exit(0);
      }
  };
}

const HAND= [0,1,2,3,4,5];
interact.getHand= async () => {
  const hand= await ask.ask(`What number of fingers will you play ?`, (x) => {
      const hand= HAND[x];
      if(hand == undefined){
          throw Error(`Not a valid hand ${hand}`);
      }
      return hand;        // if not undefined
  });
  console.log(`You played ${HAND[hand]}`);
  return hand;
}

const GUESS= [0,1,2,3,4,5,6,7,8,9,10];
interact.getGuess= async (hand) => {
  const Ghand= await ask.ask(`What total number of fingers will you guess ?`, (x) => {
      const Ghand= GUESS[x];
      if(Ghand == undefined){
          throw Error(`Not a valid hand of guess ${Ghand}`);
      }
      return Ghand;        // if not undefined
  });
  console.log(`You played ${GUESS[Ghand]}`);
  return Ghand;
}
interact.seeOutcome = async (totalHand) => {
  console.log(`The total fingers number is ${GUESS[totalHand]}`);
};

const OUTCOME = ['Bob wins', 'Draw', 'Alice wins'];
interact.seeWinner = async (outcome) => {
  console.log(`The outcome is ${OUTCOME[outcome]}`);
};

const part = isAlice ? ctc.p.Alice : ctc.p.Bob;
await part(interact);

const after = await getBalance();
console.log(`Your balance is now ${after}`);

ask.done();

// import {loadStdlib} from '@reach-sh/stdlib';
// import * as backend from './build/index.main.mjs';
// const stdlib = loadStdlib();

// const startingBalance= stdlib.parseCurrency(100);
// const accAlice= await stdlib.newTestAccount(startingBalance);
// const accBob= await stdlib.newTestAccount(startingBalance);

// const fmt = (x) => stdlib.formatCurrency(x, 4);
// const getBalance= async (Who) => fmt(await stdlib.balanceOf(Who));
// const beforeAlice= await getBalance(accAlice);
// const beforeBob= await getBalance(accBob);

// // tie two users in a contract with Bob attaches to the contract
// const ctcAlice= accAlice.contract(backend);
// const ctcBob= accBob.contract(backend, ctcAlice.getInfo());

// const HAND= [0,1,2,3,4,5];
// const GUESS= [0,1,2,3,4,5,6,7,8,9,10];
// const OUTCOME= ['Bob wins', 'Draw', 'Alice wins'];

// // implement the methods declared
// const Player= (Who) =>({
//   ...stdlib.hasRandom,    //using standard library to generate ramdom number
//   getHand: async() => {
//     const hand= Math.floor(Math.random() * 6);
//     console.log(`${Who} played ${HAND(hand)}`);
//     if(Math.random() <= 0.01){
//       for(let i= 0; i< 10; i++){
//         console.log(`${Who} takes their sweet time sending it back...`);
//         await stdlib.wait(1);
//       }
//     }
//     return hand;
//   },

//   getGuess: (hand) => {
//     const guess= Math.floor(Math.random() * 6) + HAND[hand];
//     console.log(`${Who} guess the total is ${GUESS[guess]}`);
//     return guess;
//   },

//   seeOutcome: (totalHand) => {
//     console.log(`${Who} saw the outcome is ${GUESS[totalHand]}`);
//   },

//   seeWinner: (outcome) => {
//     console.log(`${Who} saw the outcome ${OUTCOME[outcome]}`);
//   },

//   informTimeout: () => {
//     console.log(`${Who} observed a timeout`);
//   },
// });

// // initialize backend for each participant and wait for it to complete
// await Promise.all([
//   ctcAlice.p.Alice({
//     // implement Alice's interact object here
//     ...Player('Alice'),
//     wager: stdlib.parseCurrency(5),           // wager is 5 unit of network token
//     deadline: 10,
//   }),

//   ctcBob.p.Bob({
//     // implement Bob's interact object here
//     ...Player('Bob'),
//     acceptWager: (amt) => {
//       console.log(`Bob accepts the wager of amount ${fmt(amt)}`);
//     },
//   }),
// ]);

// // summarize the balance
// const afterAlice= await getBalance(accAlice);
// const afterBob= await getBalance(accBob);

// console.log(`Alice went from ${beforeAlice} to ${afterAlice}.`);
// console.log(`Bob went from ${beforeBob} to ${afterBob}.`);





// const HAND= [0,1,2,3,4,5];
