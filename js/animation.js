export function containerAnime(){
    anime({
        
        targets: ".container",
    
        height: '500px',
        duration: 2000,
        delay: 250,
        
    });
}    
anime({       
    targets: ".img img",
    height: '250px',
    duration: 1000,
    delay: 250,
    translateY: -10,
    rotate: {
        value: 720,
        duration: 1000,
        easing: 'easeInOutSine',
    },
    scale: {
        //value: 1,
        duration: 100,
        delay: 800,
        easing: 'easeInOutQuart'
    },
});

export function animetQuestionImg(){
    anime({       
        targets: ".img-question img",
        height: '230px',
        duration: 1000,
        delay: 250,
        rotate: {
            value: 720,
            duration: 1000,
            easing: 'easeInOutSine',
        },
        scale: {
            duration: 100,
            delay: 800,
            easing: 'easeInOutQuart'
        },
        
    });
}

export function animetNumImg(){
    console.log("klkklkkllklkkkll");
    anime({       
        targets: ".num-img",
        //height: '230px',
        duration: 1200,
        delay: 250,
        rotate: {
            value: 720,
            duration: 1000,
            easing: 'easeInOutSine',
        },
        scale: {
            duration: 100,
            delay: 800,
            easing: 'easeInOutQuart'
        },
        //delay: 250,
        direction: 'alternate',
        loop: true,
        easing: 'linear'
    });
}



