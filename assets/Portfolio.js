const h1 = document.querySelector("h1");
const txt = h1.textContent;
const txtsp = txt.split("");
var clutter = "";
txtsp.forEach((e)=>{
    clutter += `<span>${e}</span>`;
})

h1.innerHTML = clutter; // This line was the issue

gsap.from("h1 span",
    {
        x: -100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.4,
        ease: "back.out(1.7)",
        delay: 0.1
    })

gsap.fromTo("nav .name", 
    { y: -100, opacity: 0 },  // from
    { y: 0, opacity: 1, duration: 0.4, ease: "back.out(1.7)", delay: 0.1 }  // to
)

gsap.fromTo(".links a", 
    { y: 50, opacity: 0 },  // from
    { y: 0, opacity: 1, stagger: 0.1, duration: 0.4, ease: "back.out(1.7)", delay: 0.1 }  // to
)

gsap.from([".profile svg path",".profile img"],{
    opacity: 0,
    duration: 1,
    ease: "none",

})

window.addEventListener("wheel", function(e){
    if (e.deltaY>0){
        gsap.to(".marque", {
            x: "-100%",
            duration: 5,
            ease: "none",
            repeat: -1,
        });
    }
    else{
        gsap.to(".marque", {
            x: "100%",
            duration: 15,
            ease: "none",
            repeat: -1,
        });
    }
})



// document.querySelectorAll(".project").forEach(project => {
//       const overlay = project.querySelector(".overlay");
//       const link = project.querySelector("a");

//       project.addEventListener("mouseenter", () => {
//         gsap.timeline()
//           .to(overlay, { bottom: 0, duration: 0.3, ease: "power2.out" })
//           .to(overlay, { opacity: 0.3, duration: 0.1 }, "+=0.05")
//           .to(overlay, { opacity: 1, duration: 0.3 })
//           .to(overlay, { opacity: 0.6, duration: 0.1 })
//           .to(overlay, { opacity: 0, duration: 0.3 });

//         gsap.to(link, { color: "#000000ff", duration: 0.3 });
//       });

//       project.addEventListener("mouseleave", () => {
//         gsap.timeline()
//           .to(overlay, { bottom: "-100%", duration: 0.4, ease: "power2.in" });
//         gsap.to(link, { color: "#000", duration: 0.3 });
//       });
//     });

 const projects = document.querySelectorAll(".project");
    const floatingImg = document.querySelector(".floating-img");

    // Track mouse movement
    document.addEventListener("mousemove", (e) => {
      gsap.to(floatingImg, {
        x: e.clientX - floatingImg.offsetWidth / 2,
        y: e.clientY - floatingImg.offsetHeight / 2,
        duration: 0.4,
        ease: "power3.out"
      });
    });

    projects.forEach(project => {
      project.addEventListener("mouseenter", () => {
        const imgSrc = project.getAttribute("data-img");
        floatingImg.src = imgSrc;
        gsap.to(floatingImg, { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" });
      });

      project.addEventListener("mouseleave", () => {
        gsap.to(floatingImg, { opacity: 0, scale: 0.8, duration: 0.3, ease: "power2.in" });
      });
});

const section = document.getElementById("bars");

const skill = [
    {name: "HTML", per:90, color:"linear-gradient(90deg,rgba(255, 176, 59, 1) 0%, rgba(242, 46, 46, 1) 45%, rgba(245, 98, 98, 1) 67%, rgba(255, 255, 255, 1) 100%);" },
    {name: "CSS", per:80, color:"linear-gradient(90deg,rgba(25, 33, 255, 1) 0%, rgba(46, 164, 242, 1) 45%, rgba(46, 162, 219, 1) 67%, rgba(158, 236, 255, 0.99) 100%);" },
    {name: "Java Script", per:70, color:"red" },
    {name: "React JS", per:70, color:"red" },
    {name: "Node JS", per:60, color:"red" },
]

skill.forEach(skill => {
  const div = document.createElement("div");
  div.classList.add("base"); // reuse same style

  div.innerHTML = `
    <p>${skill.name}</p>
   <div class="per" style="width:${skill.per}%; background:${skill.color}; "data-percent="${skill.per}%">
      <div class="bubble" >${skill.per}%</div>
   </div>
    
  `;

  section.appendChild(div);
});

gsap.fromTo(".base .per",
    { width: "0%" },  // from
    { width: (i, target) => target.getAttribute("data-percent"), duration: 1.5, ease: "power2.out", delay: 0.1,
  });
 // to
gsap.to(".bubble", {
  transform: "scale(-1.03)",
  duration: 0.1,
  yoyo: true,
  repeat: 1,
  ease: "power1.inOut",
  stagger: 0.05,
  delay: 1.5
});

gsap.registerPlugin(ScrollTrigger);

const scrolling = document.querySelector('#scrolling');
scrolling.innerHTML += scrolling.innerHTML;
scrolling.innerHTML += scrolling.innerHTML;

const tl = gsap.timeline({ repeat: -1 });
tl.to("#scrolling", {
  xPercent: -100,
  ease: "none",
  duration: 80,
});

// ------------------------------------------------------------------------- THREE.js part ------------------------------------------------------------------------ //


