const title = document.querySelector('.smoke-title');

const letters = document.querySelectorAll('span');

function toggleVisibility(element) {
    element.style.opacity = '0';
}

const popup = document.querySelector('.full-screen');

function showPopup(){
  popup.classList.remove('hidden');
}

function closePopup(){
  popup.classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', function () {
   
    var button1 = document.getElementById('button1');
    var popup1 = document.getElementById('popup1');

    button1.addEventListener('click', function () {
        togglePopup(popup1);
    });
  
    function togglePopup(popup) {
        popup.classList.toggle('hidden');
    }
});

function toggleText() {
      var text1 = document.getElementById("text1");
      var text2 = document.getElementById("text2");
      var text3 = document.getElementById("text3");
      var text4 = document.getElementById("text4");
     
      if (text1.classList.contains("hidden")) {
        text1.classList.remove("hidden");
        text2.classList.add("hidden");
      } else {
        text1.classList.add("hidden");
        text2.classList.remove("hidden");
      }
      if (text3.classList.contains("hidden")) {
        text3.classList.remove("hidden");
        text4.classList.add("hidden");
      } else {
        text3.classList.add("hidden");
        text4.classList.remove("hidden");
      }
    }