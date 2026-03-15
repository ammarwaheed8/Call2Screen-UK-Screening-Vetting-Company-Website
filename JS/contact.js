    // JS Script for Hamburger Menu
      function toggleNav() {
        var navLinks = document.getElementById("nav-links");
        var hamburger = document.getElementById("hamburger");
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");
      }

      // JS Script for the PopUp details in 4th Section
      // Get the "Pop Up 1" element
      var modal1 = document.getElementById("popup-1");
      var btn1 = document.getElementById("view-more-btn-1");
      var span1 = document.getElementById("closePopupButton-1");

      btn1.onclick = function () {
        modal1.style.display = "block";
      };

      span1.onclick = function () {
        modal1.style.display = "none";
      };

      window.onclick = function (event) {
        if (event.target == modal1) {
          modal1.style.display = "none";
        }
      };

      // Get the "Pop Up 2" element
      var modal2 = document.getElementById("popup-2");
      var btn2 = document.getElementById("view-more-btn-2");
      var span2 = document.getElementById("closePopupButton-2");

      btn2.onclick = function () {
        modal2.style.display = "block";
      };

      span2.onclick = function () {
        modal2.style.display = "none";
      };

      window.onclick = function (event) {
        if (event.target == modal2) {
          modal2.style.display = "none";
        }
      };

      // Get the "Pop Up 3" element
      var modal3 = document.getElementById("popup-3");
      var btn3 = document.getElementById("view-more-btn-3");
      var span3 = document.getElementById("closePopupButton-3");

      btn3.onclick = function () {
        modal3.style.display = "block";
      };

      span3.onclick = function () {
        modal3.style.display = "none";
      };

      window.onclick = function (event) {
        if (event.target == modal3) {
          modal3.style.display = "none";
        }
      };