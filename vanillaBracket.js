
function Competitor (name){
    this.name = name;
    this.wins = 0;
}

function Match (topCompetitor, bottomCompetitor){
    this.topCompetitor = topCompetitor;
    this.topScore = 0;
    this.bottomCompetitor = bottomCompetitor;
    this.bottomScore = 0;
    this.declareWinner = function ( x ) {
        this.winner = x;
        x.wins++;
    }
}

function SingleEliminationBracket (numCompetitors){
    this.matchList = [];
    this.numCompetitors = numCompetitors;
    this.numMatches = numCompetitors - 1;
}



//builds out bracket
function buildBracket (bracket, players){
    var tempCompetitor = new Competitor("BYE");
    if (players.length < bracket.numCompetitors){
        while (players.length < bracket.numCompetitors){
            players.push(tempCompetitor);
        }
        //shuffle players here
    }

    var roundSize = bracket.numCompetitors / 2;
    var i = 0;
    var p = 0;
    while(i < roundSize){
        var tempMatch = new Match(players[p], players[p+1]);
        bracket.matchList.push(tempMatch);
        i++;
        p+=2;
    }

    var x = 0;

    while (bracket.matchList.length < bracket.numMatches){
        var futureMatch = new Match(bracket.matchList[x].winner, bracket.matchList[x+1].winner);
        bracket.matchList.push(futureMatch);
    }

}