/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/appendimage.js"
/*!****************************!*\
  !*** ./src/appendimage.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderHomeContent: () => (/* binding */ renderHomeContent)
/* harmony export */ });
/* harmony import */ var _images_nasa_Q1p7bh3SHj8_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/nasa-Q1p7bh3SHj8-unsplash.jpg */ "./src/images/nasa-Q1p7bh3SHj8-unsplash.jpg");
// contentRenderer.js

// IMPORT THE IMAGE FIRST


function renderHomeContent() {
  const contentDiv = document.getElementById('content');
  
  // Clear existing content first
  contentDiv.innerHTML = '';
  
  // Create the image element
  const img = document.createElement('img');
  img.className = 'image';
  img.src = _images_nasa_Q1p7bh3SHj8_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__;  // Use the imported image
  img.alt = 'computerimage';
  
  // Create the text div
  const textDiv = document.createElement('div');
  textDiv.textContent = 'You right there Mduduzi, im with you all the way, iam the lord your God!';
  
  // Append to content div
  contentDiv.appendChild(img);
  contentDiv.appendChild(textDiv);
}

/***/ },

/***/ "./src/greeting.js"
/*!*************************!*\
  !*** ./src/greeting.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   greeting: () => (/* binding */ greeting)
/* harmony export */ });
// greeting.js
const greeting = "Hello, Odinite! Welcome mdu,you on top of the world!";

/***/ },

/***/ "./src/images/nasa-Q1p7bh3SHj8-unsplash.jpg"
/*!**************************************************!*\
  !*** ./src/images/nasa-Q1p7bh3SHj8-unsplash.jpg ***!
  \**************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/01b0b04b32f43efeb29b.jpg";

/***/ },

/***/ "./src/modules/contact.js"
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderContact: () => (/* binding */ renderContact)
/* harmony export */ });
function renderContact() {
  const container = document.createElement('div');
  container.className = 'contact-content';
  
  container.innerHTML = `
    <h1>Contact Us</h1>
    <div class="contact-info">
      <div class="contact-item">
        <h3>📍 Location</h3>
        <p>123 Food Street, Restaurant City, RC 10001</p>
      </div>
      <div class="contact-item">
        <h3>📞 Phone</h3>
        <p>(123) 456-7890</p>
      </div>
      <div class="contact-item">
        <h3>✉️ Email</h3>
        <p>info@restaurant.com</p>
      </div>
      <div class="contact-item">
        <h3>🕒 Hours</h3>
        <p>Monday - Friday: 11am - 10pm</p>
        <p>Saturday - Sunday: 10am - 11pm</p>
      </div>
    </div>
    <form class="contact-form">
      <h3>Send us a Message</h3>
      <input type="text" placeholder="Your Name" required>
      <input type="email" placeholder="Your Email" required>
      <textarea placeholder="Your Message" rows="5" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  `;
  
  container.style.cssText = `
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
  `;
  
  const title = container.querySelector('h1');
  title.style.cssText = `
    text-align: center;
    color: #1976d2;
    margin-bottom: 2rem;
  `;
  
  const contactInfo = container.querySelector('.contact-info');
  contactInfo.style.cssText = `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
  `;
  
  container.querySelectorAll('.contact-item').forEach(item => {
    item.style.cssText = `
      background: #e3f2fd;
      padding: 1rem;
      border-radius: 8px;
      border-left: 4px solid #1976d2;
    `;
  });
  
  const form = container.querySelector('.contact-form');
  form.style.cssText = `
    background: #f5f5f5;
    padding: 2rem;
    border-radius: 8px;
  `;
  
  const formTitle = form.querySelector('h3');
  formTitle.style.cssText = `
    margin-bottom: 1rem;
    color: #333;
  `;
  
  const formStyles = `
    width: 100%;
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
  `;
  
  form.querySelectorAll('input, textarea').forEach(el => {
    el.style.cssText = formStyles;
  });
  
  const submitBtn = form.querySelector('button');
  submitBtn.style.cssText = `
    background: #1976d2;
    color: white;
    padding: 0.75rem 2rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s;
  `;
  
  submitBtn.addEventListener('mouseenter', () => {
    submitBtn.style.background = '#1565c0';
  });
  
  submitBtn.addEventListener('mouseleave', () => {
    submitBtn.style.background = '#1976d2';
  });
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! We\'ll get back to you soon.');
    form.reset();
  });
  
  return container;
}

/***/ },

/***/ "./src/modules/home.js"
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderHome: () => (/* binding */ renderHome)
/* harmony export */ });
/* harmony import */ var _images_nasa_Q1p7bh3SHj8_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/nasa-Q1p7bh3SHj8-unsplash.jpg */ "./src/images/nasa-Q1p7bh3SHj8-unsplash.jpg");

// 1. IMPORT THE IMAGE FIRST

console.log('DEBUG - Image path:', _images_nasa_Q1p7bh3SHj8_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__);

function renderHome() {
  const container = document.createElement('div');
  container.className = 'home-content';
  
  container.innerHTML = `
    <img class="image" src="${_images_nasa_Q1p7bh3SHj8_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__}" alt="computerimage">
    <div class="message">You right there Mduduzi, im with you all the way, iam the lord your God!</div>
  `;
  
  // Add some basic styling
  container.style.cssText = `
    text-align: center;
    padding: 2rem;
  `;
  
  const img = container.querySelector('.image');
  img.style.cssText = `
    max-width: 600px;
    width: 100%;
    border-radius: 10px;
    margin-bottom: 1rem;
  `;
  
  const message = container.querySelector('.message');
  message.style.cssText = `
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    font-family: Arial, sans-serif;
  `;
  
  return container;
}

/***/ },

/***/ "./src/modules/menu.js"
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderMenu: () => (/* binding */ renderMenu)
/* harmony export */ });
function renderMenu() {
  const container = document.createElement('div');
  container.className = 'menu-content';
  
  container.innerHTML = `
    <h1>Our Menu</h1>
    <div class="menu-items">
      <div class="menu-item">
        <h3>Deluxe Burger</h3>
        <p>Juicy beef patty with cheese, lettuce, and special sauce</p>
        <span class="price">$12.99</span>
      </div>
      <div class="menu-item">
        <h3>Spaghetti Carbonara</h3>
        <p>Classic Italian pasta with creamy sauce and bacon</p>
        <span class="price">$14.99</span>
      </div>
      <div class="menu-item">
        <h3>Caesar Salad</h3>
        <p>Fresh romaine lettuce with croutons and parmesan</p>
        <span class="price">$9.99</span>
      </div>
      <div class="menu-item">
        <h3>Chocolate Lava Cake</h3>
        <p>Warm chocolate cake with molten center, served with ice cream</p>
        <span class="price">$7.99</span>
      </div>
    </div>
  `;
  
  container.style.cssText = `
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
  `;
  
  const title = container.querySelector('h1');
  title.style.cssText = `
    text-align: center;
    color: #d32f2f;
    margin-bottom: 2rem;
    font-family: 'Georgia', serif;
  `;
  
  const menuItems = container.querySelector('.menu-items');
  menuItems.style.cssText = `
    display: grid;
    gap: 1.5rem;
  `;
  
  const itemStyles = `
    border: 1px solid #ddd;
    padding: 1rem;
    border-radius: 8px;
    background: #f9f9f9;
  `;
  
  const priceStyles = `
    display: block;
    color: #d32f2f;
    font-weight: bold;
    font-size: 1.2rem;
    margin-top: 0.5rem;
  `;
  
  container.querySelectorAll('.menu-item').forEach(item => {
    item.style.cssText = itemStyles;
    item.querySelector('.price').style.cssText = priceStyles;
  });
  
  return container;
}

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _greeting_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./greeting.js */ "./src/greeting.js");
/* harmony import */ var _appendimage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appendimage.js */ "./src/appendimage.js");
/* harmony import */ var _modules_home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/home.js */ "./src/modules/home.js");
/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu.js */ "./src/modules/menu.js");
/* harmony import */ var _modules_contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/contact.js */ "./src/modules/contact.js");
// index.js


console.log(_greeting_js__WEBPACK_IMPORTED_MODULE_0__.greeting);

// main.js or index.js


// Call it when the page loads
window.addEventListener('DOMContentLoaded', () => {
  (0,_appendimage_js__WEBPACK_IMPORTED_MODULE_1__.renderHomeContent)();
});






function clearContent() {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = '';
}

function renderTab(tabModule) {
  clearContent();
  const contentDiv = document.getElementById('content');
  const tabContent = tabModule();
  contentDiv.appendChild(tabContent);
}

function setupNavigation() {
  const homeBtn = document.getElementById('homeBtn');
  const menuBtn = document.getElementById('menuBtn');
  const contactBtn = document.getElementById('contactBtn');
  
  // Add active state styling
  function setActiveButton(activeBtn) {
    [homeBtn, menuBtn, contactBtn].forEach(btn => {
      btn.style.background = '';
      btn.style.color = '';
    });
    activeBtn.style.background = '#333';
    activeBtn.style.color = 'white';
  }
  
  homeBtn.addEventListener('click', () => {
    renderTab(_modules_home_js__WEBPACK_IMPORTED_MODULE_2__.renderHome);
    setActiveButton(homeBtn);
  });
  
  menuBtn.addEventListener('click', () => {
    renderTab(_modules_menu_js__WEBPACK_IMPORTED_MODULE_3__.renderMenu);
    setActiveButton(menuBtn);
  });
  
  contactBtn.addEventListener('click', () => {
    renderTab(_modules_contact_js__WEBPACK_IMPORTED_MODULE_4__.renderContact);
    setActiveButton(contactBtn);
  });
  
  // Style buttons
  [homeBtn, menuBtn, contactBtn].forEach(btn => {
    btn.style.cssText = `
      padding: 0.5rem 1rem;
      margin: 0 0.5rem;
      border: none;
      border-radius: 4px;
      background: #f0f0f0;
      cursor: pointer;
      font-size: 1rem;
      transition: all 0.3s;
    `;
    
    btn.addEventListener('mouseenter', () => {
      if (btn.style.background !== '#333') {
        btn.style.background = '#ddd';
      }
    });
    
    btn.addEventListener('mouseleave', () => {
      if (btn.style.background !== '#333') {
        btn.style.background = '#f0f0f0';
      }
    });
  });
  
  // Set home as initial active button
  setActiveButton(homeBtn);
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
  // Render home page initially
  renderTab(_modules_home_js__WEBPACK_IMPORTED_MODULE_2__.renderHome);
  
  // Setup navigation
  setupNavigation();
});


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxhQUFhO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDeUM7O0FBRXpDLFlBQVksa0RBQVE7O0FBRXBCO0FBQ3FEOztBQUVyRDtBQUNBO0FBQ0EsRUFBRSxrRUFBaUI7QUFDbkIsQ0FBQzs7O0FBRzhDO0FBQ0E7QUFDTTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHdEQUFVO0FBQ3hCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLHdEQUFVO0FBQ3hCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLDhEQUFhO0FBQzNCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdEQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3Qtd2VicGFjay8uL3NyYy9hcHBlbmRpbWFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3Qtd2VicGFjay8uL3NyYy9ncmVldGluZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3Qtd2VicGFjay8uL3NyYy9tb2R1bGVzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0LXdlYnBhY2svLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC13ZWJwYWNrLy4vc3JjL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3Qtd2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3Qtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3Qtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0LXdlYnBhY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29udGVudFJlbmRlcmVyLmpzXG5cbi8vIElNUE9SVCBUSEUgSU1BR0UgRklSU1RcbmltcG9ydCBuYXNhSW1hZ2UgZnJvbSAnLi9pbWFnZXMvbmFzYS1RMXA3YmgzU0hqOC11bnNwbGFzaC5qcGcnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVySG9tZUNvbnRlbnQoKSB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBcbiAgLy8gQ2xlYXIgZXhpc3RpbmcgY29udGVudCBmaXJzdFxuICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnO1xuICBcbiAgLy8gQ3JlYXRlIHRoZSBpbWFnZSBlbGVtZW50XG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcuY2xhc3NOYW1lID0gJ2ltYWdlJztcbiAgaW1nLnNyYyA9IG5hc2FJbWFnZTsgIC8vIFVzZSB0aGUgaW1wb3J0ZWQgaW1hZ2VcbiAgaW1nLmFsdCA9ICdjb21wdXRlcmltYWdlJztcbiAgXG4gIC8vIENyZWF0ZSB0aGUgdGV4dCBkaXZcbiAgY29uc3QgdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0ZXh0RGl2LnRleHRDb250ZW50ID0gJ1lvdSByaWdodCB0aGVyZSBNZHVkdXppLCBpbSB3aXRoIHlvdSBhbGwgdGhlIHdheSwgaWFtIHRoZSBsb3JkIHlvdXIgR29kISc7XG4gIFxuICAvLyBBcHBlbmQgdG8gY29udGVudCBkaXZcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChpbWcpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHRleHREaXYpO1xufSIsIi8vIGdyZWV0aW5nLmpzXG5leHBvcnQgY29uc3QgZ3JlZXRpbmcgPSBcIkhlbGxvLCBPZGluaXRlISBXZWxjb21lIG1kdSx5b3Ugb24gdG9wIG9mIHRoZSB3b3JsZCFcIjsiLCJleHBvcnQgZnVuY3Rpb24gcmVuZGVyQ29udGFjdCgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnY29udGFjdC1jb250ZW50JztcbiAgXG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgPGgxPkNvbnRhY3QgVXM8L2gxPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWluZm9cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWl0ZW1cIj5cbiAgICAgICAgPGgzPvCfk40gTG9jYXRpb248L2gzPlxuICAgICAgICA8cD4xMjMgRm9vZCBTdHJlZXQsIFJlc3RhdXJhbnQgQ2l0eSwgUkMgMTAwMDE8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWl0ZW1cIj5cbiAgICAgICAgPGgzPvCfk54gUGhvbmU8L2gzPlxuICAgICAgICA8cD4oMTIzKSA0NTYtNzg5MDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtaXRlbVwiPlxuICAgICAgICA8aDM+4pyJ77iPIEVtYWlsPC9oMz5cbiAgICAgICAgPHA+aW5mb0ByZXN0YXVyYW50LmNvbTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtaXRlbVwiPlxuICAgICAgICA8aDM+8J+VkiBIb3VyczwvaDM+XG4gICAgICAgIDxwPk1vbmRheSAtIEZyaWRheTogMTFhbSAtIDEwcG08L3A+XG4gICAgICAgIDxwPlNhdHVyZGF5IC0gU3VuZGF5OiAxMGFtIC0gMTFwbTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxmb3JtIGNsYXNzPVwiY29udGFjdC1mb3JtXCI+XG4gICAgICA8aDM+U2VuZCB1cyBhIE1lc3NhZ2U8L2gzPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJZb3VyIE5hbWVcIiByZXF1aXJlZD5cbiAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIllvdXIgRW1haWxcIiByZXF1aXJlZD5cbiAgICAgIDx0ZXh0YXJlYSBwbGFjZWhvbGRlcj1cIllvdXIgTWVzc2FnZVwiIHJvd3M9XCI1XCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNlbmQgTWVzc2FnZTwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgYDtcbiAgXG4gIGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gYFxuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgYDtcbiAgXG4gIGNvbnN0IHRpdGxlID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XG4gIHRpdGxlLnN0eWxlLmNzc1RleHQgPSBgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMTk3NmQyO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGA7XG4gIFxuICBjb25zdCBjb250YWN0SW5mbyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC1pbmZvJyk7XG4gIGNvbnRhY3RJbmZvLnN0eWxlLmNzc1RleHQgPSBgXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgICBnYXA6IDEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICBgO1xuICBcbiAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250YWN0LWl0ZW0nKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uc3R5bGUuY3NzVGV4dCA9IGBcbiAgICAgIGJhY2tncm91bmQ6ICNlM2YyZmQ7XG4gICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMTk3NmQyO1xuICAgIGA7XG4gIH0pO1xuICBcbiAgY29uc3QgZm9ybSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC1mb3JtJyk7XG4gIGZvcm0uc3R5bGUuY3NzVGV4dCA9IGBcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBgO1xuICBcbiAgY29uc3QgZm9ybVRpdGxlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdoMycpO1xuICBmb3JtVGl0bGUuc3R5bGUuY3NzVGV4dCA9IGBcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGNvbG9yOiAjMzMzO1xuICBgO1xuICBcbiAgY29uc3QgZm9ybVN0eWxlcyA9IGBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICBgO1xuICBcbiAgZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCwgdGV4dGFyZWEnKS5mb3JFYWNoKGVsID0+IHtcbiAgICBlbC5zdHlsZS5jc3NUZXh0ID0gZm9ybVN0eWxlcztcbiAgfSk7XG4gIFxuICBjb25zdCBzdWJtaXRCdG4gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuICBzdWJtaXRCdG4uc3R5bGUuY3NzVGV4dCA9IGBcbiAgICBiYWNrZ3JvdW5kOiAjMTk3NmQyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDJyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcztcbiAgYDtcbiAgXG4gIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgIHN1Ym1pdEJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gJyMxNTY1YzAnO1xuICB9KTtcbiAgXG4gIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgIHN1Ym1pdEJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gJyMxOTc2ZDInO1xuICB9KTtcbiAgXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYWxlcnQoJ01lc3NhZ2Ugc2VudCEgV2VcXCdsbCBnZXQgYmFjayB0byB5b3Ugc29vbi4nKTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gIH0pO1xuICBcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn0iLCJcbi8vIDEuIElNUE9SVCBUSEUgSU1BR0UgRklSU1RcbmltcG9ydCBuYXNhSW1hZ2UgZnJvbSAnLi4vaW1hZ2VzL25hc2EtUTFwN2JoM1NIajgtdW5zcGxhc2guanBnJztcbmNvbnNvbGUubG9nKCdERUJVRyAtIEltYWdlIHBhdGg6JywgbmFzYUltYWdlKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckhvbWUoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NOYW1lID0gJ2hvbWUtY29udGVudCc7XG4gIFxuICBjb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgIDxpbWcgY2xhc3M9XCJpbWFnZVwiIHNyYz1cIiR7bmFzYUltYWdlfVwiIGFsdD1cImNvbXB1dGVyaW1hZ2VcIj5cbiAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZVwiPllvdSByaWdodCB0aGVyZSBNZHVkdXppLCBpbSB3aXRoIHlvdSBhbGwgdGhlIHdheSwgaWFtIHRoZSBsb3JkIHlvdXIgR29kITwvZGl2PlxuICBgO1xuICBcbiAgLy8gQWRkIHNvbWUgYmFzaWMgc3R5bGluZ1xuICBjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IGBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgYDtcbiAgXG4gIGNvbnN0IGltZyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuaW1hZ2UnKTtcbiAgaW1nLnN0eWxlLmNzc1RleHQgPSBgXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGA7XG4gIFxuICBjb25zdCBtZXNzYWdlID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJyk7XG4gIG1lc3NhZ2Uuc3R5bGUuY3NzVGV4dCA9IGBcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGA7XG4gIFxuICByZXR1cm4gY29udGFpbmVyO1xufSIsImV4cG9ydCBmdW5jdGlvbiByZW5kZXJNZW51KCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdtZW51LWNvbnRlbnQnO1xuICBcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICA8aDE+T3VyIE1lbnU8L2gxPlxuICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1zXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCI+XG4gICAgICAgIDxoMz5EZWx1eGUgQnVyZ2VyPC9oMz5cbiAgICAgICAgPHA+SnVpY3kgYmVlZiBwYXR0eSB3aXRoIGNoZWVzZSwgbGV0dHVjZSwgYW5kIHNwZWNpYWwgc2F1Y2U8L3A+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2VcIj4kMTIuOTk8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIj5cbiAgICAgICAgPGgzPlNwYWdoZXR0aSBDYXJib25hcmE8L2gzPlxuICAgICAgICA8cD5DbGFzc2ljIEl0YWxpYW4gcGFzdGEgd2l0aCBjcmVhbXkgc2F1Y2UgYW5kIGJhY29uPC9wPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+JDE0Ljk5PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCI+XG4gICAgICAgIDxoMz5DYWVzYXIgU2FsYWQ8L2gzPlxuICAgICAgICA8cD5GcmVzaCByb21haW5lIGxldHR1Y2Ugd2l0aCBjcm91dG9ucyBhbmQgcGFybWVzYW48L3A+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2VcIj4kOS45OTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiPlxuICAgICAgICA8aDM+Q2hvY29sYXRlIExhdmEgQ2FrZTwvaDM+XG4gICAgICAgIDxwPldhcm0gY2hvY29sYXRlIGNha2Ugd2l0aCBtb2x0ZW4gY2VudGVyLCBzZXJ2ZWQgd2l0aCBpY2UgY3JlYW08L3A+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2VcIj4kNy45OTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xuICBcbiAgY29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBgXG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICBgO1xuICBcbiAgY29uc3QgdGl0bGUgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignaDEnKTtcbiAgdGl0bGUuc3R5bGUuY3NzVGV4dCA9IGBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNkMzJmMmY7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBmb250LWZhbWlseTogJ0dlb3JnaWEnLCBzZXJpZjtcbiAgYDtcbiAgXG4gIGNvbnN0IG1lbnVJdGVtcyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubWVudS1pdGVtcycpO1xuICBtZW51SXRlbXMuc3R5bGUuY3NzVGV4dCA9IGBcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMS41cmVtO1xuICBgO1xuICBcbiAgY29uc3QgaXRlbVN0eWxlcyA9IGBcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gIGA7XG4gIFxuICBjb25zdCBwcmljZVN0eWxlcyA9IGBcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogI2QzMmYyZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIGA7XG4gIFxuICBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtaXRlbScpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5zdHlsZS5jc3NUZXh0ID0gaXRlbVN0eWxlcztcbiAgICBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5wcmljZScpLnN0eWxlLmNzc1RleHQgPSBwcmljZVN0eWxlcztcbiAgfSk7XG4gIFxuICByZXR1cm4gY29udGFpbmVyO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGV4aXN0cyAoZGV2ZWxvcG1lbnQgb25seSlcblx0aWYgKF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvXmJsb2I6LywgXCJcIikucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIGluZGV4LmpzXG5pbXBvcnQgeyBncmVldGluZyB9IGZyb20gXCIuL2dyZWV0aW5nLmpzXCI7XG5cbmNvbnNvbGUubG9nKGdyZWV0aW5nKTtcblxuLy8gbWFpbi5qcyBvciBpbmRleC5qc1xuaW1wb3J0IHsgcmVuZGVySG9tZUNvbnRlbnQgfSBmcm9tICcuL2FwcGVuZGltYWdlLmpzJztcblxuLy8gQ2FsbCBpdCB3aGVuIHRoZSBwYWdlIGxvYWRzXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgcmVuZGVySG9tZUNvbnRlbnQoKTtcbn0pO1xuXG5cbmltcG9ydCB7IHJlbmRlckhvbWUgfSBmcm9tICcuL21vZHVsZXMvaG9tZS5qcyc7XG5pbXBvcnQgeyByZW5kZXJNZW51IH0gZnJvbSAnLi9tb2R1bGVzL21lbnUuanMnO1xuaW1wb3J0IHsgcmVuZGVyQ29udGFjdCB9IGZyb20gJy4vbW9kdWxlcy9jb250YWN0LmpzJztcblxuZnVuY3Rpb24gY2xlYXJDb250ZW50KCkge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJztcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFiKHRhYk1vZHVsZSkge1xuICBjbGVhckNvbnRlbnQoKTtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IHRhYkNvbnRlbnQgPSB0YWJNb2R1bGUoKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZCh0YWJDb250ZW50KTtcbn1cblxuZnVuY3Rpb24gc2V0dXBOYXZpZ2F0aW9uKCkge1xuICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWVCdG4nKTtcbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51QnRuJyk7XG4gIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdEJ0bicpO1xuICBcbiAgLy8gQWRkIGFjdGl2ZSBzdGF0ZSBzdHlsaW5nXG4gIGZ1bmN0aW9uIHNldEFjdGl2ZUJ1dHRvbihhY3RpdmVCdG4pIHtcbiAgICBbaG9tZUJ0biwgbWVudUJ0biwgY29udGFjdEJ0bl0uZm9yRWFjaChidG4gPT4ge1xuICAgICAgYnRuLnN0eWxlLmJhY2tncm91bmQgPSAnJztcbiAgICAgIGJ0bi5zdHlsZS5jb2xvciA9ICcnO1xuICAgIH0pO1xuICAgIGFjdGl2ZUJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gJyMzMzMnO1xuICAgIGFjdGl2ZUJ0bi5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XG4gIH1cbiAgXG4gIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcmVuZGVyVGFiKHJlbmRlckhvbWUpO1xuICAgIHNldEFjdGl2ZUJ1dHRvbihob21lQnRuKTtcbiAgfSk7XG4gIFxuICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlbmRlclRhYihyZW5kZXJNZW51KTtcbiAgICBzZXRBY3RpdmVCdXR0b24obWVudUJ0bik7XG4gIH0pO1xuICBcbiAgY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICByZW5kZXJUYWIocmVuZGVyQ29udGFjdCk7XG4gICAgc2V0QWN0aXZlQnV0dG9uKGNvbnRhY3RCdG4pO1xuICB9KTtcbiAgXG4gIC8vIFN0eWxlIGJ1dHRvbnNcbiAgW2hvbWVCdG4sIG1lbnVCdG4sIGNvbnRhY3RCdG5dLmZvckVhY2goYnRuID0+IHtcbiAgICBidG4uc3R5bGUuY3NzVGV4dCA9IGBcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgICAgbWFyZ2luOiAwIDAuNXJlbTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBgO1xuICAgIFxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgaWYgKGJ0bi5zdHlsZS5iYWNrZ3JvdW5kICE9PSAnIzMzMycpIHtcbiAgICAgICAgYnRuLnN0eWxlLmJhY2tncm91bmQgPSAnI2RkZCc7XG4gICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICBpZiAoYnRuLnN0eWxlLmJhY2tncm91bmQgIT09ICcjMzMzJykge1xuICAgICAgICBidG4uc3R5bGUuYmFja2dyb3VuZCA9ICcjZjBmMGYwJztcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIFxuICAvLyBTZXQgaG9tZSBhcyBpbml0aWFsIGFjdGl2ZSBidXR0b25cbiAgc2V0QWN0aXZlQnV0dG9uKGhvbWVCdG4pO1xufVxuXG4vLyBJbml0aWFsaXplIG9uIHBhZ2UgbG9hZFxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIC8vIFJlbmRlciBob21lIHBhZ2UgaW5pdGlhbGx5XG4gIHJlbmRlclRhYihyZW5kZXJIb21lKTtcbiAgXG4gIC8vIFNldHVwIG5hdmlnYXRpb25cbiAgc2V0dXBOYXZpZ2F0aW9uKCk7XG59KTtcblxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==