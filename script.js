
document.querySelector('.cart-btn').addEventListener('click', () => {
    alert('Your shopping cart is currently empty.');
});
document.querySelector('.cta-btn').addEventListener('click', () => {
    document.querySelector('.featured').scrollIntoView({ behavior: 'smooth' });
});
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href').substring(1);
        document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
    });
});
