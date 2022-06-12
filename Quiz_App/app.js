const data = [
    {
        "ans": "Uniform",
        "a": "Unable",
        "b": "Underneath",
        "c": "Umbrella",
        "d": "Uniform",
        "question": "What word is used in the NATO Phonetic Alphabet for the letter U?",

    },
    {
        "ans": "Dollar",
        "a": "Pound",
        "b": "Rino",
        "c": "Sing",
        "d": "Dollar",
        "question": "What is the basic unit of currency for Singapore?",
    },
    {
        "ans": "The Prodigy",
        "a": "Squeeze",
        "b": "Gorillaz",
        "c": "Kaiser Chiefs",
        "d": "The Prodigy",
        "question": "Which band includes 'Liam Howlett'?",

    },
    {
        "ans": "Jeff Bridges",
        "a": "Michael Douglas",
        "b": "Errol Flynn",
        "c": "John Wayne",
        "d": "Jeff Bridges",
        "question": "Which actor played the role of The Dude in The Big Lebowski?",
    },
    {
        "ans": "Marilyn Manson",
        "a": "MercyMe",
        "b": "Three 6 Mafia",
        "c": "The Velvet Underground",
        "d": "Marilyn Manson",
        "question": "Which American rock band released the studio album 'Mechanical Animals'?",
    }
]



/**----------------------DOM selecion---------------------------- */

const qusName = document.getElementById('qus-name');
const label = document.getElementsByTagName('label');
const option1 = document.getElementById('answer1')
const option2 = document.getElementById('answer2')
const option3 = document.getElementById('answer3')
const option4 = document.getElementById('answer4')
const input = document.querySelectorAll('input');
const submitBtn = document.getElementById('submit');
const qusNum = document.getElementById('num');
const ulContent = document.getElementById('list-content')
const score = document.getElementById('score')

let rigthAnswerCount = 0;
let wrongAnswerCount = 0;


/**----------------------------get Data------------------------- */



//  set input value dynamically....................


let qustionCount = -1;
function loadQus() {
    const questionList = data[qustionCount]
    qusName.innerText = questionList.question;
    option1.innerText = data[qustionCount].a;
    option2.innerText = data[qustionCount].b;
    option3.innerText = data[qustionCount].c;
    option4.innerText = data[qustionCount].d;
    qusNum.innerText = qustionCount + 1 + ".";

}


// get input value..............................

function getInputValue(value) {
    matchValue(value)
}


//  submit action........................
let states = true;
submitBtn.addEventListener('click', function () {

    qustionCount++
    loadQus()

    if (states) {
        for (let i = 0; i < label.length; i++) {
            input[i].value = label[i].innerHTML;
            input[i].checked = false;
        }
        submitBtn.innerText = 'submit';
        ulContent.style.display = 'block'
        if(qustionCount > 4){
          
        }
    }

    if (qustionCount === 4) {
        submitBtn.innerText = 'submit and Get Result';
        const result = document.createElement('p');
        result.innerHTML = `Your total Answer is ${rigthAnswerCount}`
        const worngRes = document.createElement('p');
        worngRes.innerHTML = `You have Submitted ${wrongAnswerCount} worng Answer.`
        score.appendChild(result);
        score.appendChild(worngRes);

    }

})


function matchValue(matchValue) {
    if (matchValue === data[qustionCount].ans) {
        console.log(data[qustionCount].ans)
        rigthAnswerCount++
    } else {
        wrongAnswerCount++
        console.log(matchValue)
    }
    console.log(rigthAnswerCount)
}





