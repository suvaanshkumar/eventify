window.onload = function(){
    setTotal(0);
    document.querySelector("#n2").onclick=adding;
    document.querySelector("#n1").onclick=minus;
}
function adding(){
    let quantity = document.querySelector("#quantity").textContent;
    quantity++;
    setTotal(quantity);
}
function minus(){
    let quantity = document.querySelector("#quantity").textContent;
    if (quantity>0){
    quantity--;
    setTotal(quantity);
    }
}
function setTotal(quantity){
    document.querySelector("#quantity").textContent = quantity;
    document.querySelector("#tot").textContent = quantity * 10;
}
