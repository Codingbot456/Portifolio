//jquery//

$(document).ready(function(){
  $(".togller").click(function(){
    $(".toggler-items").toggle();
  });

  $("#show").click(function(){
    $("p").show();
  });
});



$(document).ready(function(){
$("#all").click(function(){
  $(".web,#gallery,#graphics,h3,p1").show();
  
});
});



$(document).ready(function(){
$("#web").click(function(){
  $(".web").show();
  $("#gallery,#graphics,h3,p1").hide();
  
});
});



$(document).ready(function(){
  $("#graph").click(function(){
    $("#graphics").show();
    $("#gallery,.web,h3,p1").hide();
    
  });
  });

  $(document).ready(function(){
    $("#gall").click(function(){
      $("#gallery").show();
      $("#graphics,.web,h3,p1").hide();
      
    });
    });


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 45, 30000);
camera.position.set(-900, -200, -900);

const geometry = new THREE.BoxGeometry(10000, 10000, 10000);
const material = [
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('img/texture1.jpg'), side: THREE.DoubleSide }),
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('img/texture1.jpg'), side: THREE.DoubleSide }),
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('img/texture1.jpg'), side: THREE.DoubleSide }),
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('img/texture1.jpg'), side: THREE.DoubleSide }),
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('img/texture1.jpg'), side: THREE.DoubleSide }),
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('img/texture1.jpg'), side: THREE.DoubleSide }),
];

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const sphereRadius = 100; // Reduced sphere radius
let gap = 300; // Gap between spheres

const geometry1 = new THREE.SphereGeometry(90, 90); // Adjusted sphere geometry
const material1 = new THREE.MeshBasicMaterial({ color: "white", wireframe: true });

// Create an array to hold cubes
const cubes = [];

// Create seven cubes with different positions


const controls = new THREE.OrbitControls(camera);
controls.enableZoom = true;
controls.minDistance = 500;
controls.maxDistance = 1500;

// GSAP animations for each cube
// Function to generate random color
function randomColor() {
  return Math.random();
}

// Animation for each cube
cubes.forEach((cube, index) => {
  // Animation for position (up and down movement)
  gsap.to(cube.position, {
      duration: 2,
      y: -150,
      repeat: -1,
      yoyo: true,
      delay: index * 0.5,
      ease: "power1.inOut"
  });

  // Animation for color change
  gsap.to(cube.material.color, {
      r: randomColor(), // Randomizing red component
      g: randomColor(), // Randomizing green component
      b: randomColor(), // Randomizing blue component
      duration: 1,
      repeat: -1,
      yoyo: true,
      delay: index * 0.5
  });
});


const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('threejs-canvas') });
renderer.setSize(window.innerWidth, window.innerHeight);

window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

function animate() {
    renderer.render(scene, camera);
}

controls.addEventListener('change', animate);

function animation() {
    requestAnimationFrame(animation);
    
    // Rotate the main cube based on constants
    cube.rotation.x += 0.001; // Constant rotation around x-axis
    cube.rotation.y += 0.001; // Constant rotation around y-axis
    cube.rotation.z += 0.001; // Constant rotation around z-axis
    
    // Rotate each cube in the array around its x-axis
    cubes.forEach(cube => {
        cube.rotation.x += 0.01;
    });

    renderer.render(scene, camera);
}

// Add an event listener for the scroll event
window.addEventListener('scroll', onScroll);

// Define a function to handle the scroll event
function onScroll() {
    // Get the scroll position
    const scrollY = window.scrollY;

    // Adjust rotation of the main cube based on the scroll position
    cube.rotation.x = scrollY * 0.0001;
    cube.rotation.y = scrollY * 0.0001;
    cube.rotation.z = scrollY * 0.0001;

    // Zoom in and out of the spheres during scroll
    const zoomFactor = 1 + Math.sin(scrollY * 0.01); // Adjust zoom factor as needed
    cubes.forEach(cube => {
        cube.scale.set(zoomFactor, zoomFactor, zoomFactor);
    });

    // Increase the gap between the spheres
    gap = 300 + scrollY * 0.1; // Adjust gap factor as needed
    cubes.forEach((cube, index) => {
        gsap.to(cube.position, {
            x: index * gap - 450,
            duration: 0.5 // Adjust animation duration as needed
        });
    });

    // Change the color of the spheres three times as you scroll down
    const colorChangeStep = window.innerHeight / 3;
    const currentColorStep = Math.floor(scrollY / colorChangeStep);
    const currentColor = new THREE.Color();
   
    cubes.forEach(cube => {
        cube.material.color.copy(currentColor);
    });
}

// Call the animation function
animation();
//trigger animations//
gsap.registerPlugin(ScrollTrigger);


gsap.to(".abouts",{
   x:0,
    duration:2,
    rotationX:'0',
    scaleY:'1',
    scrollTrigger:{
    trigger:'.abouts',
    start:"top 100%", //you can also use percentages or keywords//
    //end:"center 30%",
    markers:false,
    toggleClass:"red",//style background using css//
    toggleActions:" restart none none none",//default  play, none,none,none// // onEnter onLeave  onEnterBack onLeaveBack//respectively//  //play-restart, onleave-reverse,pause,
    scrub:0, 
    rotationX:180,
    },

    
})

gsap.to(".one", {
  duration: 2,
  scrollTrigger: {
    trigger: '.one',
    start: "top 30%",
    pin: true, // Add pin property to enable pinning
    //end: "center 30%",
    markers: false,
    toggleClass: "red",
    toggleActions: "restart none none none",
    scrub: 3,
  }
});



//scroll reveal animation//

ScrollReveal().reveal(".three-1", {
  duration: 1000,
  scale: 0.85,
  opacity:0.5,
  reset:true,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
});




ScrollReveal().reveal(".serv1 ,", {
  duration: 1000,

  move:0,
  reset:true,
  easing: "linear",
  scale:0.5,
});


//contact intergration//
function sendMail(){
  var params={

name:document.getElementById("name").value,
email:document.getElementById("email").value,
message:document.getElementById("message").value

};
const serviceID="service_8bmech8"
const templateID="template_x90lcsn"

emailjs.send(serviceID,templateID,params)
  .then(
res=>{
  document.getElementById("name").value="";
  document.getElementById("email").value="";
  document.getElementById("message").value="";
  console.log(res);
  alert("you message was sent succesfully")
})
.catch((err)=>console.log("err"))
}



document.querySelectorAll('.portfolio-projects').forEach((portfolio, portfolioIndex) => {
  const slides = portfolio.querySelectorAll('.slide');
  const sliderWrapper = portfolio.querySelector('.slider-wrapper');
  const prevButton = portfolio.querySelector('.prev');
  const nextButton = portfolio.querySelector('.next');
  const dots = portfolio.querySelectorAll('.dot');

  let currentIndex = 0;

  function showSlide(index) {
      if (index >= slides.length) {
          currentIndex = 0;
      } else if (index < 0) {
          currentIndex = slides.length - 1;
      } else {
          currentIndex = index;
      }
      sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
      updateDots();
  }

  function updateDots() {
      dots.forEach(dot => dot.classList.remove('active'));
      if (dots[currentIndex]) dots[currentIndex].classList.add('active');
  }

  prevButton.addEventListener('click', () => {
      showSlide(currentIndex - 1);
  });

  nextButton.addEventListener('click', () => {
      showSlide(currentIndex + 1);
  });

  dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
          const slideIndex = e.target.getAttribute('data-slide');
          showSlide(parseInt(slideIndex));
      });
  });

  showSlide(currentIndex);
});
