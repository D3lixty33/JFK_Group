/* ---------------------------------------------------------------------- */
/* HERE I WORK ON THE DYNAMIC LOOK OF THE PAGE USING ANIMEJS AS MY PLUGIN */
/* ---------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      const checkBtn = document.getElementById('menu__toggle');
    });

    if (targetElement && checkBtn.checked.true) {
      
      checkBtn.checked = false;
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });


    } else {
      console.error(`Element with ID ${targetId} not found.`);
    }
  });
});


var textWrapper = document.querySelector('.missionId');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
  .add({
    targets: '.missionId .letter',
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i
  }).add({
    targets: '.missionId',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

const animateText = function () {
  anime.timeline({ loop: true })
    .add({
      targets: '.secondCarousel',
      scale: [4, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 950,
      delay: (el, i) => 70 * i
    }).add({
      targets: '.secondCarousel',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
}

/* ---------------------------------------------------------------- */
/* FUNCTION TO CHECK THE VIEWPORT OF AN ELEMENT                     */
/* ---------------------------------------------------------------- */



var isInViewport = function (elem) {
  var distance = elem.getBoundingClientRect();
  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/* ---------------------------------------------------------------- */
/* CALL THE FUNCTION FOR EVERY CLASS I WANNA CHECK                  */
/* IN THIS CASE I'LL CHECK THE TEXT PARAGRAPHS                      */
/* ---------------------------------------------------------------- */

let whatWeDo = document.querySelector('#whatWeDo_Scroll');
let missionScroll = document.querySelector('#textMissionId');



window.addEventListener('scroll', function (event) {
  if (isInViewport(whatWeDo)) {
    whatWeDo.classList.add("secondDiv_Active");
  }

  if (isInViewport(missionScroll)) {
    missionScroll.classList.add("textMissionId_Active");
  }
}, false);


window.onload = function () {
  document.body.style.visibility = 'visible';
}

/* ---------------------------------------------------------------------------- */
/* OPTIMIZATION OF THE REPETITIVE IF() STATEMENTS IN THE SCROLL CHECKS          */
/* THIS OPTIMIZATION STILL DOESN'T WORK, TRIED USING SWITCH TO REPLACE IFS,     */
/* BUT IT DOESN'T TRIGGER THE ANIMATIONS ON THE DIVS                            */
/* ---------------------------------------------------------------------------- */

/*window.addEventListener('scroll', switchCase);

function switchCase (event) {
  switch (whatWeDo, missionScroll) {
    case (isInViewport(whatWeDo)) :
      whatWeDo.classList.add("secondDiv_Active");
      break;
    case(isInViewport(missionScroll)) :
      missionScroll.classList.add("textMissionId_Active");
      break;
    default:
      false
  }
}*/

/* --------------------------------------------------------------------------------------- */
/* JQUERY CODE USED TO ADD A CLASS DINAMICALLY AND CHANGE THE CARD SHOWED IN THE SPOTLIGHT */
/* --------------------------------------------------------------------------------------- */

/*
$('input').on('change', function () {
  $('body').toggleClass('blue');
});

/* -------------------------------------------------------- */
/* SETS THE ATTRIBUTE CHECKED ON THE CARD WHEN IT'S CLICKED */
/* -------------------------------------------------------- */

$('card').on('click', function () {
  $("input[name='slider']").setAttribute("checked", "checked");
})

/*------------------STORE DATA IN JSON FILE--------------------*/
const user = {
  name: document.getElementById('nameInput').value,
  surname: document.getElementById('surnameInput').value,
  email: parseInt(document.getElementById('emailInput').value),
  message: document.getElementById('messageInput').value
};

document.getElementById('btnMessage').addEventListener('click', () => {
  const userJSON = JSON.stringify(user)
})
/*-------------------------------------------------------------

document.getElementById('slideInEffect').addEventListener('click', () => {
  document.getElementsByClassName('secondForm').classList.add('secondFormActive')
})*/




