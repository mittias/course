// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   console.log('DOM ready');
// });
    const data ={
      books: [
        {
          link: '1',
          img: 'img/book-lateralnaya-logika.jpg',
          title: 'Латеральная логика',
          description: 'Головоломный путь к нестандартному мышлдению',
          price: '500 Р'
        },{
          link: '2',
          img: 'img/book-putevoditel-po-lzhi.jpg',
          title: 'Путеводитель по жизни',
          description: 'Критическое мышление в эпоху постправды',
          price: '630 Р'
        },{
          link: '3',
          img: 'img/book-dao-fiziki.jpg',
          title: 'Дао физики',
          description: 'Исследование параллелей между современной физикой и восточной философией',
          price: '560 Р'
        },{
          link: '4',
          img: 'img/book-ne-ochevidno.jpg',
          title: 'Не очевидно',
          description: 'Как выявлять тренды раньше других',
          price: '365 Р'
        },{
          link: '5',
          img: 'img/book-superpotrebiteli.jpg',
          title: 'Суперпотребители',
          description: 'Кто это и почему они так важны для вашего бизнеса',
          price: '500 Р'
        },{
          link: '6',
          img: 'img/book-social-media-marketing.jpg',
          title: 'Маркетинг в социальных сетях',
          description: '',
          price: '630 Р'
        },{
          link: '7',
          img: 'img/book-pravilnyij-vyibor.jpg',
          title: 'Правильный выбор',
          description: 'Практическое руководство по принятию взвешенных решений',
          price: '560 Р'
        },{
          link: '8',
          img: 'img/book-glavnoe-v-istorii-iskusstv.jpg',
          title: 'Главное в истории искусств',
          description: 'Ключевые работы, темы, направления, техники',
          price: '365 Р'
        },
      ]
    };
      const cards = document.querySelector('.catalog__list');
      const cardsNew = document.querySelector('.catalog-new__list');

      function createCards(data) {
        const booksArray = data.books;
        let cardString = ``;
        booksArray.forEach( function(book) {

          cardString += `
            <article class="product-card-mini">
              <a href="${book.link}" class="product-card-mini__img-wrap">
                <img src="${book.img}" alt="" class="product-card-mini__img">
              </a>
              <h2 class="product-card-mini__title">
               <a href="">${book.title}</a>
              </h2>
              <p class="product-card-mini__descr">${book.description}</p>
              <div class="product-card-mini__price">${book.price}</div>
            </article>`

        }) ;

        return cardString
      };

      function insertElements(data, wrap) {
        const html =createCards(data);
        wrap.innerHTML = html;
      };
      insertElements(data, cards);