// nav
const showBtn = document.querySelector('.navBtn');
const topNav = document.querySelector('.top-nav');

showBtn.addEventListener('click', () => {
    if(topNav.classList.contains('showNav')){
        topNav.classList.remove('showNav');
        showBtn.innerHTML = '<i class="fas fa-bars"></i>'
    } else{
        topNav.classList.add('showNav');
        showBtn.innerHTML = '<i class="fas fa-times"></i>'
    }
});

// Lightbox
var lightbox = new SimpleLightbox('.weddings-gallery a', { /* options */ });
var lightbox1 = new SimpleLightbox('.couples-gallery a', { /* options */ });
var lightbox2 = new SimpleLightbox('.boudoir-gallery a', { /* options */ });
var lightbox3 = new SimpleLightbox('.maternity-gallery a', { /* options */ });







//***************************** making form work******************************
$(document).ready(function () {
    $('.btn').click(function(event) {
        console.log('Clicked button')

        var name = $('.name')
        var email = $('.email').val()
        var event = $('.event').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()

        if(email.length > 5 && email.includes('@') && email.includes('.')){
            statusElm.append('<div>Email is valid</div>')
        }else{
            event.preventDefault()
            statusElm.append('<div>Email is not valid</div>')
        }

        if(event.length > 2) {
            statusElm.append('<div>Subject is valid</div>')
        }else{
            event.preventDefault()
            statusElm.append('<div>Subject is not valid</div>')
        }

        if(message.length > 2) {
            statusElm.append('<div>Message is valid</div>')
        }else{
            event.preventDefault()
            statusElm.append('<div>Message is not valid</div>')

        }
    })
})




