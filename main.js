function cursoranimation(){
    // document.addEventListener('mousemove',function(moving){
    //     gsap.to(".crsr",{
    //         left:moving.x,
    //         top:moving.y
    //     })
    // })
            // OR
    Shery.mouseFollower({
        //Parameters are optional.
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });  
    Shery.makeMagnet("#nav-part2 h5");
    
    var videocontainer=document.querySelector("#video-container");
    var onclickvideocursor=document.querySelector("#video-container #video-cursor");
    var videoplay=document.querySelector("#video-container video");
    videocontainer.addEventListener("mouseenter",function(){
        videocontainer.addEventListener('mousemove',function(dets){
            gsap.to(".mousefollower",{
                display:"none"
            });
            gsap.to("#video-cursor",{
                left:dets.x -550,
                y:dets.y -140
            });
        });
    });
    videocontainer.addEventListener("mouseleave",function(){
        gsap.to(".mousefollower",{
            display:"block"
        });
        gsap.to("video-cursor",{
            left:"70%",
            top: "-15%"
        });
    });
    let flag=0;
    function play(){
        videoplay.play();
        videoplay.style.opacity=1;
        onclickvideocursor.style.scale=0.5;
        onclickvideocursor.innerHTML=`<i class="ri-pause-mini-line"></i>`;
    }
    function pause(){
        videoplay.pause();
        videoplay.style.opacity=0;
        onclickvideocursor.style.scale=1;
        onclickvideocursor.innerHTML=`<i class="ri-play-fill"></i>`;
    }
    [videoplay, onclickvideocursor].forEach(function(elem){
        elem.addEventListener("click",function(){
            if(flag==0){
                play();
                flag=1;
            }
            else{
                pause();
                flag=0;
            }
           
    
        })
    })
    //above method binds the two element into a single event listener
    // onclickvideocursor.addEventListener("click",function(){
    //     if(flag==0){
    //         play();
    //         flag=1;
    //     }
    //     else{
    //         pause();
    //         flag=0;
    //     }

    // })

    // for flag in page1
    var flag_img=document.querySelector("#flag");
    var hero3=document.querySelector("#hero3");
    document.addEventListener("mousemove",function(dets){
        gsap.to("#flag",{
            x:dets.x -130,
            y:dets.y -210,               
            // opacity:1,
        })
    })
    
    hero3.addEventListener("mouseenter",function(){
        gsap.to("#flag",{
            opacity:1,
        })
            // OR
        // flag_img.style.opacity=1;
    })
    hero3.addEventListener("mouseleave",function(){
        gsap.to("#flag",{
            opacity:0
        })
        //    OR
        // flag_img.style.opacity=0;
    })


}
cursoranimation();
function locomotivescrolltrigger(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotivescrolltrigger();


function loadinganimation(){
    let zerotohundred=document.querySelector('#line1-part1 h5');
    let count=0;


var tl=gsap.timeline();
tl.to("#main",{
    display:"none"
    
})
tl.to("#loader",{
    display:"block"
})
tl.from("#loader .line h1",{
    y:150,
    stagger:0.2,
    duration:0.5,
    delay:0.5,
    overflow:"hidden"
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
    duration:0.4,
    delay:4,
    // zindex:-999,
    opacity:0,
    display:"none",
})
tl.to("#main",{
    display:"block",
    zindex:12,
})
// tl.from("#main",{
//     delay:0.2,
//     display:"block",
//     y:1500,
//     opacity:0,
//     ease:"power9"
// })


// t1.to("#loader",{
//     display:"none",
//     // zindex:-2
// })
// tl.from("#page1 .hero h3",{
//     y:120,
//     stagger:0.2
// })
// tl.from("#hero1", "#page2",{
//     opacity:0,
// },"-=1.2")
}
loadinganimation();

function sheryanimation(){
    Shery.imageEffect(".image-div", {
        style: 5,
        
        // debug:true,
        config: {"a":{"value":2,"range":[0,30]},"b":{"value":-1,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.893549364021805},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.49,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.92,"range":[0,10]},"metaball":{"value":0.43,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.29,"range":[0,2]},"noise_scale":{"value":11.45,"range":[0,100]}},
        gooey: true
        // debug:true
        
      });
}
sheryanimation();

function textillateanimationtext(){
    var animetext=document.querySelector("#animetextfooter");
    var count=0;
    animetext.addEventListener("mouseenter",function(){
        
        if(count==0){
            gsap.from("#animetextfooter",{
            
                onStart:function(){
                    
                    $('#animetextfooter').textillate({ in: { effect: 'fadeInLeft' } })
                }
            })
            count=1;
        }
        
        
    })
    animetext.addEventListener("mouseleave",function(){
        count=0;
    })
}
textillateanimationtext();