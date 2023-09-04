const image1 = document.querySelector('.image_1')
const image2 = document.querySelector('.image_2')

image1.addEventListener('click', function() {
    
    image1.style.top = "-130px";

    setTimeout(() => {
        image1.style.zIndex = "8";
        image2.style.zIndex = "5";
    }, 200);
    
    setTimeout(function() {
        image1.style.top = "-20px";
    }, 700);

    image2.style.top = "230px";
    
    setTimeout(function() {
        image1.style.zIndex = "8";
        image2.style.zIndex = "5";
        image2.style.top = "100px";
    }, 700);
})

image2.addEventListener('click', function() {
    
    image2.style.top = "230px";

    image1.style.top = "-130px";

    setTimeout(() => {
        image1.style.zIndex = "5";
        image2.style.zIndex = "8";
    }, 200);

    setTimeout(function() {
        image2.style.top = "100px";
    }, 700);

    setTimeout(function() {
        image1.style.top = "-20px";
    }, 700);
})