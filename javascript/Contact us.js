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