// Out of Hours Accordion

const accord = document.getElementsByClassName("accordion-base");
let i;

for (i = 0; i < accord.length; i++) {
    accord[i].addEventListener("click", function() {
      /* Toggle between adding and removing the 'open' class.*/
      this.classList.toggle("open");
  
      /* Toggle between hiding and showing content */
      let content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  } 