const quiz = [
    {
        question: "What is the full form of HTML?",
        a: 'Hyper Text Markup Language',
        b: 'Hyper Link Markup Language',
        c: 'Hyper Text Makeup Language',
        d: 'Hello Text Markup Language',
        ans: "ans1"
    },
    {
        question: "What is the full form of CSS?",
        a: 'Cascading Style Sheets',
        b: 'Coordinating Style Sheets',
        c: 'Cascading Styling Sheets',
        d: 'Cascading Style Supplement',
        ans: 'ans1'
    },
    {
        question: "What does JavaScript primarily do?",
        a: 'Style the content of a webpage',
        b: 'Provide structure to a webpage',
        c: 'Add interactivity to a webpage',
        d: 'Define the layout of a webpage',
        ans: 'ans3'
    },
    {
        question: "Which programming language is commonly used for building web servers?",
        a: 'Python',
        b: 'Java',
        c: 'Node.js',
        d: 'Ruby',
        ans: 'ans3'
    },
    {
        question: "What is the purpose of the <head> element in HTML?",
        a: 'Define the main content of the page',
        b: 'Contain metadata about the document',
        c: 'Create a navigation menu',
        d: 'Specify the page layout',
        ans: 'ans2'
    },
    {
        question: "In CSS, what property is used to change the text color of an element?",
        a: 'text-color',
        b: 'font-color',
        c: 'color',
        d: 'text-style',
        ans: 'ans3'
    },
    {
        question: "What is the file extension of a JavaScript file?",
        a: '.html',
        b: '.css',
        c: '.js',
        d: '.java',
        ans: 'ans3'
    },
    {
        question: "What does the acronym API stand for?",
        a: 'Application Programming Interface',
        b: 'Advanced Program Integration',
        c: 'Automated Processing Interface',
        d: 'Application Process Integration',
        ans: 'ans1'
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        a: '<link>',
        b: '<a>',
        c: '<hype>',
        d: '<url>',
        ans: 'ans2'
    },
    {
        question: "What is the purpose of a CSS reset?",
        a: 'To clear all styling from elements',
        b: 'To add default styles to elements',
        c: 'To reset the browser cache',
        d: 'To reload the CSS file',
        ans: 'ans1'
    }
];


const question = document.querySelector('.question');
const option1 = document.querySelector('.option_one');
const option2 = document.querySelector('.option_two');
const option3 = document.querySelector('.option_three');
const option4 = document.querySelector('.option_four');
const ans = document.querySelectorAll('.option')
const submit = document.querySelector('.submit');


let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionList = quiz[currentQuestion]
    question.innerText = questionList.question
    option1.innerText = questionList.a
    option2.innerText = questionList.b
    option3.innerText = questionList.c
    option4.innerText = questionList.d

}

loadQuestion();

function checkAnswer() {
    let answer;

    ans.forEach((curAnswerElement) => {
        if (curAnswerElement.checked) {
            answer = curAnswerElement.id;
            curAnswerElement.checked = false;
        }
    });
    return answer;
}

submit.addEventListener('click', () => {
    const checkedAnswer = checkAnswer();

    if (checkedAnswer === quiz[currentQuestion].ans) {
        score++;
    }

    currentQuestion++

    if (currentQuestion < quiz.length) {
        loadQuestion();
    }
    else {
        alert(`Your Score is ${score}/${quiz.length}`)
    }
})


