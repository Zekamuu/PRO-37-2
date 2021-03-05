class Quiz{
    constructor(){
    }
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data){
            gameState = data.val();
        })
    }
    updateState(){
        database.ref('gameState').update({
            gameState: gameState
        })
    }
    async start(){
        if(gameState == 0){
            contestant = new Contestant();
            var contestantCountRef = await database.ref('contestantCount').once("value");
            if(contestantCountRef.exists()){
                contestantCount = contestantCountRef.val()
                contestant.getCount()
            }
        }
        

    }


}