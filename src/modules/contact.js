export function renderContact() {
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