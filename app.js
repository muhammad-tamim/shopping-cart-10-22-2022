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