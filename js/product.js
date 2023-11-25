let showProduct = document.querySelector(".s-productPage .s_showPro .s_product .row");
async function renderProduct(tabText) {
    const API_PRODUCT = `${URL_API}/product?cate=${tabText}`;
    const dataProduct = await getData(API_PRODUCT);
    showProduct.innerHTML = "";
    dataProduct.forEach((pro) => {
        showProduct.innerHTML += `<div class="col-lg-3">
                <div class="s_cardProduct">
                    <div class="s_img">
                        <img src="${pro.img}" alt="" />
                    </div>
                    <div class="s_inforProduct">
                        <h2>${pro.name}</h2>
                        <h3>$ ${pro.priceSale} <span>$ ${pro.price}</span></h3>
                    </div>
                    </div>
            
            </div>`;
    });
}
renderProduct("lady");
