let images = document.querySelectorAll('#boxtech img');

gsap.fromTo(images, 
    { opacity: 0, y: 50 }, 
    { opacity: 1, y: 0, duration: 1, stagger: 0.2 },
);

images.forEach(img => {
    img.addEventListener('mouseover', () => {
        gsap.to(img, { duration: 0.5, scale: 1.2, rotation: 10, ease: "power1.inOut" });
    });

    img.addEventListener('mouseout', () => {
        gsap.to(img, { duration: 0.5, scale: 1, rotation: 0, ease: "power1.inOut" });
    });
});

// gsap.to("#box", {
//     rotation: 360,
//     duration : 2
// });