function totalPrice() {
    // Find phone-price,case-price and convert number
    const phonePrice = parseFloat(document.getElementById('phone-price').innerText);
    const casePrice = parseFloat(document.getElementById('case-price').innerText);
    const sumPrice = phonePrice + casePrice;
    // find sub-total and set innerText
    const subTotal = document.getElementById('sub-total');
    subTotal.innerText = sumPrice;
    // Find tex and set InnerText
    const tax = document.getElementById("tax");
    tax.innerText = Math.round((sumPrice / 100) * 10);
    // find total and set InnerText
    const total = document.getElementById('total');
    total.innerText = Math.round(sumPrice + (sumPrice / 100) * 10);
}
function productTotal(productInputFeild, productPriceFeild, isSum, price) {
    const productInput = document.getElementById(productInputFeild);
    const productValue = productInput.value;
    if (isSum) {
        const productValue = parseFloat(productInput.value) + 1;
        productInput.value = productValue;

    } else if (productValue > 0) {
        const productValue = parseFloat(productInput.value) - 1;
        productInput.value = productValue;
    }
    let productPrice = document.getElementById(productPriceFeild);
    if (price) {
        const productPriceInnerText = parseFloat(productInput.value) * 1219;
        productPrice.innerText = productPriceInnerText;
    } else {
        const productPriceInnerText = parseFloat(productInput.value) * 59;
        productPrice.innerText = productPriceInnerText;
    }
    totalPrice();
}
// Find phone-plus button
document.getElementById('phone-plus').addEventListener('click', function () {
    // click phone-plus and adding 1 on phone-input with function
    productTotal('phone-input', 'phone-price', true, true);
})
// find phone-minus btn
document.getElementById('phone-minus').addEventListener('click', function () {
    // click phone-minus and odding 1 on phone-input with function
    productTotal('phone-input', 'phone-price', false, true)
})
// Find case-plus button
document.getElementById('case-plus').addEventListener('click', function () {
    // click case-plus and adding 1 on case-input with function
    productTotal('case-input', 'case-price', true, false);
})
// find case-minus btn
document.getElementById('case-minus').addEventListener('click', function () {
    // click case-minus and odding 1 on case-input with function
    productTotal('case-input', 'case-price', false, false)
})
totalPrice();