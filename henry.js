var data = {
    qnum: 0,
    questions: [
        {
            title: "What comes after A?",
            answer: "B",
            bgcolor: "yellow",
            img: "http://placekitten.com/100/100"
        },
        {
            title: "Is 5 bigger than 4",
            answer: "Yes",
            bgcolor: "#ABC",
            img: "http://placekitten.com/200/200"
        },
        {
            title: "What is the color of a banana?",
            answer: "Yellow",
            bgcolor: "rgb(2,150,232",
            img: "http://placekitten.com/300/300"
        },
        {
            title: "What is the color of a tomato?",
            answer: "Red",
            bgcolor: "#ADD",
            img: "http://placekitten.com/400/400"
        }
    ]
}

function Start() {
    document.querySelector("#h_q").innerText = data.questions[data.qnum].title;
    document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
    document.querySelector("#h_r").innerHTML = "<img src='" + data.questions[data.qnum].img + "' />";
}
// var answer = "B";
var qnum = 0;

var questions = [
    "What comes after A?",
    "Is 5 bigger than 4",
    "What is the color of a banana?",
    // "What is the color of a tomato?"
];

var answers = [
    "B",
    "Yes",
    "Yellow",
    "Red"
];

var bgcolor = [
    "yellow",
    "#ABC",
    "rgb(2,150,232",
    "#ADD"
]

var imgs = [
    "http://placekitten.com/100/100",
    "http://placekitten.com/200/200",
    "http://placekitten.com/300/300",
    "http://placekitten.com/400/400"
]

function CheckAnswer() {
    var myInp = document.querySelector("#answer").value;
    console.log(myInp);

    if (myInp === data.questions[data.qnum].answer) {
        alert("Correct!")
        document.querySelector("#h_r").innerHTML = "<h1>Correct!</h1>";

        //Remember to change "qnum" to "data.qnum" below
        data.qnum++;
        document.querySelector("#h_q").innerText = data.questions[data.qnum].title;
        document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
        document.querySelector("#h_r").innerHTML = "<img src='" + data.questions[data.qnum].img + "' />";
        //        
        //changing the question to the next question
        //         if(qnum === 1){
        //             qnum++;
        //                 document.querySelector("#h_q").innerText = "Is 5 bigger than 4?";
        //             answer = "Yes";
        //     } else if (qnum === 2){
        //         qnum++;
        //         alert("Wrong!")
        //         document.querySelector("#h_r").innerText = "What is the color of a bananna?";
        //         answer = "Yellow";

    } else {
        //alert("Wrong!");
        document.querySelector("#h_r").innerText = "<h1>Wrong!</h1>";
    }
}

Start();