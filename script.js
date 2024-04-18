function login() {
    let userInput = document.getElementById('userinput').value;
    document.getElementById('username').innerHTML = userInput;

    let first_letter = userInput.charAt(0);
    let first_letter_caps = first_letter.toUpperCase();
    document.getElementById('circle').innerHTML = first_letter_caps;

    if(userInput.length > 2) {
        document.getElementById('con-1').classList = 'hide';
        document.getElementById('con-2').classList = 'show';
    }
    else {
        document.getElementById('para1').innerHTML = 'Please enter your name';
        document.getElementById('para1').style.color = 'red';
    }
}

var our_country_name;
var oppo_country_name;
var country_list = [];

function Teams(id) {
    let head_1 = document.getElementById('head-1');
    head_1.classList = 'hide';

    let head_2 = document.getElementById('head-2');
    head_2.classList = 'show';


    let team_flag = document.getElementById(id).attributes[0].value;

    let team_flag_src_list = country_list.push(team_flag);

    if(country_list[0] == 'assets/pakistan.jpg') {
        our_country_name = 'Pakistan';
    }
    else if(country_list[0] == 'assets/pakistan.jpg') {
        our_country_name = 'Pakistan';
    }
    else if(country_list[0] == 'assets/new zealand1.png') {
        our_country_name = 'New zealand';
    }
    else if(country_list[0] == 'assets/afghanistan.png') {
        our_country_name = 'Afghanistan';
    }
    else if(country_list[0] == 'assets/india2.png') {
        our_country_name = 'India';
    }
    else if(country_list[0] == 'assets/westindies1.png') {
        our_country_name = 'West indeis';
    }
    else if(country_list[0] == 'assets/austria2.png') {
        our_country_name = 'Austrilia';
    }
    else if(country_list[0] == 'assets/srilanka.jpeg') {
        our_country_name = 'Srilanka';
    }
    else if(country_list[0] == 'assets/england1.png') {
        our_country_name = 'England';
    }


    if(country_list[1] == 'assets/pakistan.jpg') {
        oppo_country_name = 'Pakistan';
    }
    else if(country_list[1] == 'assets/pakistan.jpg') {
        oppo_country_name = 'Pakistan';
    }
    else if(country_list[1] == 'assets/new zealand1.png') {
        oppo_country_name = 'New zealand';
    }
    else if(country_list[1] == 'assets/afghanistan.png') {
        oppo_country_name = 'Afghanistan';
    }
    else if(country_list[1] == 'assets/india2.png') {
        oppo_country_name = 'India';
    }
    else if(country_list[1] == 'assets/westindies1.png') {
        oppo_country_name = 'West indeis';
    }
    else if(country_list[1] == 'assets/austria2.png') {
        oppo_country_name = 'Austrilia';
    }
    else if(country_list[1] == 'assets/srilanka.jpeg') {
        oppo_country_name = 'Srilanka';
    }
    else if(country_list[1] == 'assets/england1.png') {
        oppo_country_name = 'England';
    }

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


    let img5 = document.getElementById('img5').attributes[0];
    img5.value = country_list[0];

    let img6 = document.getElementById('img6').attributes[0];
    img6.value = country_list[1];
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

var a = 1;
console.log(a, 'original value');

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

        document.getElementById('para3').innerHTML = 
        oppo_country_name + ' won the toss and decided to bat first.';
        document.getElementById('para3').style.color = '#ff0505';

        document.getElementById('imgbal').classList.add('show');

        document.getElementById('country-name').innerHTML = our_country_name;
        document.getElementById('oppo-country-name').innerHTML = oppo_country_name;

        a = 0;
        console.log(a, 'inside when i loss the toss');
    }
}


function decide(id) {
    document.getElementById('con-4').classList = 'hide';
    document.getElementById('con-5').classList = 'show';

    if (id == 'bat') {
        document.getElementById('para3').innerHTML = our_country_name + 
        ' won the toss and decided to bat first!';
        document.getElementById('para3').style.color = '#5cb85c';
        document.getElementById('imgbat').classList.add('show');
        
        console.log(a, 'inside when i chosse batting');
    }
    else if (id == 'bal') {
        document.getElementById('para3').innerHTML = our_country_name + 
        ' won the toss and decided to ball first!';
        document.getElementById('para3').style.color = '#5cb85c';
        document.getElementById('imgbal').classList.add('show');

        a = 0;
        console.log(a, 'inside when i chosse bowling');
    }

    document.getElementById('country-name').innerHTML = our_country_name;
    document.getElementById('oppo-country-name').innerHTML = oppo_country_name;
}


// match start
function startMatch() {
    document.getElementById('con-6').style.display = 'none';
    document.getElementById('con-9').classList = 'show';
}


// match type
function matchType(id) {
    let matchType = document.getElementById(id).innerHTML;
    document.getElementById('para4').innerHTML = matchType;

    document.getElementById('con-9').classList = 'hide';
    document.getElementById('con-10').classList = 'show';
}


var list_of_score = [];

var list_of_acurate_score = [];

var list_of_wickets = [];


function Score() {

    let score = parseInt(Math.random() * 11);

    let push_score_list = list_of_score.push(score);

    if(list_of_score.length > 5) {
        document.getElementById('con-11').classList.add('hide');
    }

    if(score == 0) {
        alert('Dot ball');
    }
    else if(score == 1) {
        alert('Just single');
    }
    else if(score == 2) {
        alert('Couple');
    }
    else if(score == 3) {
        alert('3 runs');
    }
    else if(score == 4) {
        alert('Boundary, 4 runs');
    }
    else if(score == 5) {
        alert('No ball + boundary. 4 runs');
    }
    else if(score == 6) {
        alert('Boundary, 6 runs!');
    }
    else if(score == 7) {
        alert('OUT, Bowled!');
    }
    else if(score == 8) {
        alert('OUT, LBW!');
    }
    else if(score == 9) {
        alert('OUT, Catch!');
    }
    else if(score == 10) {
        alert('OUT, Run out!');
    }

    if(score > 6) {
        list_of_score.pop();
        list_of_score.push('w');
    }
    else if(score < 7) {
        list_of_acurate_score.push(score);
    }

    let sum_of_score = 0;

    for(let i = 0; i < list_of_acurate_score.length; i++) {
        sum_of_score += list_of_acurate_score[i];
    }

    console.log(a, 'inside score');

    if( a == 1) {
        document.getElementById('score').innerHTML = 
        our_country_name + ': ' + sum_of_score;
        console.log(a, 'our country name');
    }
    else if(a == 0) {
        document.getElementById('score').innerHTML = 
        oppo_country_name + ': ' + sum_of_score;
        console.log(a, 'oppo country name');
    }

    

    if(list_of_score.length > 5) {
        let target = sum_of_score + 1;
        document.getElementById('Target').innerHTML = 'Target: ' + target;

        document.getElementById('startSecondIning').classList = 'show';
        document.getElementById('startSecondIning').innerHTML = 'Start 2nd ining';

        document.getElementById('para5').classList = 'show';

        console.log(a, 'score, length > 5');

        if(a == 1) {
            document.getElementById('para5').innerHTML = oppo_country_name + 
            ' needs ' + target + ' runs in ' + list_of_score.length + 
            ' balls to win.';

            document.getElementById('score').innerHTML = 
            our_country_name + ': ' + sum_of_score;
            console.log(a, 'our country name');
        }
        else if(a == 0) {
            document.getElementById('para5').innerHTML = oppo_country_name + 
            ' needs ' + target + ' runs in ' + list_of_score.length + 
            ' balls to win.';

            document.getElementById('score').innerHTML = 
            oppo_country_name + ': ' + sum_of_score;
            console.log(a, 'oppo country name');
        }

        // if( a == 1) {
        //     document.getElementById('score').innerHTML = 
        //     our_country_name + ': ' + sum_of_score;
        //     console.log(a, 'our country name');
        // }
        // else if(a == 0) {
        //     document.getElementById('score').innerHTML = 
        //     oppo_country_name + ': ' + sum_of_score;
        //     console.log(a, 'oppo country name');
        // }

        document.getElementById('para5').innerHTML = 
        our_country_name + ' needs ' + target + ' runs in ' + 
        list_of_score.length + ' balls to win.';
    }

    if(score > 6) {
        list_of_wickets.push('w');
        console.log(list_of_wickets);
    }

    document.getElementById('wic').innerHTML ='Wics: ' + list_of_wickets.length;

    document.getElementById('balls').innerHTML = 'Over: ' + list_of_score;
}


function startSecond() {
    list_of_score.length = 0;
    list_of_acurate_score.length = 0;

    list_of_wickets.length = 0;

    console.log(list_of_score);
    console.log(list_of_acurate_score);
    console.log(list_of_wickets);

    document.getElementById('startSecondIning').classList = 'hide';
    document.getElementById('wic').innerHTML ='Wics: ' + list_of_wickets.length;
    document.getElementById('balls').innerHTML = 'Over: ' + list_of_score;

    // document.getElementById('score').innerHTML = 
    // our_country_name + ': ' + sum_of_score;

    document.getElementById('con-11').classList.add('show');

    if(list_of_score.length > 5) {
        document.getElementById('con-11').classList.add('hide');
    }

    console.log(a , 'second ining');

    let sum_of_score = 0;

    for(let i = 0; i < list_of_acurate_score.length; i++) {
        sum_of_score += list_of_acurate_score[i];
    }

    if( a == 1) {
        document.getElementById('score').innerHTML = 
        oppo_country_name + ': ' + sum_of_score;
        console.log(a, 'our country name');
    }
    else if(a == 0) {
        document.getElementById('score').innerHTML = 
        our_country_name + ': ' + sum_of_score;
        console.log(a, 'oppo country name');
    }


    if( a == 1) {
        document.getElementById('imgbat').classList = 'hide batbalbtn';
        document.getElementById('imgbal').classList = 'show batbalbtn';
    }
    else if(a == 0) {
        document.getElementById('imgbat').classList = 'show batbalbtn';
        document.getElementById('imgbal').classList = 'hide batbalbtn';
    }
}
