var uCP=[];
var gameP=[];
var clr=["red", "green", "blue", "yellow"];
var level=0;
var st=false;
var wrng=new Audio("/sounds/wrong.mp3");

$(document).keypress(function(){
   if(!st)
   {
      $("#level-title").text("Level "+level);
      nextS();
      st=true;
   }
});

$(".btn").click(function(){
   var uCid=$(this).attr("id");
   uCP.push(uCid);
   playS(uCid);
   anP(uCid);
   checkA(uCP.length-1);
});

function checkA(currL){
   if(gameP[currL] === uCP[currL])
   {
      console.log("Success");
      if(uCP.length === gameP.length)
      {
         setTimeout(function(){
            nextS();
         }, 1000);
      }
   }
   else{
      playS("wrong");
      $("body").addClass("game-over");
      setTimeout(function(){$("body").removeClass("game-over");}, 200);
      $("#level-title").text("Game Over, Press any key to restart");
      console.log("wrong");
      StrtO();
   }
}

function nextS(){
   uCP=[];

   level++;
   $("#level-title").text("Level "+level);

   var rn=Math.floor((Math.random())*4);

   var randomclr=clr[rn];

   gameP.push(randomclr);

   $("#"+randomclr).fadeOut(100).fadeIn(100).fadeIn(100);

   playS(randomclr);
   
}


function playS(nc){
   var aud=new Audio("/sounds/"+nc+".mp3");
   aud.play();
}

function anP(currC){
         $("#"+currC).addClass("pressed");
      setTimeout(function(){$("#"+currC).removeClass("pressed");}, 100);
   }

function StrtO(){
   st=false;
   level=0;
   gameP=[];
}







