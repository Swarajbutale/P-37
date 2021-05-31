class Quiz {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){gameState = data.val();})

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    background("yellow");
    fill(0);
    textSize(30);
    text("Result",415,30);
    text("---------",415,45);

    Contestant.getPlayerInfo();
    //write code to change the background color here
    if(gameState===1) {
      
    
    //write code to show a heading for showing the result of Quiz
    
    //call getContestantInfo( ) here
    
    if(allContestants !== undefined) {
      debugger;
      var display_Answers = 230;
      fill("blue");
      textSize(20);
      text("*Note : Contestants who answered correct are highlited in green color!",130,230);
     // var display_position = 130;
      for(var plr in allContestants) {
        debugger;
        var correctAns = "2";
        if(correctAns===allContestants[plr].answer) {
          fill("green");
        } else {
          fill("red");
          
          
        }

        display_Answers+=30;
          textSize(15);
          text(allContestants[plr].name +" : "+allContestants[plr].answer,120,display_Answers);

          
      }

    }
    }

   
    
    
  }

}
