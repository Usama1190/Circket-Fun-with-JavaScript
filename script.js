function login() {
    let userInput = document.getElementById('userinput').value;
    document.getElementById('username').innerHTML = userInput;

    let first_letter = userInput.charAt(0);
    let first_letter_caps = first_letter.toUpperCase();
    document.getElementById('circle').innerHTML = first_letter_caps;

    document.getElementById('con-1').classList = 'hide';
    document.getElementById('con-2').classList = 'show';
}

var country_list = [];

function Teams(id) {
    let head_1 = document.getElementById('head-1');
    head_1.classList = 'hide';

    let head_2 = document.getElementById('head-2');
    head_2.classList = 'show';


    let team_flag = document.getElementById(id).attributes[0].value;

    let team_flag_src_list = country_list.push(team_flag);

    if(country_list.length > 2) {
        country_list.pop();
        document.getElementById('con-2').style.display = 'none';
        document.getElementById('con-3').style.display = 'inline-block';
    }


    document.getElementById('inside').style.display = 'inline-block';


    let img1 = document.getElementById('img1').attributes[0];
    img1.value = country_list[0];

    document.getElementById('vs').innerHTML = 'Vs';

    let img2 = document.getElementById('img2').attributes[0];
    img2.value = country_list[1];


    let img3 = document.getElementById('img3').attributes[0];
    img3.value = country_list[0];

    let img4 = document.getElementById('img4').attributes[0];
    img4.value = country_list[1];
}

function Toss() {
    if(country_list.length < 2) {
        document.getElementById('con-2').style.display = 'inline-block';
        document.getElementById('para2').innerHTML = 'Please select two teams';
        document.getElementById('para2').style.color = 'red';
    }
    else {
        document.getElementById('con-2').style.display = 'none';
        document.getElementById('con-3').style.display = 'inline-block';
    }
}

function toss() {
    let random_number = parseInt(Math.random() * 2);
    
    if(random_number == 1) {
        alert('Congratulations! You won.');
        document.getElementById('con-3').style.display = 'none';
        document.getElementById('con-4').classList = 'show';
    }
    else {
        alert("Ooop's! You loss.");
        document.getElementById('con-3').style.display = 'none';
        document.getElementById('con-5').classList = 'show';

        document.getElementById('para3').innerHTML = 'You loss the toss, opponent decide to bat first!';
        document.getElementById('para3').style.color = '#ff0505';
    }
}

function batting() {
    document.getElementById('con-4').classList = 'hide';
    document.getElementById('con-5').classList = 'show';
    document.getElementById('para3').innerHTML = 'You won the toss and decided to bat first!';
    document.getElementById('para3').style.color = '#5cb85c';
}

function bowling() {
    document.getElementById('con-4').classList = 'hide';
    document.getElementById('con-5').classList = 'show';
    document.getElementById('para3').innerHTML = 'You won the toss and decided to ball first!';
    document.getElementById('para3').style.color = '#5cb85c';
}

function startMatch() {
    document.getElementById('con-5').style.display = 'none';
    document.getElementById('con-9').classList = 'show';
}

function superOver() {}

function testMatch() {}