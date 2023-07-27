window.onload = function () {

    var el = document.createElement("div");
    el.innerHTML = "RABBIT TEST ";
    var div = document.getElementById("headline");
    insertAfter(div, el);

    /* FUNCTIONS */

    // Inserts newNode after referenceNode
    function insertAfter(referenceNode, newNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
};


/* function myFunction() {
   
    if (MyTopnav === "topnav") {
        MyTopnav += " responsive";
    } else {
        MyTopnav = "topnav";
    }
  };
*/


  function myFunction() {
    const topnav = document.getElementById("myTopnav");
    const icon = document.querySelector(".icon");
    console.log(icon)

 
    if (topnav.classList.contains('responsive')) {
      topnav.classList.remove('responsive');
    } else {
      topnav.classList.add('responsive');
    }

    if (icon.classList.contains('icon-active')) {
      icon.classList.remove('icon-active');
    } else {
      icon.classList.add('icon-active');
    }
  };


  const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
 