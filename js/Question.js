class Question{
    constructor(){
        this.option1button = createButton("1:Everyone");
        this.option1button.position(150, 100);
        this.option1button.hide();
        option1 = ("1:Everyone");
        this.option2button = createButton("2:Envelope");
        this.option2button.position(150, 120);
        this.option2button.hide();
        option2 = ("2:Envelope");
        this.submitButton = createButton("Submit Answer")
        this.submitButton.position(400, 350);
        this.submitButton.hide();
        nameInput = createInput("Name");
        nameInput.position(350, 200);
        submitNameButton = createButton("Submit Name");
        submitNameButton.position(390, 250);

    }
    show(){
        this.option1button.show();
        this.option2button.show();
        this.submitButton.show();
        nameInput.hide();
        submitNameButton.hide();
        
        
        gameState = 1;
    }
    question1(){
        this.option1button.mousePressed(()=>{

            selectedAnswer = option1;
        })
    }
    question2(){
        this.option2button.mousePressed(()=>{

            selectedAnswer = option2;
        })

    }
    submit(){
        this.submitButton.mousePressed(()=>{

        })
    }
}