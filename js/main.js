(function () {
    let sidebarOpened = false;
    let button = $('#header__icon');
    let nav = document.querySelector('.nav');
    let site = document.querySelector('.site-pusher');
    let header = document.querySelector('.header');
    

    button.on('click', function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        sidebarOpened = true;
        $('body').toggleClass('with--sidebar')
        if (document.body.className === 'body with--sidebar') {
            console.log(nav)
            nav.style.transform = 'translateX(0)'
            site.style.transitionDuration = '.6s'
            site.style.transform = 'translateX(250px)'
            site.setAttribute('class', 'opacity')
        } else {
            nav.style.transform = 'translateX(-250px)'
            site.style.transitionDuration = '.6s'
            site.style.transform = 'translateX(0)'
            site.removeAttribute('class', 'opacity')
        }
    })

    document.body.addEventListener('click', function () {
        if (sidebarOpened) {
            document.body.classList.remove('with--sidebar')
        }
    })
    
})()
