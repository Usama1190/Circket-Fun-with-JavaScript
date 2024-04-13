function teamA() {
    document.getElementById('container-2').style.display = 'none';
    document.getElementById('seletedTeam').innerHTML = 'Team A';
}

function teamB() {
    document.getElementById('container-2').style.display = 'none';
    document.getElementById('seletedTeam').innerHTML = 'Team B';
}

var playerNameList = [];

function addPlayers() {
    let playerNames = document.getElementById('playerName').value;
    playerNameList.push(playerNames);

    if(playerNames !== undefined) {
        document.getElementById('selectedPlayer').innerHTML = playerNameList;
    }
    else {
        document.getElementById('selectedPlayer').innerHTML = 'Please enter player names';
    }

    if(playerNameList.length > 11) {
        playerNameList.pop();
    }
}

function readyToss() {
    if(playerNameList.length > 3) {
        document.getElementById('container-3').style.display = 'none';
    }
}

function toss() {
    let head = 0;
    let tail = 1;
    let x = parseInt(Math.random() * 2);

    if(head == x) {
        alert('You won!');
        document.getElementById('container-5').style.display = 'none';
    }
    else {
        alert('You loss!');
        document.getElementById('container-5').style.display = 'none';
        document.getElementById('container-6').style.display = 'none';
        document.getElementById('con-9-1').innerHTML = playerNameList;
        document.getElementById('con-10-1').innerHTML = 
        'Shane Watson' + '<br>' + 'Shane Watson' + '<br>'  + 
        'Kevin Pieterson' + '<br>' + 'Shane Watson';
    }
}

function batting() {
    document.getElementById('container-6').style.display = 'none';

    document.getElementById('con-9-1').innerHTML = playerNameList;
    document.getElementById('con-10-1').innerHTML = 
    'Shane Watson' + '<br><br>' + 'Shane Watson' + '<br><br>'  + 
    'Kevin Pieterson' + '<br><br>' + 'Shane Watson';
}

function balling() {
    document.getElementById('container-6').style.display = 'none';

    document.getElementById('head-2').innerHTML = 'Your Balling';

    document.getElementById('con-9-1').innerHTML = playerNameList;
    document.getElementById('con-10-1').innerHTML = 
    'Shane Watson' + '<br>' + 'Shane Watson' + '<br>'  + 
    'Kevin Pieterson' + '<br>' + 'Shane Watson';
}