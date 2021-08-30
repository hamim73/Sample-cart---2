// total price
function total()
{
    // get total
    const total = document.getElementById( 'total-price' );
    const totalText = total.innerText;
    const totalNum = parseFloat( totalText );
    const memory = document.getElementById( 'm-price' );
    const memoryText = memory.innerText;
    const memoryNum = parseFloat( memoryText );
    // get storage
    const storage = document.getElementById( 's-price' );
    const storageText = storage.innerText;
    const storageNum = parseFloat( storageText );
    // get delivery
    const delivery = document.getElementById( 'd-price' );
    const deliveryText = delivery.innerText;
    const deliveryNum = parseFloat( deliveryText );
    // calculate total
    total.innerText = 1299 + memoryNum + storageNum + deliveryNum;
    final();
}
// final price
function final()
{
    // get total price
    const totalPrice = document.getElementById( 'total-price' );
    const totalValue = totalPrice.innerText;
    // update final price
    const finalPrice = document.getElementById( 'final-price' );
    finalPrice.innerText = totalValue;
}

// memory
function m8gb()
{
    const memory = document.getElementById( 'm-price' );
    memory.innerText = 0;
    total();
}
function m16gb()
{
    const memory = document.getElementById( 'm-price' );
    memory.innerText = 100;
    total();
}
// storage
function s256gb()
{
    const storage = document.getElementById( 's-price' );
    storage.innerText = 0;
    total();
}
function s512gb()
{
    const storage = document.getElementById( 's-price' );
    storage.innerText = 100;
    total();
}
function s1tb()
{
    const storage = document.getElementById( 's-price' );
    storage.innerText = 180;
    total();
}
// delivery
function d_free()
{
    const delivery = document.getElementById( 'd-price' );
    delivery.innerText = 0;
    total();
}
function d_20()
{
    const delivery = document.getElementById( 'd-price' );
    delivery.innerText = 20;
    total();
}
// promo code
function p_btn()
{
    const promo = document.getElementById( 'p-input' );
    const code = promo.value;
    if ( code.toLowerCase() == 'stevekaku' )
    {
        // get total price
        const totalPrice = document.getElementById( 'total-price' );
        const totalPriceText = totalPrice.innerText;
        const totalPriceNum = parseFloat( totalPriceText );
        // get final price
        const price = document.getElementById( 'final-price' );
        const calculate = ( totalPriceNum * 20 ) / 100;
        price.innerText = totalPriceNum - calculate;
        promo.value = '';
    }
    else
    {
        alert( 'Wrong Input' );
        promo.value = '';
    }
}