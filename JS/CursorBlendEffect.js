const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",(e) => {
      cursor.style.cssText ={
        right:${e.x=80}pageXOffset
        left:${e.y=80}pageXOffset
      }
           
  
}); 