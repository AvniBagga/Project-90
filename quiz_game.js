p1name=localStorage.getItem("player_1");
p2name=localStorage.getItem("player_2");

p1score=0;
p2score=0;

document.getElementById("p1name").innerHTML=p1name+" : ";
document.getElementById("p2name").innerHTML=p2name+" : ";

document.getElementById("p1score").innerHTML=p1score;
document.getElementById("p2score").innerHTML=p2score;

document.getElementById("player_ques").innerHTML="Question Turn : "+p1name;
document.getElementById("player_ans").innerHTML="Answer Turn : "+p2name;

function send(){
    
}