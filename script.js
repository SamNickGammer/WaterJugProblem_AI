const doItYourSelf = document.querySelector('.doItYourSelf');
const mugFirst = document.querySelector('.mug1');
const mugSecond = document.querySelector('.mug2');
const controlCont1 = document.getElementById('controlCont1');
const controlCont2 = document.getElementById('controlCont2');
const controlInit1 = document.getElementById('controlInit1');
const controlInit2 = document.getElementById('controlInit2');
mugFirst.style.height = '0%';
mugSecond.style.height = '0%';

const fillSectionA = document.querySelector('.fillSectionA');
const fillSectionB = document.querySelector('.fillSectionB');
const emptySectionA = document.querySelector('.emptySectionA');
const emptySectionB = document.querySelector('.emptySectionB');
const tranferAtoB = document.querySelector('.tranferAtoB');
const tranferBtoA = document.querySelector('.tranferBtoA');
const displayFirst = document.querySelector('.displayFirst');
const displaySec = document.querySelector('.displaySec');

let j1;
let j2;
let j1_init;
let j2_init;

doItYourSelf.addEventListener('click', () => {
  j1 = parseInt(controlCont1.value);
  j2 = parseInt(controlCont2.value);
  j1_init = parseInt(controlInit1.value);
  j2_init = parseInt(controlInit2.value);
  displayFirst.innerHTML = `0L`;
  displaySec.innerHTML = `0L`;
  if (j1 <= j2) {
    console.log(mugFirst.parentElement, j1, j2, j1_init, j2_init);
    mugFirst.parentElement.style.height = `${(330 / j2) * j1}px`;
  }
});

fillSectionA.addEventListener('click', () => {
  mugFirst.style.height = '100%';
  j1_init = j1;
  displayFirst.innerHTML = `${j1_init}L`;
});
fillSectionB.addEventListener('click', () => {
  mugSecond.style.height = '100%';
  j2_init = j2;
  displaySec.innerHTML = `${j2_init}L`;
});
emptySectionA.addEventListener('click', () => {
  mugFirst.style.height = '0%';
  j1_init = 0;
  displayFirst.innerHTML = `${0}L`;
});
emptySectionB.addEventListener('click', () => {
  mugSecond.style.height = '0%';
  j2_init = 0;
  displaySec.innerHTML = `${0}L`;
});

const container = document.querySelector('.container');
const completeContainer = document.querySelector('.completeContainer');

tranferAtoB.addEventListener('click', () => {
  if (j2 - j2_init > j1_init) {
    j2_init = j1_init + j2_init;
    j1_init = 0;
    mugSecond.style.height = `${(j2_init / j2) * 100}%`;
    mugFirst.style.height = `${(j1_init / j1) * 100}%`;
    displayFirst.innerHTML = `${j1_init}L`;
    displaySec.innerHTML = `${j2_init}L`;
    console.log('If', j1_init, j2_init);
    if (j1_init == 0 && j2_init == 2) {
      console.log('Boom');
      container.classList.add('displayNone');
      completeContainer.classList.remove('displayNone');
    }
  } else {
    j1_init = j1_init - (j2 - j2_init);
    j2_init = j2;
    displayFirst.innerHTML = `${j1_init}L`;
    displaySec.innerHTML = `${j2_init}L`;
    mugSecond.style.height = `${(j2_init / j2) * 100}%`;
    mugFirst.style.height = `${(j1_init / j1) * 100}%`;
    console.log('Else', j1_init, j2_init);
  }
});

tranferBtoA.addEventListener('click', () => {
  if (j1 - j1_init > j2_init) {
    j1_init = j2_init + j1_init;
    j2_init = 0;
    mugFirst.style.height = `${(j1_init / j1) * 100}%`;
    mugSecond.style.height = `${(j2_init / j2) * 100}%`;
    displayFirst.innerHTML = `${j1_init}L`;
    displaySec.innerHTML = `${j2_init}L`;
    console.log('If', j1_init, j2_init);
  } else {
    j2_init = j2_init - (j1 - j1_init);
    j1_init = j1;
    mugFirst.style.height = `${(j1_init / j1) * 100}%`;
    mugSecond.style.height = `${(j2_init / j2) * 100}%`;
    displayFirst.innerHTML = `${j1_init}L`;
    displaySec.innerHTML = `${j2_init}L`;
    console.log('Else', j1_init, j2_init);
  }
});

document.querySelector('.retry').addEventListener('click', () => {
  window.location.reload();
});
