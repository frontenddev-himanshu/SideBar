let sideBar = document.getElementById("side-bar");
let bar = document.getElementById("bar-js");
let back = 0;

bar.addEventListener("click", function () {

    if (back == 0) {
        sideBar.style.left = "0";
        back = 1;
    }

    else if (back == 1) {
        sideBar.style.left = "-30vh";
        back = 0;
    }

})