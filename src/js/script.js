// // VARS
const cornerDots = document.querySelectorAll('.dot');
const menuBtn = document.querySelector('#menu-btn');
const dots = document.querySelectorAll('.page-number-section');
const callUs = document.querySelector('#call-us');
const callUsModal = document.querySelector('#call-us-modal');
const menuModal = document.querySelector('#menu-modal');
const xBtns = document.querySelectorAll('.x-btn');
const mountModal = document.querySelector('#mount-modal');

// // FUNCTIONAL VARS:
let activeId = 1;
let menuIsOn = false;

// // EVENT LISTENERS
menuBtn.addEventListener('click', openMenuModal);
callUs.addEventListener('click', showCallUs);
for(let x of xBtns) {
  x.addEventListener('click', close);
}
for(let dot of cornerDots) {
  dot.addEventListener('click', showMount);
}

// // FUNCTIONS
function whereIsActive() {
  document.querySelector('#section-' + activeId).classList.remove('deactive-section');
  document.querySelector('#section-' + activeId).classList.add('active-section');
}

function openMenuModal() {
  menuModal.classList.add('menu-modal-on');
  menuModal.classList.remove('menu-modal-off-a');
  menuModal.classList.remove('menu-modal-off-d');
  document.body.classList.add('no-scroll');
}

function close() {
  menuModal.classList.add('menu-modal-off-a');
  menuModal.classList.remove('menu-modal-on');
  mountModal.classList.add('mount-off-a');
  mountModal.classList.remove('mount-on');
  callUsModal.classList.add('call-us-off-a');
  callUsModal.classList.remove('call-us-on');
  document.body.classList.remove('no-scroll');
  setTimeout(() => {
    menuModal.classList.add('menu-modal-off-d');
    mountModal.classList.add('mount-off-d');
    callUsModal.classList.add('call-us-off-d');
  },500);
}

function showMount() {
  mountModal.classList.add('mount-on');
  mountModal.classList.remove('mount-off-d');
  mountModal.classList.remove('mount-off-a');
  document.body.classList.add('no-scroll');
}

function showCallUs() {
  callUsModal.classList.add('call-us-on');
  callUsModal.classList.remove('call-us-off-a');
  callUsModal.classList.remove('call-us-off-d');
  document.body.classList.add('no-scroll');
}

// FUNCTIONS TO RUNB ON PAGE LOAD:
setTimeout(() => {
  whereIsActive(activeId);
}, 500);

// TEMP


// COMMENTS
// add patterns to the design (lines or dots with rotations)