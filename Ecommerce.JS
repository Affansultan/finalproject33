let cart = document.getElementById("cart");
let shopCard = document.querySelectorAll(".shopCard");

cart.addEventListener("click", function(){
    document.querySelector("container").innerHTML="";
    document.querySelector("body").innerHTML="";
})
shopCard.forEach(function(card){
    card.addEventListener("click", function(){

        let div = document.createElement("div");
        div.classList.add("datailCard");
        div.innerHTML=`
        <img src=${card.firstElementChild.src} alt="">
        <div>
        <h1>Trends At NZ's</h1>
        <h1>Upto 50% Off On Cloths</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <a href="">Shop Now</a>
        </div>
        `
        console.log("card");
        document.querySelector("body").appendChild(div)

    })
})
