/*----- constants -----*/
/*----- app's state (variables) -----*/
let runningTotal;

/*----- cached element references -----*/
const addBtn = document.getElementById('add');
const minusBtn = document.getElementById('minus');
const inputNum = document.getElementById('input');
const runningTotalEl = document.getElementById('count');

/*----- event listeners -----*/
addBtn.addEventListener('click', addCount);
minusBtn.addEventListener('click', minusCount);

/*----- functions -----*/
function init() {
  //count display is 0
  runningTotal = 0;
  runningTotalEl.innerHTML = '0'
  //input box has 1 inside
  render();
}

function addCount() {
  //add inputNum to current count total
  let inputVal = parseInt(inputNum.value);
  runningTotal += inputVal;
  // return runningTotal;
  render();
}

function minusCount() {
  //minus inputNum from current count total
  let inputVal = parseInt(inputNum.value);
  runningTotal -= inputVal;
  render();
}

function render() {
  //show new count display
  if (runningTotal < 0) {
    runningTotalEl.style.color = 'red';
    runningTotalEl.innerHTML = runningTotal;
  } else if(runningTotal >= 0) {
    runningTotalEl.style.color = 'black';
    runningTotalEl.innerHTML = runningTotal;
  } 
}

init();