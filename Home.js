var mainContainer = document.getElementById("main-container")

var images = ['./Images/New1.jpg', './Images/New2.jpg', './Images/New3.jpg', './Images/New4.jpg']

var currIdx = 0;
function changeImages(){
    var timer = setInterval(()=>{
        if(++currIdx == images.length) currIdx = 0;
        mainContainer.style.backgroundImage = `url(${images[currIdx]})`
    }, 3000)
}

// changeImages();
