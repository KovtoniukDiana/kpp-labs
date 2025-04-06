

$(document).ready(function() {
    const prev = $(".prev");
    const next = $(".next");
    const slideWrapper = $(".slide-wrapper");
    const images = $(".slide");

    let count = 1;
    let width = images.first().width();
    let isAnimating = false;

    const firstClone = images.first().clone();
    const lastClone = images.last().clone();

    slideWrapper.append(firstClone);
    slideWrapper.prepend(lastClone);

    
    function updateSlideWidth() {
        width = images.first().width();
        slideWrapper.css("transform", `translateX(-${count * width}px)`);
    }

    function rollSlider() {
        if (isAnimating) return;
        isAnimating = true;

        slideWrapper.css({
            "transition": "transform 0.5s ease",
            "transform": `translateX(-${count * width}px)`
        });

        setTimeout(() => {
            isAnimating = false;
            if (count >= images.length + 1) { 
                count = 1;
                slideWrapper.css({ "transition": "none", "transform": `translateX(-${count * width}px)` });
            } else if (count <= 0) { 
                count = images.length;
                slideWrapper.css({ "transition": "none", "transform": `translateX(-${count * width}px)` });
            }
        }, 500); 
    }

    next.click(function() {
        if (isAnimating) return;
        count++;
        rollSlider();
    });

    prev.click(function() {
        if (isAnimating) return;
        count--;
        rollSlider();
    });

    $(window).resize(updateSlideWidth);
    updateSlideWidth();
});
