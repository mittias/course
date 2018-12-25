/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/bookCardTemplate.js":
/*!********************************************!*\
  !*** ./src/js/modules/bookCardTemplate.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dataBooks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataBooks.js */ \"./src/js/modules/dataBooks.js\");\n\nvar bookCardTemplate = {\n  wrap: '.catalog__list',\n  tag: 'article',\n  tagClass: 'product-card-mini',\n  setContent: function setContent(book) {\n    return \"\\n       \\n              <a href=\\\"\".concat(book.uri, \"\\\" class=\\\"product-card-mini__img-wrap\\\">\\n                <img src=\\\"img/books_all/\").concat(book.uri, \".png\\\" alt=\\\"\\\" class=\\\"product-card-mini__img\\\">\\n              </a>\\n              <h2 class=\\\"product-card-mini__title\\\">\\n               <a href=\\\"\\\">\").concat(book.name, \"</a>\\n              </h2>\\n              <p class=\\\"product-card-mini__descr\\\">\").concat(book.desc, \"</p>\\n              <div class=\\\"product-card-mini__price\\\">\").concat(book.price, \" \\u20BD</div>\\n            \");\n  }\n};\n\ndesc: \"\";\n\nname: \"Клиенты на всю жизнь\";\n\nprice: 697;\n\ntype: \"marketing\";\n\nuri: \"klienty-na-vsyu-zhizn\";\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (bookCardTemplate);\n\n//# sourceURL=webpack:///./src/js/modules/bookCardTemplate.js?");

/***/ }),

/***/ "./src/js/modules/createElements.js":
/*!******************************************!*\
  !*** ./src/js/modules/createElements.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction createElements(book, template) {\n  var nodeElement = document.createElement(template.tag);\n  nodeElement.classList.add(template.tagClass); // if(template.href) {\n  //   nodeElement.setAttribute('href', template.href);\n  // }\n\n  nodeElement.innerHTML = template.setContent(book);\n  return nodeElement;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createElements);\n\n//# sourceURL=webpack:///./src/js/modules/createElements.js?");

/***/ }),

/***/ "./src/js/modules/dataBooks.js":
/*!*************************************!*\
  !*** ./src/js/modules/dataBooks.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar dataBooks = {\n  books: [{\n    link: '1',\n    img: 'img/book-lateralnaya-logika.jpg',\n    title: 'Латеральная логика',\n    description: 'Головоломный путь к нестандартному мышлдению',\n    price: '500 Р'\n  }, {\n    link: '2',\n    img: 'img/book-putevoditel-po-lzhi.jpg',\n    title: 'Путеводитель по жизни',\n    description: 'Критическое мышление в эпоху постправды',\n    price: '630 Р'\n  }, {\n    link: '3',\n    img: 'img/book-dao-fiziki.jpg',\n    title: 'Дао физики',\n    description: 'Исследование параллелей между современной физикой и восточной философией',\n    price: '560 Р'\n  }, {\n    link: '4',\n    img: 'img/book-ne-ochevidno.jpg',\n    title: 'Не очевидно',\n    description: 'Как выявлять тренды раньше других',\n    price: '365 Р'\n  }, {\n    link: '5',\n    img: 'img/book-superpotrebiteli.jpg',\n    title: 'Суперпотребители',\n    description: 'Кто это и почему они так важны для вашего бизнеса',\n    price: '500 Р'\n  }, {\n    link: '6',\n    img: 'img/book-social-media-marketing.jpg',\n    title: 'Маркетинг в социальных сетях',\n    description: '',\n    price: '630 Р'\n  }, {\n    link: '7',\n    img: 'img/book-pravilnyij-vyibor.jpg',\n    title: 'Правильный выбор',\n    description: 'Практическое руководство по принятию взвешенных решений',\n    price: '560 Р'\n  }, {\n    link: '8',\n    img: 'img/book-glavnoe-v-istorii-iskusstv.jpg',\n    title: 'Главное в истории искусств',\n    description: 'Ключевые работы, темы, направления, техники',\n    price: '365 Р'\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (dataBooks);\n\n//# sourceURL=webpack:///./src/js/modules/dataBooks.js?");

/***/ }),

/***/ "./src/js/modules/insertElements.js":
/*!******************************************!*\
  !*** ./src/js/modules/insertElements.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElements.js */ \"./src/js/modules/createElements.js\");\n\n\nfunction insertElements(dataArray, template) {\n  dataArray.forEach(function (item) {\n    var card = Object(_createElements_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item, template);\n    var wrap = document.querySelector(template.wrap);\n    wrap.appendChild(card);\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (insertElements);\n\n//# sourceURL=webpack:///./src/js/modules/insertElements.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_insertElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/insertElements.js */ \"./src/js/modules/insertElements.js\");\n/* harmony import */ var _modules_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/bookCardTemplate.js */ \"./src/js/modules/bookCardTemplate.js\");\n //import dataBooks from './modules/dataBooks.js';\n\n\n/*function ready(fn) {\n  if (document.attachEvent ? document.readyState === \"complete\" : document.readyState !== \"loading\"){\n    fn();\n  } else {\n    document.addEventListener('DOMContentLoaded', fn);\n  }\n}\n\nready(function(){\n\n  if( document.querySelector(bookCardTemplate.wrap) ) {\n    const wrap = document.querySelector(bookCardTemplate.wrap);\n*/\n//  insertElements(dataBooks.books, bookCardTemplate);\n\n/*  };\n});*/\n\nvar data = {\n  page: 1,\n  perPage: 8,\n  type: ''\n};\nvar tabsWrap = document.querySelector('.j-tabs');\nvar tabsArray = Array.from(tabsWrap.children);\n/*const all = document.querySelector('#qwerty');\nall.addEventListener('click', function(e){\n  console.log('qwerty')\n});*/\n\ntabsArray.forEach(function (tab) {\n  var link = tab.firstElementChild;\n  link.addEventListener('click', function (event) {\n    event.preventDefault();\n    data.type = event.target.dataset.type;\n\n    if (window.matchMedia(\"(min-width: 768px)\").matches) {\n      data.perPage = 8;\n    } else {\n      data.perPage = 3;\n    }\n\n    var dataAjax = \"https://api.do-epixx.ru/htmlpro/bookstore/books/get/\".concat(data.page, \"/\").concat(data.perPage, \"/\").concat(data.type);\n    sendRequest(dataAjax); //    console.log(event);\n  });\n});\n\nfunction sendRequest(data) {\n  var xhr = new XMLHttpRequest();\n  xhr.open('GET', data);\n  xhr.send();\n\n  xhr.onreadystatechange = function () {\n    if (xhr.readyState === 4 && xhr.status === 200) {\n      var request = JSON.parse(xhr.responseText);\n      console.log(request);\n      var wrap = document.querySelector(_modules_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].wrap);\n\n      if (wrap.children) {\n        wrap.innerHTML = '';\n      }\n\n      if (document.querySelector(_modules_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].wrap)) {\n        Object(_modules_insertElements_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(request.items, _modules_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n      }\n\n      ;\n    } else {\n      console.log(\"\\u0416\\u0434\\u0443 \\u0437\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0438: \".concat(xhr.readyState));\n    }\n\n    ;\n  };\n}\n\n;\n$('.main-nav__toggle').on('click', function (e) {\n  $('.main-nav__list').toggleClass(\"main-nav__listOpen\"); //you can list several class names\n\n  e.preventDefault();\n});\n/*const data ={\n  books: [\n    {\n      link: '1',\n      img: 'img/book-lateralnaya-logika.jpg',\n      title: 'Латеральная логика',\n      description: 'Головоломный путь к нестандартному мышлдению',\n      price: '500 Р'\n    },{\n      link: '2',\n      img: 'img/book-putevoditel-po-lzhi.jpg',\n      title: 'Путеводитель по жизни',\n      description: 'Критическое мышление в эпоху постправды',\n      price: '630 Р'\n    },{\n      link: '3',\n      img: 'img/book-dao-fiziki.jpg',\n      title: 'Дао физики',\n      description: 'Исследование параллелей между современной физикой и восточной философией',\n      price: '560 Р'\n    },{\n      link: '4',\n      img: 'img/book-ne-ochevidno.jpg',\n      title: 'Не очевидно',\n      description: 'Как выявлять тренды раньше других',\n      price: '365 Р'\n    },{\n      link: '5',\n      img: 'img/book-superpotrebiteli.jpg',\n      title: 'Суперпотребители',\n      description: 'Кто это и почему они так важны для вашего бизнеса',\n      price: '500 Р'\n    },{\n      link: '6',\n      img: 'img/book-social-media-marketing.jpg',\n      title: 'Маркетинг в социальных сетях',\n      description: '',\n      price: '630 Р'\n    },{\n      link: '7',\n      img: 'img/book-pravilnyij-vyibor.jpg',\n      title: 'Правильный выбор',\n      description: 'Практическое руководство по принятию взвешенных решений',\n      price: '560 Р'\n    },{\n      link: '8',\n      img: 'img/book-glavnoe-v-istorii-iskusstv.jpg',\n      title: 'Главное в истории искусств',\n      description: 'Ключевые работы, темы, направления, техники',\n      price: '365 Р'\n    },\n  ]\n};\n  const cards = document.querySelector('.catalog__list');\n  const cardsNew = document.querySelector('.catalog-new__list');\n   function createCards(data) {\n    const booksArray = data.books;\n    let cardString = ``;\n    booksArray.forEach( function(book) {\n       cardString += `\n        <article class=\"product-card-mini\">\n          <a href=\"${book.link}\" class=\"product-card-mini__img-wrap\">\n            <img src=\"${book.img}\" alt=\"\" class=\"product-card-mini__img\">\n          </a>\n          <h2 class=\"product-card-mini__title\">\n           <a href=\"\">${book.title}</a>\n          </h2>\n          <p class=\"product-card-mini__descr\">${book.description}</p>\n          <div class=\"product-card-mini__price\">${book.price}</div>\n        </article>`\n     }) ;\n     return cardString\n  };\n   function insertElements(data, wrap) {\n    const html =createCards(data);\n    wrap.innerHTML = html;\n  };\n  insertElements(data, cards);*/\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ })

/******/ });