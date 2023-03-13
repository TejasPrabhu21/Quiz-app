const qno = document.querySelector('.qno');
const question = document.querySelector('.question');

const quizss = new Map([
    ['question','Which is the best programming language ?'],
    [1,'c'],
    [2,'java'],
    [3,'javaScript'],
    [4,'c++'],
    ['answer','3'],
]);

const quizs = {
    1 : {
        questions:'Which is the best programming language ?',
        1:'c',
        2:'java',
        3:'javaScript',
        4:'c++',
    },
    2 : {
        questions:'Which is the not best programming language ?',
        1:'Python ',
        2:'java',
        3:'javaScript',
        4:'c++',
    }
};

const quiz = new Map([
    [1, { 
      question: 'What is the capital of France?', 
      1:'Paris ',
      2:'London',
      3:'Berlin',
      4:'Madrid++',
      answer: 1 ,
    }],
    [2, {
      question: 'Who invented the telephone?',

      options: ['Thomas Edison', 'Alexander Graham Bell', 'Nikola Tesla', 'Elisha Gray'],
      answer: 'Alexander Graham Bell'
    }],
    [3, {
      question: 'What is the largest planet in our solar system?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      answer: 'Jupiter'
    }]
  ]);

let score = 0;
let qindex = 1;

display();

function display(){
    console.log(quiz);
    for(const [keys,values] of quiz){
        if(keys == qindex)
        {
            question.textContent = `${values.question}`;
            for (const i of [1,2,3,4]) {
                const tag = document.getElementById(`.opt${i}`);
                tag.textContent = 'helo';
            }
        }
    }
}

// function display(){
//     qno.textContent = `Question ${qindex}.`;
//     question.textContent = `${quiz.get('question')}`;
//     console.log(quiz.get('question'));
    
//     let i = 1;
//     for(const [key,value] of quiz)
//     if(typeof key == 'number'){
//         const tag = document.querySelector(`.opt${key}`);
//         tag.textContent = value;
//         console.log(`Option ${key} : ${value}`);
//     }
// }
