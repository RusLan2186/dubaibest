$(document).ready(function () {
   // на header burger вешаем событие клик
   $('.header__burger').click(function (event) {
      // при клике на бургер и хедер меню добавился класс aktive (нажали-добав класс, нажали-убрался класс) 
      $('.header__burger, .header__menu,.menu__link-sub, header__language, header__number').toggleClass('open-menu');
      // при открытом бургере блокируем прокрутку страницы
      $('body').toggleClass('lock');
   });
});

// закрытие бургера, при нажатии на меню
const headerLinks = document.querySelectorAll('.header__menu')
headerLinks.forEach((el) => {
   el.addEventListener('click', () => {
      // $('.header__burger,.header__menu').toggleClass('open-menu');
      $('body').toggleClass('lock');
   })
})

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

const searchForm = document.querySelector('.search-blog');
document.addEventListener('click', inputFocus);
function inputFocus(event) {
   if (event.target.closest('.search-blog__input')) {
      searchForm.style.borderColor = '#dfaa19';
   }
   if (!event.target.closest('.search-blog__input')) {
      searchForm.style.borderColor = '#929292';
   }
}


const map = document.querySelector('iframe');
