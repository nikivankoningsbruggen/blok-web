var berichtButton = document.querySelector('#berichtplaatsen');
var loading = document.querySelector('.loading');

function showloading() {
    loading.classList.add("loadingshow"); 
    //https://www.w3schools.com/jsref/met_win_settimeout.asp
    setTimeout(function placed() { 
loading.src = "./assets/images/greenvink.png"; 
}, 2000);
 

}
berichtButton.addEventListener("click", showloading);


 