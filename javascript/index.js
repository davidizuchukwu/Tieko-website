//IMAGE SLIDER
{
let slideindex=0;
    const slides = document.getElementsByClassName('slide');
    function showslide(n) {
      slideindex=n;
      if(slideindex<0){
        slideindex= slide.length-1;
      }else if (slideindex>=slides.length){
        slideindex=0
      }
      for(let i=0; i<slides.length; i++){
        slides[i].style.display="none"
      }
      slides[slideindex].style.display="block";
      slides[slideindex].style.left="0";
    }


    function nextSlide() {
      showslide(slideindex +1);
    }
    function prevSlide() {
      showslide(slideindex -1);
    }
    function autoSlide() {
      nextSlide()
      setTimeout(autoSlide,2000);
    }
    

    document.addEventListener("DOMContentLoaded",function() {
      showslide(slideindex);
      autoSlide();

      const prevButton = document.querySelector(".prev")
      const nextButton = document.querySelector(".next")

      prevButton.addEventListener("click",function() {
        prevSlide();
    });

    nextButton.addEventListener("click",function() {
      nextSlide();
    });
  });

  prevButton.addEventListener("touchstart",function(e){
    e.preventDefault();
    prevSlide();
  });

  nextButton.addEventListener("touchstart", function(e){
    e.preventDefault();
    nextSlide();
  })
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


