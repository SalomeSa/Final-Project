

{
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:2500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },

    }
})
}


let show = () => {
    document.getElementById("messagebox").style.display = "block"
    document.getElementById("messagebutton").style.display = "none"
}
    let hide = () => {
    document.getElementById("messagebox").style.display = "none"
    document.getElementById("messagebutton").style.display = "block"
}


{
    let input = document.getElementById('submit') 

    input.addEventListener('click', function () {
        alert("Your log in was successful!")
    });

}

{
    let input = document.getElementById('submit1') 

    input.addEventListener('click', function () {
        alert("Your registration was successful!")
    });

}


{
    let navigationBlock = document.getElementById("navBar");
    let burgerBarBlock = document.getElementById("burgerBar");

    burgerBarBlock.addEventListener("click", function () {
        navigationBlock.classList.toggle("navActive");
    });
}