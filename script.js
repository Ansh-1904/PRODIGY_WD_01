// Add this JavaScript code to your separate "script.js" file

// Function to change the navigation style on scroll
window.addEventListener("scroll", function () {
    var navigation = document.querySelector(".navigation");
    var scrollPosition = window.scrollY;
  
    
    if (scrollPosition > 100) { 
      navigation.style.backgroundColor = "#F3EFE0"; 
    } else {
      navigation.style.backgroundColor = "#333"; 
    }
  });
  
  document.querySelectorAll('.navigation a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetElement.offsetTop - document.querySelector('.navigation').offsetHeight,
        behavior: 'smooth'
      });
    });
  });
  