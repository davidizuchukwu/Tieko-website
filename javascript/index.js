//IMAGE SLIDER
{
let slideindex=0;
    const slides = document.getElementsByClassName('slide');
    function showslides(n) {
      if (n<0) {
        slideindex = slides.length -1
      }
      else if (n>=slides.length){
        slideindex = 0;
      } else {
        slideindex= n
      }
      for (let i = 0; i<slides.length; i= i +1){
        slides[i].style.display = "none";
      }
      slides[slideindex].style.display = "block";
    }
   

    function nextSlide() {
      showslides(slideindex +1);
    }
    function prevSlide() {
      showslides(slideindex -1);
    }
    function autoSlide() {
      nextSlide()
      setTimeout(autoSlide,2000)
    }
    

    document.addEventListener("DOMContentLoaded",function() {
      showslides(slideindex);
      autoSlide();

      const prevButton = document.querySelector(".prev")
      const nextButton = document.querySelector(".next")

      prevButton.addEventListener("click",function() {
        prevSlide();
    });

    nextButton.addEventListener("click",function() {
      nextSlide();
    });
  

  prevButton.addEventListener("touchstart",function(e) {
    e.preventDefault();
    prevSlide();
  })

  nextButton.addEventListener("touchstart",function(e) {
    e.preventDefault();
    nextSlide();
  });
});

}
function properties() {
  document.querySelector('.listed-button').style.display="none";
  document.querySelector('.listed-2p').classList.add('general-listed-properties');
  document.querySelector('.listed-3p').classList.add('general-listed-properties');
  document.querySelector('.see-more2').style.display="block"
}
function properties1() {
  document.querySelector('.see-more2').style.display="none";
  document.querySelector('.listed-4p').classList.add('general-listed-properties');
  document.querySelector('.listed-5p').classList.add('general-listed-properties');
  document.querySelector('.listed-6p').classList.add('general-listed-properties');
  document.querySelector('.listed-7p').classList.add('general-listed-properties');
  document.querySelector('.see-more3').style.display="block"
}
  
function properties2() {
  document.querySelector('.see-more3').style.display="none";
  document.querySelector('.listed-8p').classList.add('general-listed-properties');
  document.querySelector('.remove').style.display="block";
}
function propertiesRemove() {
  document.querySelector('.remove').style.display="none";
  document.querySelector('.listed-2p').classList.remove('general-listed-properties');
  document.querySelector('.listed-3p').classList.remove('general-listed-properties');
  document.querySelector('.listed-4p').classList.remove('general-listed-properties');
  document.querySelector('.listed-5p').classList.remove('general-listed-properties');
  document.querySelector('.listed-6p').classList.remove('general-listed-properties');
  document.querySelector('.listed-7p').classList.remove('general-listed-properties');
  document.querySelector('.listed-8p').classList.remove('general-listed-properties');
  document.querySelector('.listed-button').style.display="block";
}
// testimonials//
{
  let slideindex=0;
    const slides = document.getElementsByClassName('TESTIMONIALS-cards');
    function showslides(n) {
      if (n<0) {
        slideindex = slides.length -1
      }
      else if (n>=slides.length){
        slideindex = 0;
      } else {
        slideindex= n
      }
      for (let i = 0; i<slides.length; i= i +1){
        slides[i].style.display = "none";
      }
      slides[slideindex].style.display = "block";
    }
   

    function nextSlide() {
      showslides(slideindex +1);
    }
    function prevSlide() {
      showslides(slideindex -1);
    }
    function autoSlide() {
      nextSlide()
      setTimeout(autoSlide,4000)
    }
    

    document.addEventListener("DOMContentLoaded",function() {
      showslides(slideindex);
      autoSlide();

      const prevButton = document.querySelector(".test-prev")
      const nextButton = document.querySelector(".test-next")

      prevButton.addEventListener("click",function() {
        prevSlide();
    });

    nextButton.addEventListener("click",function() {
      nextSlide();
    });
  });

}
function menuBar(){
  const menu= document.querySelector('.nav-links');
  
  if(menu.classList.contains('new-menubar')) {
    menu.classList.remove('new-menubar');
  }else{
    menu.classList.add('new-menubar');
  }
};


