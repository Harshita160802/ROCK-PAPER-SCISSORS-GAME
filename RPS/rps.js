let userScore=0;
let compScore=0;

 let choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
 const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
 };
const drawGame=()=>{
   console.log("game was draw.");
   msg.innerText="game was draw";
   msg.style.backgroundColor='#081b31';
};
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const showwinner=(userwin,choiceId,compChoice)=>{
   if(userwin){
      userScore++;
      userScorepara.innerText=userScore;
      console.log("you win");
      msg.innerText=`you win! Your ${choiceId} beats ${compChoice}`;
      msg.style.backgroundColor="green";
      
   }else{
      compScore++;
      compScorepara.innerText=compScore;
      console.log("you  lose");
      msg.innerText=`you lose ${compChoice} beats  your ${choiceId}`;
      msg.style.backgroundColor="red";
   }
};

 const playGame=(choiceId)=>{

const compChoice=genCompChoice();

if(choiceId== compChoice){
drawGame();
}else{
   let userwin=true;
   if(choiceId==="rock"){
     userwin= compChoice==="paper"?false:true;
   }else if(choiceId==="paper"){
      userwin=compChoice==="scissors"?false:true;
   }else {
      userwin=compChoice==="rock"?false:true;
   }
   showwinner(userwin,choiceId,compChoice);
}
 };

 choices.forEach((choice) => {
    console.log(choice);
   choice.addEventListener("click",()=>{
    const choiceId=choice.getAttribute("id");
console.log("choice was clicked",choiceId);
   playGame(choiceId);
   });
 });