// index.js
import { greeting } from "./greeting.js";

console.log(greeting);

// main.js or index.js
import { renderHomeContent } from './appendimage.js';

// Call it when the page loads
window.addEventListener('DOMContentLoaded', () => {
  renderHomeContent();
});


import { renderHome } from './modules/home.js';
import { renderMenu } from './modules/menu.js';
import { renderContact } from './modules/contact.js';

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
    renderTab(renderHome);
    setActiveButton(homeBtn);
  });
  
  menuBtn.addEventListener('click', () => {
    renderTab(renderMenu);
    setActiveButton(menuBtn);
  });
  
  contactBtn.addEventListener('click', () => {
    renderTab(renderContact);
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
  renderTab(renderHome);
  
  // Setup navigation
  setupNavigation();
});

