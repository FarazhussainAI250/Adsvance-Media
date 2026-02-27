// Registration Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    const btns = document.querySelectorAll('.header-buttons .btn');
    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            alert(this.textContent + ' - Coming soon');
        });
    });
});
