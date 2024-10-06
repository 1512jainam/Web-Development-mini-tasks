const qustionDataBase = [
    {
      question: "Full form of Html?",
      option1: "Hello to my world",
      option2: "Hey text my language",
      option3: "Hyper text Markup language",
      option4: "Hyper text Makeup language",
      ans: "answer3",
    },
    {
      question: "why do we use ReactJs?",
      option1: "For building UI's",
      option2: "For back-end",
      option3: "For data-bases",
      option4: "It's nothing.",
      ans: "answer1",
    },
    {
      question: "Which tag is incorrect?",
      option1: "<kbd>",
      option2: "<html>",
      option3: "<abbr>",
      option4: "All are correct",
      ans: "answer4",
    },
    {
      question: "which is wrong here?",
      option1: "var x = 10;",
      option2: "x = 10",
      option3: "let x = 10;",
      option4: "const x = 10;",
      ans: "answer2",
    },
    {
      question: "What is git?",
      option1: "version control system",
      option2: "A ugly thing",
      option3: "Distributed version control system",
      option4: "A useful stuff",
      ans: "answer3",
    },
    {
      question: "Which is correct?",
      option1: "<html><body>...</body></html>",
      option2: "<body><html>...</html></body>",
      option3: "<script><head>...</head></script>",
      option4: "All are correct.",
      ans: "answer1",
    },
    {
      question: "Which is unchangeable",
      option1: "var x = 10;",
      option2: "let x = 10;",
      option3: "const x = 10;",
      option4: "All are unchangeable.",
      ans: "answer3",
    },
    {
      question: "How many kinds of loops are here in js?",
      option1: "2",
      option2: "6",
      option3: "1",
      option4: "5",
      ans: "answer4",
    },
    {
      question: "What does an array called in js?",
      option1: "Array",
      option2: "Object",
      option3: "String",
      option4: "Boolean",
      ans: "answer2",
    },
    {
      question: "Which is the best js Library?",
      option1: "ReactJs",
      option2: "JQuery",
      option3: "Angular",
      option4: "Vue",
      ans: "answer1",
    },
  ];


const questioncontainer=document.querySelector("h2");
const option1=document.querySelector("#option1");
const option2=document.querySelector("#option2");
const option3=document.querySelector("#option3");
const option4=document.querySelector("#option4");
const submitButton=document.querySelector(".btn");
const useranswer=document.querySelectorAll(".answer");
const scorearea=document.querySelector("#showscore");

let contq=0;
let score=0;

const mainf= ()=>{
    const list=qustionDataBase[contq];
    questioncontainer.innerText=`${contq+1}) ${list.question}`;
    option1.innerText=list.option1;
    option2.innerText=list.option2;
    option3.innerText=list.option3;
    option4.innerText=list.option4;
}

mainf();

const checkanswer=()=>{
    let ans;
    useranswer.forEach((data)=>{
        if(data.checked){
            ans=data.id;
        }
    });
    return ans;
};

const deselectall=()=>{
    useranswer.forEach((data) => {
        data.checked = false;
      });
};

submitButton.addEventListener("click",()=>{

    const checkans=checkanswer();

    if(checkans === qustionDataBase[contq].ans){
        console.log(checkans);
        score++;
    }
    contq++;
    deselectall();

    if(contq<qustionDataBase.length){
        mainf();
    }
    else{
        scorearea.innerHTML=`<h3>Your score is ${score} `;

    }
});