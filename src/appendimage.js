// contentRenderer.js

// IMPORT THE IMAGE FIRST
import nasaImage from './images/nasa-Q1p7bh3SHj8-unsplash.jpg';

export function renderHomeContent() {
  const contentDiv = document.getElementById('content');
  
  // Clear existing content first
  contentDiv.innerHTML = '';
  
  // Create the image element
  const img = document.createElement('img');
  img.className = 'image';
  img.src = nasaImage;  // Use the imported image
  img.alt = 'computerimage';
  
  // Create the text div
  const textDiv = document.createElement('div');
  textDiv.textContent = 'You right there Mduduzi, im with you all the way, iam the lord your God!';
  
  // Append to content div
  contentDiv.appendChild(img);
  contentDiv.appendChild(textDiv);
}