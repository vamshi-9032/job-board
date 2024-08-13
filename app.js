
$(document).ready(function () {
    const $navbar = $(".navbar");

    // Navbar scroll effect
    $(window).scroll(function () {
        const scroll = $(window).scrollTop();
        if (scroll > 150) {
            $navbar.addClass("navbar-scrolled");
        } else {
            $navbar.removeClass("navbar-scrolled");
        }
    });

    // Smooth scroll
    const navbarHeight = $navbar.outerHeight();
    $(".navbar-menu a").click(function (e) {
        e.preventDefault();
        const targetHref = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(targetHref).offset().top - navbarHeight
        }, 1000);
    });
    // Mobile navbar toggle
    const mobileToggle = document.querySelector(".menu-toggle");
    const mobileLink = document.querySelector(".navbar-menu");

    mobileToggle.addEventListener("click", function () {
        this.classList.toggle("is-active");
        mobileLink.classList.toggle("active");
    });

    mobileLink.addEventListener("click", function (e) {
        if (window.innerWidth <= 768 && e.target.tagName === "A") {
            mobileToggle.classList.remove("is-active");
            mobileLink.classList.remove("active");
        }
    });
    // Sign-up form submission
    document.getElementById('signupForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('signupUsername').value;
        const password = document.getElementById('signupPassword').value;

        fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('signupMessage').textContent = data.message;
        })
        .catch(error => {
            document.getElementById('signupMessage').textContent = 'An error occurred. Please try again.';
            console.error('Error:', error);
        });
    });

    // Sign-in form submission
    document.getElementById('signinForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('signinUsername').value;
        const password = document.getElementById('signinPassword').value;

        fetch('http://localhost:5000/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('signinMessage').textContent = data.message;
        })
        .catch(error => {
            document.getElementById('signinMessage').textContent = 'An error occurred. Please try again.';
            console.error('Error:', error);
        });
    });
    // Modal functionality
    const modals = {
        signin: document.getElementById('signinModal'),
        signup: document.getElementById('signupModal')
    };

    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            modals.signin.style.display = "none";
            modals.signup.style.display = "none";
        });
    });

    window.onclick = function (event) {
        if (event.target === modals.signin) {
            modals.signin.style.display = "none";
        } else if (event.target === modals.signup) {
            modals.signup.style.display = "none";
        }
    };

    document.getElementById('signinLink').addEventListener('click', function () {
        modals.signin.style.display = "block";
    });

    document.getElementById('signupLink').addEventListener('click', function () {
        modals.signup.style.display = "block";
    });
});
// Swiper initialization
new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll>150) {
            $(".navbar").css("background", "#222");
            $(".navbar").css("box-shadow", "rgba(0, 0, 0, 0.1) 0px 4px 12px");
        }
        else {
            $(".navbar").css("background","transparent");
            $(".navbar").css("box-shadow", "none");
        }
    })
});

// smooth scroll
var navbarHeight =  $(".navbar").outerHeight();
$(".navbar-menu a").click(function(e){
    var targetHerf = $(this).attr("href");
    $("html,body").animate({
        scrollTop: $(targetHerf).offset().top - navbarHeight
    }, 1000)
    e.preventDefault();
});

// navbar mobile version
const mobile = document.querySelector(".menu-toggle");
const mobileLink = document.querySelector(".navbar-menu");

mobile.addEventListener("click", function(){
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
})

mobileLink.addEventListener("click", function(){
    const menuBars = document.querySelector(".is-active");
    if(window.innerWidth <=768 && menuBars) {
        mobile.classList.toggle("is-active")
        mobileLink.classList.remove("active")
    }
})
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('signupMessage').textContent = data.message;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

document.getElementById('signinForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('signinUsername').value;
    const password = document.getElementById('signinPassword').value;

    fetch('http://localhost:5000/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('signinMessage').textContent = data.message;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});


// swiper
var swiper = new Swiper(".mySwiper",
{
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    slidesPerView:1,
    spaceBetween:10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        640:{
            slidesPerView: 2,
            spaceBetween:20,
        },
        768:{
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView:3,
            spaceBetween:50,
        }
    }
})