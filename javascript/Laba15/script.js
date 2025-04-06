
let anchors = document.querySelectorAll('a[href*="#"]');

for(let i = 0; i < anchors.length; i++) {

    anchors[i].addEventListener('click', function(event){
        event.preventDefault();

        let blockId = anchors[i].getAttribute('href').slice(1);

        document.getElementById(blockId).scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    })
}

const topButton = document.getElementById('topButton');

window.addEventListener('scroll', function(){

    if (scrollY > 400){
        topButton.style.display = "block";
    }

    else{
        topButton.style.display = "none";
    }
})

topButton.addEventListener('click', function(){
    window.scrollTo({
        behavior: 'smooth',
        top: 0
    });
})

