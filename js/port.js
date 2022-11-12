const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

//JQUERY*************************
const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960:{
        items: 3
    }
}



hamburger.addEventListener('click', () => {
       hamburger.classList.toggle('active');
       mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = '#29323c';
    }else{
        header.style.backgroundColor = 'transparent';
}
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
 });
    });




//JQUERY ************************
    $(document).ready(function(){

        $nav = $('.nav');
        $toggleCollapse = $('.toggle-collapse');
    
        /**click events on toggle menu */
        $toggleCollapse.click(function(){
            $nav.toggleClass('collapse');
        })
          
    //owl carousel for blog
    $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeOut: 200,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    responsive: responsive
    });
    
    
    //click to scroll top
    $('.move-up span').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })
    
    
    //AOS instance
    AOS.init();
    });
