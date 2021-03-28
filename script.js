/*
TODO:
Style restart button
New pic
New circle colors
Add sound
*/

const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

// Have to run the function once first because setInterval time waits before first execution.
breathAnimation();
objcount.innerText="1";


function breathAnimation() {
  text.innerText = 'Breathe In';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      text.innerText = 'Breathe Out';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

// Using a loop to control number of times. setInterval runs infinite with no option for iterations.
var counter = 1;
var looper = setInterval(function(){ 
    counter++;
    breathAnimation();
    objcount.innerText=counter;

    if (counter >= 3)
    {
        clearInterval(looper);
    }

},totalTime );





