var canvas;
var gameState;
var contestantCount;
var database;
var quiz;
var question;
var contestant, contestants;
var selectedAnswer, option1, option2;
var submitNameButton;
var nameInput;
function setup() {
  canvas = createCanvas(850, 400);
  database = firebase.database();


  gameState = 0;
  selectedAnswer = null;
  question = new Question();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();


}


function draw() {
  background("yellow");

  submitNameButton.mousePressed(() => {
    submitNameButtonPressed();
  })


  question.question1();
  question.question2();
  
  textSize(40);
  fill(0);
  text("PRO-37-QUIZ", 300, 100);
  if (gameState == 2) {
    textSize(20);
    fill(0);
    question.show();
    text("What starts and ends with the letter 'E' but only has one letter?", 150, 50);
    text("Selected Answer: " + selectedAnswer, 350, 300);
  }
}

function submitNameButtonPressed(){

  
    firebase.database().ref("/contestantCount").once("value", snapshot => {
      if (snapshot.exists()) {
        contestantCount = snapshot.val();
      }
      else {
        database.ref("/").set({
          contestantCount: 0
        })
        
      }
    }
    )
    firebase.database().ref("/gameState").once("value", snapshot => {
      if (snapshot.exists()) {
    
      }
      else {
        database.ref("/").set({
          contestantCount: 0,
          gameState:0
        })
      }
    }
    )

    if (firebase.database().ref("/contestants").once("value", snapshot => {
      if (snapshot.exists()) {

      }else {
          database.ref("/contestants").set(0)
      }}))


    contestant.name = nameInput.value();
    contestantCount = contestantCount + 1;
    contestant.index = contestantCount;
    console.log(contestantCount);
    contestant.updatePlayerRecord();
    contestant.updateCount(contestantCount);

  
}
