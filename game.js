//Variables
let toneshots = document.querySelector('#teamone-numshots');
let tonegoals = document.querySelector('#teamone-numgoals');
let ttwoshots = document.querySelector('#teamtwo-numshots');
let ttwogoals = document.querySelector('#teamtwo-numgoals');
let recount = document.querySelector('#num-resets')
let gamewinner;
let gameplayed = false;

//Buttons
let tonebtn = document.querySelector('#teamone-shoot-button');
let ttwobtn = document.querySelector('#teamtwo-shoot-button');
let rebtn = document.querySelector('#reset-button')

tonebtn.addEventListener("click", function() {
    toneshots.innerHTML = Number(toneshots.innerHTML) + 1;
    if (Math.random() < 0.3) {
        tonegoals.innerHTML = Number(tonegoals.innerHTML) + 1;
    }
})

ttwobtn.addEventListener("click", function() {
    ttwoshots.innerHTML = Number(ttwoshots.innerHTML) + 1;
    if (Math.random() < 0.3) {
        ttwogoals.innerHTML = Number(ttwogoals.innerHTML) + 1;
    }
})

rebtn.addEventListener("click", function() {
    toneshots.innerHTML = 0;
    tonegoals.innerHTML = 0;
    ttwoshots.innerHTML = 0;
    ttwogoals.innerHTML = 0;

    recount.innerHTML = Number(recount.innerHTML) + 1;
    gamewinner = '';
    gameplayed = false;

})