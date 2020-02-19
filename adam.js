var data = {
    qnum:0,
    questions:[
        {
            title:"What comes after A?",
            answer:"B",
            bgcolor:"yellow",
            img:"http://placekitten.com/100/100"
        },
        {
            title:"Is 5 bigger than 4?",
            answer:"Yes",
            bgcolor:"#ABC",
            img:"http://placekitten.com/200/200"
        },
        {
            title:"What is the color of a banana",
            answer:"Yellow",
            bgcolor:"rgb(2,150,232)",
            img:"http://placekitten.com/300/300"
        },
        {
            title:"Is the color of a zebra black and blue",
            answer:"No",
            bgcolor:"lightblue",
            img:"http://placekitten.com/400/400"
        }
    ]
}

function Start(){
    document.querySelector('#question').innerText = data.questions[data.qnum].title;
    document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
    document.querySelector("#result").innerHTML = "<img src='"+data.questions[data.qnum].img+"' />";
}

function CheckAnswer(){
    var myInp = document.querySelector("#answer").value;
    console.log(myInp)

    if(myInp === data.questions[data.qnum].answer){
        document.querySelector("#result").innerHTML = '<h1>CORRECT!</h1>';
        
        data.qnum++;
        document.querySelector('#question').innerText = data.questions[data.qnum].title;
        document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
        document.querySelector("#result").innerHTML = "<img src='"+data.questions[data.qnum].img+"' />";

    } else {
        document.querySelector("#result").innerHTML = '<h1>WRONG!</h1>';
    }
}

Start()