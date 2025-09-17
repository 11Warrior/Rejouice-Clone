
(function () {
    gsap.registerPlugin(ScrollTrigger);


    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },

        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

})();

const tl = gsap.timeline();

tl.to(".herotxts", {
    height: 0,
    scrollTrigger: {
        // markers: true,
        trigger: '.page1',
        start: "top top",
        end: "top -110%",
        scrub: 4,
    }
}, "animate")


tl.to(".page2", {
    top: "130vh",
    scrollTrigger: {
        // markers: true,
        trigger: '.page1',
        start: "top -90%",
        end: "top -10%",
        scrub: 2,
    }
})

//loader animation
const main = document.querySelector(".main");
const textDiv = document.querySelectorAll(".texts .innerText");
const loader = document.querySelector(".loader");
const tlLoader = gsap.timeline();

tlLoader.to(main, {
    overflow: "hidden"
})
tlLoader.to(textDiv, {
    opacity: 1,
    duration: 2,
    stagger:{
        amount: 0.1
    }
})
tlLoader.to(textDiv, {
    opacity: 0,
    duration: 2,
    stagger: {
        amount: -0.3
    }
})

tlLoader.to(loader, {
    transform: "translateY(100%)",
    duration: 2,

})

tlLoader.to(loader, {
    display: "none"
})
tlLoader.to(main, {
    overflow: "initial"
})


//Marque animations
//to 150 animation;
const cardWrapper = document.querySelectorAll(".cardWrapperWithText");

cardWrapper.forEach(wrapper => {
    let numberEle = document.querySelector(".number");

    let val = { num: 75 };

    wrapper.addEventListener("mouseenter", () => {
        const tlT1 = gsap.timeline();

        tlT1.to(numberEle, {
            y: -10,
            opacity: 1,
            duration: 1.5,
        }, "anim")

        tlT1.to(val, {
            num: 150,
            duration: 1,
            roundProps: "num",
            onUpdate: () => {
                numberEle.textContent = val.num + "%"
            }
        }, "anim")
    });

    wrapper.addEventListener("mouseleave", () => {
        const tlT2 = gsap.timeline();
        tlT2.to(val, {
            num: 75,
            duration: 1.5,
            roundProps: "num",
            onUpdate: () => {
                numberEle.textContent = val.num + "%"
            }
        }, "anim")

        tlT2.to(numberEle, {
            y: 25,
            opacity: 0,
            duration: 1.5,
        }, "anim")
    });
})

const video = document.querySelector(".videoDivMarq video");
video.addEventListener("mouseenter", () => {
    video.play();
})

video.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
})



const video1 = document.querySelector(".page3-1 .video1");
const image1Div = document.querySelector(".imageContainer1");

const video2 = document.querySelector(".video2");
const image2Div = document.querySelector(".imageContainer2");

const video3 = document.querySelector(".video3");
const image3Div = document.querySelector(".imageContainer3");

// const logoWrapper1 = document.querySelector(".logoWrapper1");
// const logoWrapper2 = document.querySelector(".logoWrapper2");
// const logoWrapper3 = document.querySelector(".logoWrapper3");


image1Div.addEventListener("mouseenter", () => {
    video1.style.display = "block";
    image1Div.style.filter = "brightness(30%)";
    // logoWrapper1.style.opacity = 0,
    gsap.to(video1, {
        scale: 2,
        duration: 0.4
    })
})

image1Div.addEventListener("mousemove", function (dets) {

    gsap.to(video1, {
        x: dets.x + 5,
        y: dets.y + 5,
        duration: 1.2,
    })
})


image1Div.addEventListener("mouseleave", function () {
    gsap.to(video1, {
        scale: 0.1,
        duration: 0.4,
        display: "none"
    }),
        // logoWrapper1.style.opacity = 1,
        image1Div.style.filter = "brightness(100%)";
})


image2Div.addEventListener("mouseenter", () => {
    video2.style.display = "block";
    image2Div.style.filter = "brightness(30%)";
    gsap.to(video2, {
        scale: 2,
        duration: 0.4
    })
})

image2Div.addEventListener("mousemove", function (dets) {

    gsap.to(video2, {
        x: dets.x - 5,
        y: dets.y - 5,
        duration: 1.2,
    })
})


image2Div.addEventListener("mouseleave", function () {
    gsap.to(video2, {
        scale: 0.1,
        duration: 0.4,
        display: "none"
    })
    image2Div.style.filter = "brightness(100%)";
})


image3Div.addEventListener("mouseenter", () => {
    video3.style.display = "block";
    image3Div.style.filter = "brightness(30%)";
    gsap.to(video3, {
        scale: 2,
        duration: 0.4
    })
})

image3Div.addEventListener("mousemove", function (dets) {

    gsap.to(video3, {
        x: dets.x - 1000,
        y: dets.y,
        duration: 1.2,
    })
})


image3Div.addEventListener("mouseleave", function () {
    gsap.to(video3, {
        scale: 0.1,
        duration: 0.4,
        display: "none"
    })
    image3Div.style.filter = "brightness(100%)";
})

gsap.to(".videoWrapper video", {
    scale: 1.3,

    scrollTrigger: {
        // markers: true,
        trigger: ".page5",
        start: "top -10%",
        end: "top -60%",
        scrub: 2
    }
})

//last text get to know us animation
const innerText = document.querySelector(".innerTxt");
const text1 = document.querySelectorAll(".txt1 span");
const text2 = document.querySelectorAll(".txt2 span");

const tlvid = gsap.timeline({ paused: true });
tlvid.to(text1, {
    transform: "translateY(-100%)",
    stagger: {
        amount: 0.1
    },
    duration: 0.2,
})

tlvid.to(text2, {
    transform: "translateY(-100%)",
    stagger: {
        amount: 0.1
    },
    duration: 0.2,
})

innerText.addEventListener("mouseenter", () => {
    innerText.style.cursor = "pointer";
    tlvid.play();
})

innerText.addEventListener("mouseleave", () => {
    innerText.style.cursor = "default";
    tlvid.reverse();

})

//animation for page5 above footer
gsap.to(".page5", {
    height: "250vh",
    scrollTrigger: {
        // markers: true,
        scrub: 2,
        duration: 0.2,
        trigger: ".page5",
        start: "top -210%",
        end: "top -250%"
    }
})