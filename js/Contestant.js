class Contestant {
    constructor() {
        this.score = 0;
        this.name = null;
    }
    show(){
        
    }
    getCount() {
        var contestantCountRef = database.ref('contestantCount');
        contestantCountRef.on("value", function (data) {
            contestantCount = data.val().contestantCount;
        });
    }
    updateCount(count){
        database.ref('/contestantCount').update(count);
    }
    
    //console.log(this.index);

    updatePlayerRecord() {
        var playerIndex = "contestants/contestant" + contestant.index;
        database.ref(playerIndex).set({
            name: this.name,
            score: this.score
        });
    }
    static getPlayerInfo(){
        var contestantInfoRef = database.ref("contestantCount");
        contestantInfoRef.on("value", (data) => {
            allPlayers = data.val();
        });
    }
}