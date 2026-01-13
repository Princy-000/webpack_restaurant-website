
// 1. IMPORT THE IMAGE FIRST
import nasaImage from '../images/nasa-Q1p7bh3SHj8-unsplash.jpg';
console.log('DEBUG - Image path:', nasaImage);

export function renderHome() {
  const container = document.createElement('div');
  container.className = 'home-content';
  
  container.innerHTML = `
    <img class="image" src="${nasaImage}" alt="computerimage">
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