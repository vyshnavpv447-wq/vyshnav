document.addEventListener("DOMContentLoaded", function () {
    let backgrounds=document.querySelectorAll(".fading-images")
    let headings=document.querySelectorAll(".fading-heading")
    let imageIndex=0
    function changeBackground(){
      backgrounds[imageIndex].classList.remove("showing");
      headings[imageIndex].classList.remove("show");
      imageIndex++
      if(imageIndex>=backgrounds.length){
        imageIndex=0
      }
      backgrounds[imageIndex].classList.add("showing")
      headings[imageIndex].classList.add("show")
    }
    setInterval(changeBackground,3000)
    
  })
  document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { 
    navbar.classList.add("lazy-nav")
  } else {
    navbar.classList.remove("lazy-nav")
  }
});

  })
  
  document.addEventListener("DOMContentLoaded", function () {
    function callbackFunction(enteries){
        enteries.forEach(element => {
          if(element.isIntersecting){
            if(element.target.id==="lazy-1"){
              element.target.classList.add('lazy')
              
            }
            if(element.target.id==="lazy-2"){
              element.target.classList.add('lazy')
            }
            if(element.target.id==="lazy-3"){
              element.target.classList.add('lazy')
            }
            if(element.target.id==="lazy-4"){
              element.target.classList.add('lazyload')
            }
            if(element.target.id==="lazy-5"){
              element.target.classList.add('lazy')
            }
            if(element.target.id==="lazy-6"){
              element.target.classList.add('lazy')
              console.log(element.target.id)
            }
            if(element.target.id==="lazy-7"){
              element.target.classList.add('lazy')
            }
          }
        });
      }
      const options={
        rootMargin:"0px",
        threshold:0.1,
      } 
    const firstsection=document.getElementById("lazy-1")
    const secondsection=document.getElementById("lazy-2")
    const thirdsection=document.getElementById("lazy-3")
    const fourthsection=document.getElementById("lazy-4")
    const fifthsection=document.getElementById("lazy-5")
    const sixthsection=document.getElementById("lazy-6")
    const seventhsection=document.getElementById("lazy-7")
    const observer = new IntersectionObserver(callbackFunction,options)
    observer.observe(firstsection)
    observer.observe(secondsection)
    observer.observe(thirdsection)
    observer.observe(fourthsection)
    observer.observe(fifthsection)
    observer.observe(sixthsection)
    observer.observe(seventhsection)
  
   
  })


  document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

    let lastScrollY = window.scrollY;
    let scroll=770
    window.addEventListener('scroll', () => {
      const navbar = document.getElementById('nav');
      
      if(window.scrollY>100){
        if (window.scrollY > lastScrollY) {
          // Scrolling down
          navbar.classList.add('hidden');
        } else {
          // Scrolling up
          navbar.classList.remove('hidden');
        }
      }
      
      lastScrollY = window.screenY;
    });
  })
  document.addEventListener("DOMContentLoaded", function () {
    const imageWrapper = document.querySelector('.image-wrapper')
    const imageItems = document.querySelectorAll('.image-wrapper > *')
    const imageLength = imageItems.length
    const perView =3
    let totalScroll = 0
    const delay = 5000
    
    imageWrapper.style.setProperty('--per-view', perView)
    for(let i = 0; i < perView; i++) {
      imageWrapper.insertAdjacentHTML('beforeend', imageItems[i].outerHTML)
    }
    
    let autoScroll = setInterval(scrolling, delay)
    
    function scrolling() {
      totalScroll++
      if(totalScroll == imageLength + 1) {
        clearInterval(autoScroll)
        totalScroll = 1
        imageWrapper.style.transition = '3s'
        imageWrapper.style.left = '0'
        autoScroll = setInterval(scrolling, delay)
      }
      const widthEl = document.querySelector('.image-wrapper > :first-child').offsetWidth + 24
      imageWrapper.style.left = `-${totalScroll * widthEl}px`
      imageWrapper.style.transition = '3s'
    }
  })

  document.addEventListener("DOMContentLoaded", function () {
    
  })

  document.addEventListener("DOMContentLoaded", function () {
    function callbackFunction(enteries){
        enteries.forEach(element => {
          if(element.isIntersecting){
            let valueDisplays=document.querySelectorAll(".num")
            let interval=3000;
            valueDisplays.forEach((valueDisplay)=>{
              let startValue=0;
              let endValue=parseInt(valueDisplay.getAttribute("data-val"));
              let duration=Math.floor(interval/endValue);
              let counter = setInterval(function(){
                startValue += 1;
                valueDisplay.textContent=  startValue;
                if(startValue===endValue){
                  clearInterval(counter)
        
                }
              },duration)
            })
            observer.unobserve(firstsection)
          }
        });
      }
      const options={
        rootMargin:"0px",
        threshold:0.5,
      } 
    const firstsection=document.getElementById("lazy-js")
    const observer = new IntersectionObserver(callbackFunction,options)
    observer.observe(firstsection)
   
  })