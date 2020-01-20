// // VARS
const cornerDots = document.querySelectorAll('.dot');
const menuBtn = document.querySelector('#menu-btn');
const dots = document.querySelectorAll('.page-number-section');
const callUs = document.querySelectorAll('.call-us');
const callUsModal = document.querySelector('#call-us-modal');
const menuModal = document.querySelector('#menu-modal');
const xBtns = document.querySelectorAll('.x-btn');
const mountModal = document.querySelector('#mount-modal');
const pageDotBtns = document.querySelectorAll('.page-number-section');

// // FUNCTIONAL VARS:
let activeId = 1;
let menuIsOn = false;

// // FUNCTIONS
const whereIsActive = e => {
  document.querySelector('#section-' + activeId).classList.remove('deactive-section');
  document.querySelector('#section-' + activeId).classList.add('active-section');
  pageDotBtns.forEach(dot => {
    dot.classList.remove('active')
  })
  document.querySelector(`#dot-number-${e.target.attributes.name.value}`).classList.add('active')
}

const openMenuModal = () => {
  menuModal.classList.add('menu-modal-on');
  menuModal.classList.remove('menu-modal-off-a');
  menuModal.classList.remove('menu-modal-off-d');
  document.body.classList.add('no-scroll');
}

const close = () => {
  menuModal.classList.add('menu-modal-off-a');
  menuModal.classList.remove('menu-modal-on');
  mountModal.classList.add('mount-off-a');
  mountModal.classList.remove('mount-on');
  callUsModal.classList.add('call-us-off-a');
  callUsModal.classList.remove('call-us-on');
  document.body.classList.remove('no-scroll');
  setTimeout(() => {
    menuModal.classList.remove('menu-modal-off-a');
    menuModal.classList.add('menu-modal-off-d');
    mountModal.classList.add('mount-off-d');
    callUsModal.classList.add('call-us-off-d');
  }, 490);
}

const showMount = () => {
  mountModal.classList.add('mount-on');
  mountModal.classList.remove('mount-off-d');
  mountModal.classList.remove('mount-off-a');
  document.body.classList.add('no-scroll');
}

const showCallUs = () => {
  callUsModal.classList.add('call-us-on');
  callUsModal.classList.remove('call-us-off-a');
  callUsModal.classList.remove('call-us-off-d');
  document.body.classList.add('no-scroll');
}

// FUNCTIONS TO RUNB ON PAGE LOAD:
setTimeout(() => {
  whereIsActive(activeId);
}, 500);

// // EVENT LISTENERS
menuBtn.addEventListener('click', openMenuModal);
callUs.forEach(btn => {
  btn.addEventListener('click', showCallUs);
})
xBtns.forEach(btn => {
  btn.addEventListener('click', close);
})
cornerDots.forEach(dot => {
  dot.addEventListener('click', showMount);
})
pageDotBtns.forEach(dot => {
  dot.addEventListener('click', whereIsActive);
})

// TEMP

// COMMENTS
// add patterns to the design (lines or dots with rotations)
// add animation with sass to portfolio for entrance to page 