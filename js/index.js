$(function () {
    $(".s-banner .s_list").slick({
        autoplay: true,
    });
});
//ourProduct
//showProduct
let listDotProduct = document.querySelectorAll(".s-showProduct .s_dot");
listDotProduct.forEach((dot) => {
    dot.addEventListener("click", function (e) {
        e.target.closest(".s_shirt").classList.toggle("active");
    });
});

//Flashsale
const saleEndDate = new Date("2023-11-15 00:00:00").getTime();
const countdown = setInterval(function () {
    const now = new Date().getTime();
    const timeRemaining = saleEndDate - now;
    if (timeRemaining <= 0) {
        clearInterval(countdown);
        document.getElementById("days").innerHTML = "02";
        document.getElementById("hours").innerHTML = "12";
        document.getElementById("minutes").innerHTML = "30";
        document.getElementById("seconds").innerHTML = "20";
    } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days.toString().padStart(2, "0");
        document.getElementById("hours").innerHTML = hours.toString().padStart(2, "0");
        document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, "0");
        document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, "0");
    }
}, 1000);
//feedback
$(".s-feedBack .s_listFeed ").slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    autoplay: true,
});

//footer
$(function () {
    $(".s-footer .s_up i").click(function () {
        document.documentElement.scrollTop = 0;
    });
});
