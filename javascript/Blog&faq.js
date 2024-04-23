{
  function menuBar(){
    const menu= document.querySelector('.nav-links');
    
    if(menu.classList.contains('new-menubar')) {
      menu.classList.remove('new-menubar');
    }else{
      menu.classList.add('new-menubar');
    }
  };
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
 
  {
    function readMore() {
      const paragraph = document.querySelector('.more-js');

    if (paragraph.classList.contains('paragraph-js')) {
      paragraph.classList.remove('paragraph-js');
    } else {
      paragraph.classList.add('paragraph-js');
    }

    {
      const button0 = document.querySelector('.button11').innerHTML;
      if (button0 === 'READ MORE') {
        document.querySelector('.button11').innerHTML = 'CANCEL'
      } else{
        document.querySelector('.button11').innerHTML = 'READ MORE'
      }
      }
    }
  }
  {
    function readMore2() {
      const paragraph = document.querySelector('.more-js2');

    if (paragraph.classList.contains('paragraph-js2')) {
      paragraph.classList.remove('paragraph-js2');
    } else {
      paragraph.classList.add('paragraph-js2');
    }

    {
      const button0 = document.querySelector('.button12').innerHTML;
      if (button0 === 'READ MORE') {
        document.querySelector('.button12').innerHTML = 'CANCEL'
      } else{
        document.querySelector('.button12').innerHTML = 'READ MORE'
      }
      }
    }
    
  }
  {
    function readMore3() {
      const paragraph = document.querySelector('.more-js3');

    if (paragraph.classList.contains('paragraph-js3')) {
      paragraph.classList.remove('paragraph-js3');
    } else {
      paragraph.classList.add('paragraph-js3');
    }

    {
      const button0 = document.querySelector('.button13').innerHTML;
      if (button0 === 'READ MORE') {
        document.querySelector('.button13').innerHTML = 'CANCEL'
      } else{
        document.querySelector('.button13').innerHTML = 'READ MORE'
      }
      }
    }
    
  }
  {
    function readMore4() {
      const paragraph = document.querySelector('.more-js4');

    if (paragraph.classList.contains('paragraph-js4')) {
      paragraph.classList.remove('paragraph-js4');
    } else {
      paragraph.classList.add('paragraph-js4');
    }

    {
      const button0 = document.querySelector('.button14').innerHTML;
      if (button0 === 'READ MORE') {
        document.querySelector('.button14').innerHTML = 'CANCEL'
      } else{
        document.querySelector('.button14').innerHTML = 'READ MORE'
      }
      }
    }
    
  }
  {
    function readMore5() {
      const paragraph = document.querySelector('.more-js5');

    if (paragraph.classList.contains('paragraph-js5')) {
      paragraph.classList.remove('paragraph-js5');
    } else {
      paragraph.classList.add('paragraph-js5');
    }

    {
      const button0 = document.querySelector('.button15').innerHTML;
      if (button0 === 'READ MORE') {
        document.querySelector('.button15').innerHTML = 'CANCEL'
      } else{
        document.querySelector('.button15').innerHTML = 'READ MORE'
      }
      }
    }
    
  }
  {
    function readMore6() {
      const paragraph = document.querySelector('.more-js6');

    if (paragraph.classList.contains('paragraph-js6')) {
      paragraph.classList.remove('paragraph-js6');
    } else {
      paragraph.classList.add('paragraph-js6');
    }

    {
      const button0 = document.querySelector('.button16').innerHTML;
      if (button0 === 'READ MORE') {
        document.querySelector('.button16').innerHTML = 'CANCEL'
      } else{
        document.querySelector('.button16').innerHTML = 'READ MORE'
      }
      }
    }
  }

  {
    function readMore7() {
      const paragraph = document.querySelector('.more-js7');

    if (paragraph.classList.contains('paragraph-js7')) {
      paragraph.classList.remove('paragraph-js7');
    } else {
      paragraph.classList.add('paragraph-js7');
    }

    {
      const button0 = document.querySelector('.button17').innerHTML;
      if (button0 === 'READ MORE') {
        document.querySelector('.button17').innerHTML = 'CANCEL'
      } else{
        document.querySelector('.button17').innerHTML = 'READ MORE'
      }
      }
    }
  }

  {
    function readMore8() {
      const paragraph = document.querySelector('.more-js8');

    if (paragraph.classList.contains('paragraph-js8')) {
      paragraph.classList.remove('paragraph-js8');
    } else {
      paragraph.classList.add('paragraph-js8');
    }

    {
      const button0 = document.querySelector('.button18').innerHTML;
      if (button0 === 'READ MORE') {
        document.querySelector('.button18').innerHTML = 'CANCEL'
      } else{
        document.querySelector('.button18').innerHTML = 'READ MORE'
      }
      }
    }
  }

  {
    function readMore9() {
      const paragraph = document.querySelector('.more-js9');

    if (paragraph.classList.contains('paragraph-js9')) {
      paragraph.classList.remove('paragraph-js9');
    } else {
      paragraph.classList.add('paragraph-js9');
    }

    {
      const button0 = document.querySelector('.button19').innerHTML;
      if (button0 === 'READ MORE') {
        document.querySelector('.button19').innerHTML = 'CANCEL'
      } else{
        document.querySelector('.button19').innerHTML = 'READ MORE'
      }
      }
    }
  }

  {
    function readMore10() {
      const paragraph = document.querySelector('.more-js10');

    if (paragraph.classList.contains('paragraph-js10')) {
      paragraph.classList.remove('paragraph-js10');
    } else {
      paragraph.classList.add('paragraph-js10');
    }

    {
      const button0 = document.querySelector('.button100').innerHTML;
      if (button0 === 'READ MORE') {
        document.querySelector('.button100').innerHTML = 'CANCEL'
      } else{
        document.querySelector('.button100').innerHTML = 'READ MORE'
      }
      }
    }
  }
  
  {
  function faqSection() {

    
    let butFaq = document.querySelector('.faq-button').innerHTML;
    if(butFaq = '&#43') {
      document.querySelector('.faq-button').innerHTML = '&#8722'
    } else{
      document.querySelector('.faq-button') = '&#43'
    }
   
  
    const faq01 = document.querySelector('.faq-js');
    if (faq01.classList.contains('faqParagraph')) {
      faq01.classList.remove('faqParagraph')
    } else{
      faq01.classList.add('faqParagraph')
    }
}
}
{
  function faqSection2() {

    let butFaq = document.querySelector('.faq-button2').innerHTML;
    if(butFaq = '&#43') {
      document.querySelector('.faq-button2').innerHTML = '&#8722'
    } else{
      document.querySelector('.faq-button2') = '&#43'
    }
  
    const faq01 = document.querySelector('.faq-js2');
    if (faq01.classList.contains('faqParagraph')) {
      faq01.classList.remove('faqParagraph')
    } else{
      faq01.classList.add('faqParagraph')
    }
}
}

{
  function faqSection3() {

    let butFaq = document.querySelector('.faq-button3').innerHTML;
    if(butFaq = '&#43') {
      document.querySelector('.faq-button3').innerHTML = '&#8722'
    } else{
      document.querySelector('.faq-button3') = '&#43'
    }
  
    const faq01 = document.querySelector('.faq-js3');
    if (faq01.classList.contains('faqParagraph')) {
      faq01.classList.remove('faqParagraph')
    } else{
      faq01.classList.add('faqParagraph')
    }
}
}

{
  function faqSection4() {

    let butFaq = document.querySelector('.faq-button4').innerHTML;
    if(butFaq = '&#43') {
      document.querySelector('.faq-button4').innerHTML = '&#8722'
    } else{
      document.querySelector('.faq-button4') = '&#43'
    }
  
    const faq01 = document.querySelector('.faq-js4');
    if (faq01.classList.contains('faqParagraph')) {
      faq01.classList.remove('faqParagraph')
    } else{
      faq01.classList.add('faqParagraph')
    }
}
}

{
  function faqSection5() {

    let butFaq = document.querySelector('.faq-button5').innerHTML;
    if(butFaq = '&#43') {
      document.querySelector('.faq-button5').innerHTML = '&#8722'
    } else{
      document.querySelector('.faq-button5') = '&#43'
    }
  
    const faq01 = document.querySelector('.faq-js5');
    if (faq01.classList.contains('faqParagraph')) {
      faq01.classList.remove('faqParagraph')
    } else{
      faq01.classList.add('faqParagraph')
    }
}
}

{
  function faqSection6() {

    let butFaq = document.querySelector('.faq-button6').innerHTML;
    if(butFaq = '&#43') {
      document.querySelector('.faq-button6').innerHTML = '&#8722'
    } else{
      document.querySelector('.faq-button6') = '&#43'
    }
  
    const faq01 = document.querySelector('.faq-js6');
    if (faq01.classList.contains('faqParagraph')) {
      faq01.classList.remove('faqParagraph')
    } else{
      faq01.classList.add('faqParagraph')
    }
}
}

{
  function faqSection7() {

    let butFaq = document.querySelector('.faq-button7').innerHTML;
    if(butFaq = '&#43') {
      document.querySelector('.faq-button7').innerHTML = '&#8722'
    } else{
      document.querySelector('.faq-button6') = '&#43'
    }
  
    const faq01 = document.querySelector('.faq-js7');
    if (faq01.classList.contains('faqParagraph')) {
      faq01.classList.remove('faqParagraph')
    } else{
      faq01.classList.add('faqParagraph')
    }
}
}

{
  function faqSection8() {

    let butFaq = document.querySelector('.faq-button8').innerHTML;
    if(butFaq = '&#43') {
      document.querySelector('.faq-button8').innerHTML = '&#8722'
    } else{
      document.querySelector('.faq-button8') = '&#43'
    }
  
    const faq01 = document.querySelector('.faq-js8');
    if (faq01.classList.contains('faqParagraph')) {
      faq01.classList.remove('faqParagraph')
    } else{
      faq01.classList.add('faqParagraph')
    }
}
}

{
  function faqSection9() {

    let butFaq = document.querySelector('.faq-button9').innerHTML;
    if(butFaq = '&#43') {
      document.querySelector('.faq-button9').innerHTML = '&#8722'
    } else{
      document.querySelector('.faq-button9') = '&#43'
    }
  
    const faq01 = document.querySelector('.faq-js9');
    if (faq01.classList.contains('faqParagraph')) {
      faq01.classList.remove('faqParagraph')
    } else{
      faq01.classList.add('faqParagraph')
    }
}
}

{
  function faqSection10() {

    let butFaq = document.querySelector('.faq-button10').innerHTML;
    if(butFaq = '&#43') {
      document.querySelector('.faq-button10').innerHTML = '&#8722'
    } else{
      document.querySelector('.faq-button10') = '&#43'
    }
  
    const faq01 = document.querySelector('.faq-js10');
    if (faq01.classList.contains('faqParagraph')) {
      faq01.classList.remove('faqParagraph')
    } else{
      faq01.classList.add('faqParagraph')
    }
}
}





  