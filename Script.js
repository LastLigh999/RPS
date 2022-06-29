window.onload = (function(){
const elem = document.getElementsByClassName('button');
for(let i=0; i< elem.length; i++){
    elem[i].addEventListener( "click", event => {playerChoose(elem[i].id)} )
}

})
function playerChoose(choice){
    computerChoose(choice);
    console.log(choice);
}
function computerChoose(choice){
    let value = Math.floor(Math.random() * 3)
    
    switch(value){
        case 0:
            value = "Rock"
            break;
        case 1:
            value = "Paper"
            break;
        default: 
            value = "Scissors"
            break;
    }
    console.log("computer choice " + value);
    play(value,choice)
}
function play(computer, player){
    if(player == "Rock"){
        if(computer == "Rock"){
            return console.log("Draw");
        }else if(computer == "Paper"){
            return console.log("Lost");
        }else{
            return console.log("Won");
        }
    }else if(player == "Paper"){
        if(computer == "Rock"){
            return console.log("Won");
        }else if(computer == "Paper"){
            return console.log("Draw");
        }else{
            return console.log("Lost");
        }
    }else{
        if(computer == "Rock"){
            return console.log("Lost");
        }else if(computer == "Paper"){
            return console.log("Won");
        }else{
            return console.log("Draw");
        }
    }

}