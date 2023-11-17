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


