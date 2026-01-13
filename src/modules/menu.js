export function renderMenu() {
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