function menuToggle() {
    let menuButton = document.querySelector('.menuButton');
    let closeButton = document.querySelector('.closeButton');
    let menuDiv = document.querySelector('#menuDiv');

    menuButton.addEventListener('click', () => {
        gsap.to(menuDiv, {
            duration: 0.5,
            width: "80%",
            ease: "power2.inOut",
            paddingLeft: "10%"
        });
        gsap.to(closeButton, {
            display: "block",
            duration: 0.5,
            opacity: 1,
        })
    });

    closeButton.addEventListener('click', () => {
        gsap.to(menuDiv, {
            duration: 0.5,
            width: "0",
            ease: "power2.inOut",
            paddingLeft: "0"
        });
        gsap.to(closeButton, {
            display: "none",
            duration: 0.5,
            opacity: 0
        })
    });
};

let startupPage = document.querySelector('.startupPage');
let startupDiv = document.querySelectorAll('.startupDiv');
let delayTimer = 0;
let svg = document.querySelector('.startupPage svg');

startupDiv.forEach(element => {
    gsap.to(element, {
        duration: 0.5,
        top: "-200%",
        delay: 3 + delayTimer,
    });
    delayTimer += 0.1;
});

gsap.to(svg, {
    duration: 0.5,
    opacity: 0,
    delay: 3,
})

gsap.to(startupPage, {
    top: "-100%",
    delay: 3.5,
});



function animateRectangles() {
    let tl = gsap.timeline({
    delay: 4
    })

    let rectangle1 = document.querySelector('.rectWrapper1');
    let rectangle2 = document.querySelector('.rectWrapper2');
    let rectangle3 = document.querySelector('.rectWrapper3');
    let rectangle4 = document.querySelector('.rectWrapper4');
    tl.from(rectangle1, {
        right: "-500%",
        duration: 0.5,
        ease: "elastic.out(0.8,0.75)",

    });
    tl.from(rectangle2, {
        bottom: "-500%",
        duration: 0.5,
        ease: "elastic.out(0.8,0.75)",

    });
    tl.from(rectangle3, {
        left: "-500%",
        duration: 0.5,
        ease: "elastic.out(0.8,0.75)",

    });
    tl.from(rectangle4, {
        top: "-500%",
        duration: 0.5,
        ease: "elastic.out(0.8,0.75)",

    });

};

function animateRestHero() {
    let rect = document.querySelectorAll('.rect');

    gsap.to(rect, {
        top: "-10px",
        left: "-7px",
        duration: 0.5,
        delay: 6
    });

    gsap.from("header", {
        duration: 0.5,
        ease: "power2.inOut",
        y: "-100",
        delay: 6
    })
    gsap.from(".ctaButton1", {
        duration: 0.5,
        ease: "power2.inOut",
        y: "300",
        delay: 6
    });
}

function productAnimation() {
    let productWrapper = document.querySelectorAll('.productWrapper');
    let index = 0;
    
    productWrapper.forEach(element => {
        gsap.from(element, {
            top: "200%",
            duration: 0.8,
            scrollTrigger: {
                trigger: element,
                start: "-300% top",
                end: "bottom bottom",
            }
            });
    });
};

productAnimation();
menuToggle();
animateRectangles();
animateRestHero();

