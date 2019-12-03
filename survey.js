const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let answ =[];
rl.question('What\'s your name? Nicknames are also acceptable :)', (answer) => { answ.push(answer);
  rl.question('What\'s an activity you like doing?', (answer) => {
    answ.push(answer);
    rl.question('What do you listen to while doing that?', (answer) => {
      answ.push(answer);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {answ.push(answer);
        rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {answ.push(answer);
          rl.question('Which sport is your absolute favourite?', (answer) => {answ.push(answer);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {answ.push(answer);
              console.log(`my name is ${answ[0]} , i like do ${answ[1]} , i listen to ${answ[2]} , my favourite meal is ${answ[3]}, my favourite thing to eat is ${answ[4]} ,my absolute favourite sport is ${answ[5]} and superpower is ${answ[6]}`);
              rl.close();
            }); 
          });
        });
      });
    });
  });

});
