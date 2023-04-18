
//авто слайдер через библиотеку jQuery --------------------------------------------------------

$('.games__slider').slick({
  arrows: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  waitForAnimate: false,
  responsive:
  [
    {
      breakpoint:  1200,
      settings: {slidesToShow: 1,autoplay: false,},
    },
  ],
});
$('.games__slider-prev').on('click', function (e) {
  e.preventDefault()
  $('.games__slider').slick('slickPrev');
});
$('.games__slider-next').on('click', function (e) {
  e.preventDefault()
  $('.games__slider').slick('slickNext');
});



///Скрипт плавного перехода к нужному блоку --------------------------------------------------------
$(document).ready(function () {
  $(".footer__protected-link, .footer__item-links").on("click", "a", function (e) {
    //отменяем стандартную обработку нажатия по ссылке
    e.preventDefault();
    //забираем идентификатор бока с атрибута href
    let id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top -100;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1000);
  });
});



//Игра крокодил--------------------------------------------------------

// document.addEventListener("DOMContentLoaded", function () {
//   const dinoSuper = document.getElementById('dino');
//   const cactusSuper = document.getElementById('cactus');


//   const playTheGame = document.querySelector('#header__logos');
//   const playTheGames = document.querySelector('#header__logos');
//   const wrapper = document.querySelector('.form__box-game');

//   playTheGames.addEventListener('click', () => {
//     if (wrapper.classList.contains('active__play')) {
//       wrapper.classList.remove('active__play');
//     } else {
//       wrapper.classList.add('active__play');
//     }
//   });

//   playTheGame.addEventListener('click', function () {
//     startGame();
//   });

//   function startGame() {
//     let gameWindow = window.open("game.html", "_blank", "width=500,height=500");

//     gameWindow.document.addEventListener('keydown', function (event) {
//       jump();
//     });

//     let isAlive = setInterval(function () {
//       let dinoTop = parseInt(gameWindow.getComputedStyle(dinoSuper).getPropertyValue('top'));
//       let cactusLeft = parseInt(gameWindow.getComputedStyle(cactusSuper).getPropertyValue('left'));

//       if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
//         stopGame(gameWindow, isAlive);
//       }
//     }, 10);

//     gameWindow.addEventListener('beforeunload', function () {
//       stopGame(gameWindow, isAlive);
//     });
//   }

//   function jump() {
//     if (dinoSuper.classList != 'jump') {
//       dinoSuper.classList.add('jump');
//     }
//     setTimeout(function () {
//       dinoSuper.classList.remove('jump');
//     }, 300);
//   }

//   function stopGame(gameWindow, isAlive) {
//     clearInterval(isAlive);
//     gameWindow.close();
//   }
// });
// const dinoSuper = document.getElementById('dino');
// const cactusSuper = document.getElementById('cactus');


