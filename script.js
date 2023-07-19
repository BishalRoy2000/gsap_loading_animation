// Animated navbar
let tl=gsap.timeline();
tl.from("#nav img,#nav button,#nav h4,#nav h5",{
    y:-100,
    duration:0.7,
    delay:0.5,
    opacity:0,
    stagger:0.2
})
// Animated h1 tags
tl.from("#main h1",{
    y:100,
    opacity:0,
    stagger:0.3
})
// Animated images
tl.from("#top-img,#bottom-img",{
    scale:0,
    opacity:0,
})
gsap.from("#left-img",{
    x:-100,
    opacity:0,
    delay:3.8
})
gsap.from("#right-img",{
    x:100,
    opacity:0,
    delay:3.8
})
// Scroll Down animation
gsap.from("h6",{
    opacity:0,
    scale:0,
    delay:3.8
})
gsap.to("h6",{
    y:20,
    repeat:-1,
    duration:0.8,
    yoyo:true
})