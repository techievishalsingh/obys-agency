function loadinganimation(){
    let zerotohundred=document.querySelector('#line1-part1 h5');
let count=0;


var tl=gsap.timeline();
tl.from("#loader .line h1",{
    y:150,
    stagger:0.2,
    duration:0.5,
    delay:0.5
} )
tl.from("#line1-part1 , .line h2",{
    opacity:0,
    onStart:function(){
        setInterval(function(){
            if(count <100){
                zerotohundred.innerHTML=count++;
            }
            else{
                zerotohundred.innerHTML=count;
            }
        },30)
    }
})

tl.to("#loader",{
    opacity:0,
    duration:0.4,
    delay:4,
    display:"none"
})
tl.from(".page1",{
    delay:0.2,
    y:1500,
    opacity:0,
    ease:"power9"
})

// t1.to("#loader",{
//     display:"none"
// })
tl.from(".hero h3",{
    y:120,
    stagger:0.2
})
}
loadinganimation();


function cursoranimation(){
    document.addEventListener('mousemove',function(moving){
        gsap.to(".crsr",{
            left:moving.x,
            top:moving.y
        })
    })
    
    Shery.makeMagnet("#nav-part2 h5");
}
cursoranimation();