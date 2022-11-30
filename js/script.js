

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
        1000:{
            items:3
        }
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
    function check(){
        let pass1 = document.getElementById("password1").value;
        let pass2 = document.getElementById("repeat").value;
    }

    console.log(pass1, pass2)

    if(pass1 != pass2 || pass1 == "" || pass2 == ""){
        document.getElementById("answer").
        innerHTML = "პაროლები არ ედრება ერთმანეთს";
        document.getElementById("password1").
        style.border = "1px solid #ff0000";
        document.getElementById("repeat").
        style.border = "1px solid #ff0000";
    }
      
    else{
        document.getElementById("answer").
        innerHTML = "რეგისტრაცია წამატებულად გაიარეთ";
        document.getElementById("password1").
        style.border = "1px solid #000000";
        document.getElementById("repeat").
        style.border = "1px solid #000000";
    }
}