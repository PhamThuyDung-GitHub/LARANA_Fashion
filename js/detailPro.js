//chooseSize
document.querySelectorAll(".s_chooseColor li").forEach((li) => {
    li.addEventListener("click", function () {
        document.querySelectorAll(".s_chooseColor li").forEach((size) => {
            size.classList.remove("active");
        });
        li.classList.add("active");
        let getSize = li.getAttribute("data-size");
        let getPriceSale = li.getAttribute("data-priceSale");
        let getPrice = li.getAttribute("data-price");
        document.querySelector(".s_inforPro h5 span").innerHTML = getSize;
        document.querySelector(".s-detailPro .s_inforPro .s_priceSale").innerHTML = getPriceSale;
        document.querySelector(".s-detailPro .s_inforPro .s_price ").innerHTML = getPrice;
    });
});
//Quality
const minus = document.querySelector(".s_qualityAndAddCart .fa-minus");
const plus = document.querySelector(".s_qualityAndAddCart .fa-plus");
const quality = document.querySelector(".s_qualityAndAddCart .s_number");
let quantity = quality.innerHTML;
plus.addEventListener("click", function () {
    quantity++;
    updateQuantity();
});
minus.addEventListener("click", function () {
    if (quantity > 0) {
        quantity--;
        updateQuantity();
    }
});
function updateQuantity() {
    quality.innerHTML = quantity;
}
//TypeReturnProduct
const ClickTab = document.querySelectorAll(".s_changeTab");
const tabContent = document.querySelectorAll(".s_tabDetail");
const idType = document.querySelector(`#${tabType}`);
function changeTabs() {
    const dataType = ClickTab.getAttribute("data-type");
    if (dataType === idType) {
        tabContent.forEach((tab) => {
            tab.classList.add("active");
        });
        ClickTab.forEach((tabmove) => {
            tabmove.classList.add("active");
        });
        ClickTab.classList.remove("active");
        tabContent.classList.remove("active");

        idType.classList.add("active");
        clickedButton.classList.add("active");
    }
}
changeTabs();
