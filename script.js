// // Navbar scroll effect
// document.addEventListener('DOMContentLoaded', function() {
//   const navbar = document.querySelector('.navbar');
//   const themeToggle = document.getElementById('themeToggle');
  
//   // Navbar scroll
//   window.addEventListener('scroll', function() {
//     if (window.scrollY > 50) {
//       navbar.classList.add('scrolled');
//     } else {
//       navbar.classList.remove('scrolled');
//     }
//   });
  
//   // Smooth scroll
//   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//       e.preventDefault();
//       document.querySelector(this.getAttribute('href')).scrollIntoView({
//         behavior: 'smooth'
//       });
//     });
//   });
  
//   // Dark mode toggle
//   themeToggle.addEventListener('click', function() {
//     document.documentElement.setAttribute('data-bs-theme', 
//       document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark'
//     );
    
//     // Update icon
//     const icon = this.querySelector('i');
//     icon.classList.toggle('fa-sun');
//     icon.classList.toggle('fa-moon');
//   });
  
//   // Form validation
//   const form = document.querySelector('.contact-form');
//   if (form) {
//     form.addEventListener('submit', function(e) {
//       if (!form.checkValidity()) {
//         e.preventDefault();
//         e.stopPropagation();
//       }
//       form.classList.add('was-validated');
//     });
//   }
// });

// // Initialize tooltips and popovers
// var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
// var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//   return new bootstrap.Tooltip(tooltipTriggerEl);
// }); 