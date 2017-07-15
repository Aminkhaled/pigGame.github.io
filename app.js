/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores = [0,0],
    roundScore = 0,
    activePlayer = 0,
    gamePlaying = true;


document.querySelector('#score-0').textContent = "0";
document.querySelector('#score-1').textContent = "0";
document.querySelector('#current-0').textContent = "0";
document.querySelector('#current-1').textContent = "0";
document.querySelector('.dice').style.display = "none";




document.querySelector('.btn-roll').addEventListener("click",function () {
if(gamePlaying){
    //    Make Random Here
    var dice = Math.floor(Math.random()*6) + 1;
//display images of dice here
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = "block";
    diceDom.src = 'dice-'+ dice +'.png';

//  update the round score if the rolled number was not 1  
    if( dice !== 1){
        roundScore +=dice;
        document.querySelector('#current-'+ activePlayer).textContent = roundScore;
    }else {
        roundScore = 0;
        document.querySelector('#current-'+ activePlayer).textContent = roundScore;

        nextPlayer();

    }

}
});


document.querySelector('.btn-hold').addEventListener("click",function () {
if(gamePlaying){
    //write the global score
    scores[activePlayer] +=roundScore;
    document.querySelector('#score-'+activePlayer).textContent= scores[activePlayer];
//    check who wins
    if(scores[activePlayer] >= 20){
        document.querySelector('#name-'+activePlayer).innerHTML = "Winner!";
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');

        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        gamePlaying = false;

    }else{
        //    UI of active players
        roundScore = 0;
        document.querySelector('#current-'+ activePlayer).textContent = roundScore;
        nextPlayer();
    }
}
    

});


function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = "none";
}
document.querySelector('.btn-new').addEventListener("click",function () {
    scores =[0,0];
    roundScore = 0;
    activePlayer = 0;
    document.querySelector('#score-0').textContent = "0";
    document.querySelector('#score-1').textContent = "0";
    document.querySelector('#current-0').textContent = "0";
    document.querySelector('#current-1').textContent = "0";
    document.querySelector('.dice').style.display = "none";
    document.querySelector('#name-0').innerHTML = "Player 1";
    document.querySelector('#name-1').innerHTML = "Player 2";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');

    document.querySelector('.player-1-panel').classList.remove('active');
gamePlaying = true;

});