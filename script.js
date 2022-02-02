const menubar = document.querySelector("#menu-bars");
const header = document.querySelector("header")


menubar.onclick = () =>{
    menubar.classList.toggle("fa-times");
    header.classList.toggle("active");
}
window.onscroll = () =>{
    menubar.classList.remove("fa-times");
    header.classList.remove("active");
}
 const cursor1 = document.querySelector(".cursor-1");
 const cursor2 = document.querySelector(".cursor-2");

 window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + "px";
    cursor1.style.left = e.pageX + "px";
    cursor2.style.top = e.pageY + "px";
    cursor2.style.left = e.pageX + "px";
 }
let links = document.querySelectorAll('a');
  links.forEach(link=>{
      link.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
      }
      link.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
      }
  })
  
  let heart = document.querySelectorAll("#heart");
  heart.forEach(h =>{
      h.onclick = (e) =>{
      e.preventDefault();
      h.style.color = "pink"
      }
  })


  let sections = document.querySelectorAll("section");
  let nav_links = document.querySelectorAll("header nav a");
  
  window.onscroll = () =>{

    sections.forEach(section =>{
      
        let top = window.scrollY;
        let offset = section.offsetTop-150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if(top >= offset && top< offset + height){
            nav_links.forEach(link=>{
                link.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
            })
        }

    })
  }

  let charArray = ["Zayar Win","a Front-end Developer","a Web-Designer","a Design Coder"];
  const typeText = document.querySelector(".typed");
  let typeDelay = 500;
  let eraseDelay =200;
  let newTextDelay = 1000;
  let charIndex = 0;
  let arrayIndex = 0;

  function type(){
    if(charIndex < charArray[arrayIndex].length){
        typeText.textContent += charArray[arrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type,typeDelay);
    }else{
        setTimeout(earse,newTextDelay);
    }
  }

  function earse(){
      if(charIndex > 0){
          typeText.textContent = charArray[arrayIndex].substring(0,charIndex-1);
          charIndex--;
          setTimeout(earse,eraseDelay)
      }else{
          arrayIndex++;
          if(arrayIndex >= charArray.length) arrayIndex = 0;
          setTimeout(type,newTextDelay)
      }
  }





  document.addEventListener("DOMContentLoaded",function(){
      setTimeout(type,newTextDelay);
  })

  AOS.init({duration:550});
