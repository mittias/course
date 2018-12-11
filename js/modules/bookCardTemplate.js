import dataBooks from './dataBooks.js';

const bookCardTemplate = {
	wrap: '.catalog__list',
	tag: 'article',
	tagClass: 'product-card-mini',
	setContent: function(book) {
		return `
       
              <a href="${book.uri}" class="product-card-mini__img-wrap">
                <img src="books_all/${book.uri}.png" alt="" class="product-card-mini__img">
              </a>
              <h2 class="product-card-mini__title">
               <a href="">${book.name}</a>
              </h2>
              <p class="product-card-mini__descr">${book.desc}</p>
              <div class="product-card-mini__price">${book.price}</div>
            `
	}
}
desc: ""
name: "Клиенты на всю жизнь"
price: 697
type: "marketing"
uri: "klienty-na-vsyu-zhizn"

export default bookCardTemplate;