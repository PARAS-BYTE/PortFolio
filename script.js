let some= document.querySelector(".circle")
document.querySelector("body").addEventListener("mousemove",(on)=>{
    
    let some= document.querySelector(".circle")
    some.style.top=`${on.clientY}px`;
    // console.log(some)
    let newf =document.querySelector(".circle")
    newf.style.left=`${on.clientX}px`;
})
document.querySelector("nav").addEventListener("mousemove",(val)=>{
    document.querySelector("body").style.cursor="pointer";
    some.style.display ="none"
    
})
document.querySelector("nav").addEventListener("mouseleave",(val)=>{
    document.querySelector("body").style.cursor="none";
    some.style.display ="flex"
    
})
let tart= document.querySelector(".overlay .one .p1 span")
document.querySelector(".overlay .one .p1").addEventListener("mousemove",()=>{
    gsap.to(".overlay .one .p1 span",{
        y :"-50%",
        // duration : 2,
        ease : "power2.out"
    })

})
document.querySelector(".overlay .one .p1").addEventListener("mouseleave",()=>{
    gsap.to(".overlay .one .p1 span",{
        y :"0%",
    })
    
})
window.addEventListener("load",()=>{
    document.querySelector("body").style.overflow="hidden"
    let va= document.querySelector(".progress-bar")
    let isn =0;
    
    let int = setInterval(()=>{
        isn+=25;
        va.style.width= `${isn%150}%`
        if(isn>100){
            clearInterval(int)
            document.querySelector("body").style.overflow="auto"
            document.querySelector(".overlay").style.display="none"
        }
        
    },600)
})

let i =document.querySelector(".page1 .box .anima .two p");
document.querySelector(".page1 .box .anima .one p").addEventListener("mousemove",()=>{
    gsap.to("#img1",{
      x:-200,
      y:150,  
    
    })
    gsap.to("#img2",{
        x:-400,
        y:50,  
       
    })
    gsap.to("#img3",{
        x:-400,
        y:-150,  
       
        
    })
    gsap.to("#img4",{
        x:-200,
        y:-250,  
        
        
    })

    gsap.to(i,{
        y : -235,
        

    })
    console.log("in")
})
document.querySelector(".page1 .box .anima .one").addEventListener("mouseleave",()=>{
    
        console.log("out")
        gsap.to("#img1",{
            x:0,
            y:0,  
          })
          gsap.to("#img2",{
            x:0,
            y:0,  
          })
          gsap.to("#img3",{
            x:0,
            y:0,  
          })
          gsap.to("#img4",{
            x:0,
            y:0,  
          })

          gsap.to(i,{
              y : -210,
          })
    
})
let why =document.querySelectorAll(".para")
document.querySelectorAll(".des").forEach((val,ind)=>{
    let i =1;
    if(ind%2!=0){
        i=-1
    }
    val.addEventListener("click",(some)=>{
        let str=val.innerHTML
        function call(){
            let some=val.parentNode;
            let hi =gsap.timeline();
            some.style.display="none"
            setTimeout(()=>{
                hi.to(why[i],{
                    y :-30*i,
                    duration :0.1,
                    opacity: 0,
                })
                hi.to(why[ind],{
                    y :10*i,
                    duration :1.2,
                    opacity :1,
                    ease : "power2.in"
                })
            },200)
            console.log(some.parentNode.nextSibling)
        }
        str ="Loading"
        let id =setInterval(()=>{
            str=str.slice(0,str.length-1)
            val.innerHTML=str;
            if(str.length==0){
                clearInterval(id)
                call()
            }
        },300)
        
    })
})
gsap.to("#main1 #some .hi",{
    transform : "translateX(-200%)",
        duration : 2,
    scrollTrigger : {
         trigger : "#main1",
        scroller : "body",
        
        start : "top 0%",
        end : "top -300%",
        scrub : 6,
        pin : true,

    }
})
let root=document.documentElement;
// console.log(root)



document.querySelector("input").addEventListener("click",(val)=>{
    let h=getComputedStyle(root).getPropertyValue('--main-color');
    if(h=="black"){
        
        root.style.setProperty('--main-color',"white")
        root.style.setProperty('--one-color',"white")
        root.style.setProperty('--second-color',"black")
        root.style.setProperty('--mid-color',"grey")
        root.style.setProperty('--third-color',"#D9D9D9")
    }else{
    
        root.style.setProperty('--main-color',"black")
        root.style.setProperty('--one-color',"#111")
        root.style.setProperty('--second-color',"#D9D9D9")
        root.style.setProperty('--mid-color',"#808080")
        root.style.setProperty('--third-color',"#87CEEB")

    }
})
function scrollToTop() {
    window.scrollTo(0, 0);
}

// Add an event listener to call the function when the page loads
window.addEventListener('load', scrollToTop);
document.querySelectorAll("#git").forEach((val)=>{
    val.addEventListener("click",()=>{
        window.location.href="https://github.com/PARAS-BYTE"
    })
})