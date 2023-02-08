function check() {
        var checkBox = document.getElementById("checbox");
        var text1 = document.getElementsByClassName("text1");
        var text2 = document.getElementsByClassName("text2");
      
        for (var i = 0; i < text1.length; i++) {
          if (checkBox.checked == true) {
            text1[i].style.display = "block";
            text2[i].style.display = "none";
          } else if (checkBox.checked == false) {
            text1[i].style.display = "none";
            text2[i].style.display = "block";
          }
        }
      }
      check();


      var upClass = 'toggle-up';
      var downClass = 'toggle-down';
      var question = document.getElementById("question");
      var answer1 = document.getElementById("answer");
      var question2 = document.getElementById("question1");
      var answer2 = document.getElementById("answer1");
      var question3 = document.getElementById("question2");
      var answer3 = document.getElementById("answer2");
      var question4 = document.getElementById("question3");
      var answer4 = document.getElementById("answer3");
      

      function toggle() {
        var square = document.querySelector('.question');
        if (~square.className.indexOf(downClass)) {
          square.className = square.className.replace(downClass, upClass);
          answer1.classList.add("show");
        } else {
          square.className = square.className.replace(upClass, downClass);
          answer1.classList.remove("show");
        }
      }
      
      function toggle1() {
        var square = document.querySelector('.question1');
        if (~square.className.indexOf(downClass)) {
          square.className = square.className.replace(downClass, upClass);
          answer2.classList.add("show");
        } else {
          square.className = square.className.replace(upClass, downClass);
          answer2.classList.remove("show");
        }
      }
      
      





