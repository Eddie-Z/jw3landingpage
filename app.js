function splitScroll(){
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration:'100%',
        triggerElement:'.about-title',
        triggerHook:0
    })
   .setPin('.about-title').addTo(controller);
}
splitScroll();

window.addEventListener('scroll', ()=>{
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    var movieNode = document.getElementById('video');
    var sound = document.getElementById('sounds');
   

    if(Math.ceil(scrolled)===scrollable){
        sound.remove();
        movieNode.play();
        
    }

});
console.log("hello")