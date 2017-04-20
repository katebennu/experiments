var questions = [
    {'english': 'name', 'finnish': 'nimi'},
    {'english': 'country', 'finnish': 'maa'},
    {'english': 'language','finnish': 'kieli'},
    {'english': 'freedom','finnish': 'vapaus'}
];
var i = 0;

var myText = document.getElementById("myText");
var tryButton = document.getElementById("try");
var next = document.getElementById("next");
var eng = document.getElementById('eng');
var output = document.getElementById("output");

eng.innerHTML = questions[i]['english'];

var enterTry = function(event) {
    event.preventDefault();
    if (event.keyCode == 13) document.getElementById('try').click();
};

var enterNext = function(event) {
    event.preventDefault();
    if (event.keyCode == 13) document.getElementById('next').click();
};

myText.addEventListener('keyup', enterTry);

function tryIt() {
    var response = myText.value;
    var right = questions[i]['finnish'];
    var result = "";
    if (response == right) {
        result = "CORRECT";
        myText.value = "";
        next.style.display = 'block';
        myText.removeEventListener('keyup', enterTry);
        myText.addEventListener('keyup', enterNext);
    } else {
        result = "WRONG";
        myText.value = "";
        next.style.display = 'none';
    }

    output.innerHTML = 'Your answer <b>' + response + '</b> is: ' + result;
}

function nextQuestion() {
    i++;
    if (i == questions.length) i = 0;
    output.innerHTML = "";
    eng.innerHTML = questions[i]['english'];
    myText.removeEventListener('keyup', enterNext);
    myText.addEventListener('keyup', enterTry);
}