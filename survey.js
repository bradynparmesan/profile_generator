// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let answerArray = [];
// const questionBank = [
//   "What's your name? ",
//   "What's an activity you enjoy? ",
//   "Which city are you from? ",
//   "What is your favourite food? ",
//   "What is your superpower? ",
//   "What is your favourite animal? "
// ];

// for (x = 0; x < questionBank.length; x++) {
//   rl.question(questionBank[x], (answer) => {
//     answerArray.push(answer);

//     console.log(`Thank you for your valuable feedback: ${answer}`);
//     rl.close()
//   })
// };



// works
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('What\'s your name? ', (name) => { //(callback function)
    console.log(`It's a pleasure to meet you ${name}`);
    rl.question('What is your favourite food? ', (food) => {
        console.log(`Oh, that is interesting. I love ${food} too!`);
        rl.question('What city do you live in? ', (location) => {
            console.log(`Very cool! I will have to check out ${location}`);
            rl.question('What is your superpower? ', (superpower) => {
                console.log(`Awesome.  You must be great at ${superpower}`);
                console.log(`${name}, ${food}, ${location}, ${superpower}`); 
                rl.close();
            });
        });
    });
});
