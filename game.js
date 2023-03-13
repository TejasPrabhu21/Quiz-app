const questions = [
    {
        'question': "What is the capital city of France?",
        'a': "Rome",
        'b': "Paris",
        'c': "Madrid",
        'd': "Berlin",
        'correct': 'b'
    },
    {
        'question': "Which of the following is not a primary color?",
        'a': "Red",
        'b': "Green",
        'c': "Blue",
        'd': "Yellow",
        'correct': 'd'
    },
    {
        'question': "What is the largest planet in our solar system?",
        'a': "Venus",
        'b': "Mars",
        'c': "Jupiter",
        'd': "Saturn",
        'correct': 'c'
    },
    {
        'question': "What is the name of the smallest country in the world?",
        'a': "Monaco",
        'b': "Andorra",
        'c': "San Marino",
        'd': "Vatican City",
        'correct': 'd'
    },
    {
        'question': "What is the name of the longest river in Africa?",
        'a': "Nile",
        'b': "Congo",
        'c': "Zambezi",
        'd': "Niger",
        'correct': 'a'
    }
];


const question = document.querySelector('.question');
const option = document.querySelectorAll('.option');
const qno = document.querySelector('.hud-text');
const scores = document.querySelector('#score');
const submitbtn = document.querySelector('.submit');

// const max_score = 100;
// const max_question = 3;

// function start() {
//     count = 0;
//     score = 0;
//     // availableQuestions = [...questions];
//     getQuestion();
// } 
// let finalscore=0;

// function getQuestion(){
//     // if(availableQuestions.length ===0 || count > max_question)
//     //     finalscore = score;

//     count++;
//     qno.textContent = `${count} of ${max_question}`;

//     const qindex = Math.floor(Math.random() * questions.length);
//     console.log(qindex);
//     currentquestion = questions[qindex];
//     question.textContent = currentquestion.question;

//     option[0].innerText = questions.a;
//     console.log(questions.a);

// }
// start();

let index = 0;
let score = 0;
const total = questions.length;
const loadQuestion = function () {
    if (index < total) {
        reset();
        const data = questions[index];
        question.innerText = data.question;

        question.innerText = data.question;

        option[0].nextElementSibling.innerText = data['a'];
        option[1].nextElementSibling.innerText = data['b'];
        option[2].nextElementSibling.innerText = data['c'];
        option[3].nextElementSibling.innerText = data['d'];

        submitbtn.addEventListener('click', function () {
            option.forEach(
                (input) => {
                    if (input.checked) {
                        submit();
                    }
                }
            )
        });
    } else {
        endquiz();
    }
}


// const submit = function () {
//     const data = questions[index];
//     const ans = getanswer();
//     console.log(data.correct, ans);
//     if (ans == data.correct) {
//         score = score + 1;
//         console.log(score);
//     }
//     index++;
//     loadQuestion();
// }
const submit = function(){
    const data = questions[index];
    if (data) { // Check if data exists
        const ans = getanswer();
        console.log(data.correct,ans);
        if(ans == data.correct){
            score = score + 1;
            console.log(score);
        }
        index++;
        loadQuestion();
    }
}


const getanswer = function () {
    let answer;
    option.forEach(
        (input) => {
            if (input.checked) {
                console.log(input.value);
                answer = input.value;
            }
        }
    )
    console.log(answer);
    return answer;
}
const reset = function () {
    option.forEach((input) => {
        input.checked = false;
    })
    scores.innerText = score;
}

const endquiz = function () {
    document.getElementById('box').innerHTML = `
        <div class = "results">
            <h1>Thank you<\h1>
            <h2>your score is ${score}/${total}.<\h2>
            <a href="/index.html" class="quit-btn">Quit</a>
        <\div>
    `;
}

loadQuestion();





