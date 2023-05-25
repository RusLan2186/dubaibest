// ................BURGER................................................

const link = document.querySelector('.menu__link-sub');
const list = document.querySelector('.sub-menu__list');
const arrow = document.querySelector('.menu__arrow');
const body = document.body;
const burger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');

burger.addEventListener('click', function (event) {
   burger.classList.toggle('open-menu');
   headerMenu.classList.toggle('open-menu');
   body.classList.toggle('lock');
})

document.addEventListener('click', mainMenu);
function mainMenu(event) {
   if (event.target.closest('.menu__link-sub')) {
      list.classList.toggle('_active');
      arrow.classList.toggle('_active');
      link.classList.toggle('_active');
      body.classList.add('lock');
      burger.classList.add('open-menu');
   }
   if (!event.target.closest('.menu__item-sub')) {
      list.classList.remove('_active');
      arrow.classList.remove('_active');
      link.classList.remove('_active');
      link.style.transition = '0.3s';
   }
   if (event.target.closest('.sub-menu__link')) {
      headerMenu.classList.remove('open-menu');
      body.classList.remove('lock');
      burger.classList.remove('open-menu');
      list.classList.remove('_active');
   }

}

// ........................................КНОПКА НАВЕРХ САЙТА.................................................

$('.back-to-top').click(function () {
   $('body,html').animate({ scrollTop: 0 }, 800); // 800 - Скорость анимации
});

$(window).scroll(function () { // Отслеживаем начало прокрутки
   let scrolled = $(window).scrollTop(); // Вычисляем сколько было прокручено.

   if (scrolled > 350) { // Если высота прокрутки больше 350 - показываем кнопку
      $('.back-to-top').addClass('back');
   } else {
      $('.back-to-top').removeClass('back');
   }
});


// замедленный скролл

$(document).ready(function () {
   $('.sub-menu__link').on('click', function (event) {
      if ($(this).attr('hash') !== "") {
         event.preventDefault();
         let hash = $(this).prop('hash');
         $('html, body').animate({
            scrollTop: $(hash).offset().top
         }, 800, function () {
         });
      }
   });
});

const headerButton = document.querySelector('#popup__open');
const headerButtonHid = document.querySelector('.header__button-hid');
const myPopup = document.querySelector('.my__popup');
const close = document.querySelector('.popup__close');
const closeArea = document.querySelector('.popup__area');
const wrapper = document.querySelector('.wrapper');
const menuList = document.querySelector('#list');
headerButton.addEventListener('click', OpenPopup);
function OpenPopup(event) {
   myPopup.classList.toggle('open');
   wrapper.classList.toggle('dark');
}

close.addEventListener('click', closePopup);
closeArea.addEventListener('click', closePopup);
function closePopup(event) {
   myPopup.classList.remove('open');
   wrapper.classList.remove('dark');
   menuList.classList.remove('dark');
}

headerButtonHid.addEventListener('click', function (event) {
   myPopup.classList.toggle('open');
   menuList.classList.add('dark');

})

// footer-spoiler
$(document).ready(function () {
   // ссылка, на которую нажимаем 
   $('.top-spoiler__link').click(function (event) {
      // общий класс спойлера
      if ($('.footer-spoiler').hasClass('one')) {
         // ссылка, на которую нажимаем 
         $('.top-spoiler__link').not($(this)).removeClass('hidden');
         // блок который идет сразу после ссылки
         $('.footer-spoiler__block').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('hidden').next().slideToggle(400);
   });
});


// счетчик цифр
var time = 2, cc = 1;
$(window).scroll(function () {
   $('#counter').each(function () {
      var
         cPos = $(this).offset().top,
         topWindow = $(window).scrollTop();
      if (cPos < topWindow + 500) {
         if (cc < 2) {
            $('div').each(function () {
               var
                  i = 1,
                  num = $(this).data('num'),
                  step = 1000 * time / num,
                  that = $(this),
                  int = setInterval(function () {
                     if (i <= num) {
                        that.html(i);
                     }
                     else {
                        cc = cc + 2;
                        clearInterval(int);
                     }
                     i++;
                  }, step);
            });
         }
      }
   });
});


// table-spoiler
$(document).ready(function () {
   // ссылка, на которую нажимаем 
   $('.spoiler-table__link').click(function (event) {
      // общий класс спойлера
      if ($('.spoiler-table').hasClass('one')) {
         // ссылка, на которую нажимаем 
         $('.spoiler-table__link').not($(this)).removeClass('hidden');
         // блок который идет сразу после ссылки
         $('.spoiler-table__block').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('hidden').next().slideToggle(400);
   });
});