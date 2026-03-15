// JS Script for Hamburger Menu
function toggleNav() {
  var navLinks = document.getElementById("nav-links");
  var hamburger = document.getElementById("hamburger");
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
}

// JS Script for Main Page Content

window.onload = function() {
      document.getElementById('content1-1').classList.add('active');
  };

function toggleDropdown(dropdownId) {
      var dropdowns = document.querySelectorAll('.dropdown');
      dropdowns.forEach(function(dropdown) {
          if (dropdown.id === dropdownId) {
              dropdown.style.display = (dropdown.style.display === "flex") ? "none" : "flex";
          } else {
              dropdown.style.display = "none";
          }
      });
  }

  function showContent(contentId) {
      var contents = document.querySelectorAll('.content');
      contents.forEach(function(content) {
          content.classList.remove('active');
      });
      document.getElementById(contentId).classList.add('active');

      // Close all dropdowns
      var dropdowns = document.querySelectorAll('.dropdown');
      dropdowns.forEach(function(dropdown) {
          dropdown.style.display = "none";
      });
  }

  document.querySelectorAll('.dropdown-item').forEach(function(item) {
      item.addEventListener('click', function(event) {
          event.stopPropagation();
      });
  });