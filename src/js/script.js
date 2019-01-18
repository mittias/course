import insertElements from './modules/insertElements.js';
import bookCardTemplate from './modules/bookCardTemplate.js';

$('.main-nav__toggle').on('click', function(e) {
  $('.main-nav__list').toggleClass("main-nav__listOpen");
  e.preventDefault();
  $('.main-nav__menu-show-svg').toggleClass("main-nav__menu-closed-svg");
  $('.main-nav__menu-close-svg').toggleClass("main-nav__menu-showed-svg");
  console.log("rere")
});

const data = {
  page: 1,
  perPage: 8,
  type: ''
}
const tabsWrap = document.querySelector('.j-tabs');
const tabsArray = Array.from(tabsWrap.children);


tabsArray.forEach(function(tab) {
  const link = tab.firstElementChild;

  link.addEventListener('click', function(event) {
    event.preventDefault();
    data.type = event.target.dataset.type;


    if (window.matchMedia("(min-width: 768px)").matches) {
      data.perPage = 8;
    } else {
      data.perPage = 3;
    }

    const dataAjax = `https://api.do-epixx.ru/htmlpro/bookstore/books/get/${data.page}/${data.perPage}/${data.type}`;

    sendRequest(dataAjax);
  });

});

function sendRequest(data) {
  let xhr = new XMLHttpRequest;

  xhr.open('GET', data);

  xhr.send();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {

      const request = JSON.parse(xhr.responseText);
      console.log(request);

      const wrap = document.querySelector(bookCardTemplate.wrap);

      if(wrap.children) {
        wrap.innerHTML = '';
      }

      if( document.querySelector(bookCardTemplate.wrap) ) {

       insertElements(request.items, bookCardTemplate);
     };
   } else {
    console.log(`Жду загрузки: ${xhr.readyState}`);
  };
};
};


jQuery(document).ready(function ($) {

  let slideCount = $('#slider ul li').length;
  let slideWidth = $('#slider ul li').width();
  let slideHeight = $('#slider ul li').height();
  let sliderUlWidth = slideCount * slideWidth;

  $('#slider').css({ width: slideWidth, height: slideHeight });

  $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
;
        });
    };

    $('a.control-prev').click(function () {
        moveLeft();
    });

    $('a.control-next').click(function () {
        moveRight();
    });

});
