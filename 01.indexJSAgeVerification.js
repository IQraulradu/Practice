// let popUp = document.getElementById("footerContainer");
// //When user cliks the accept button
// document.getElementById("BtnCookieAccept").addEventListener("click", () =>
// {
//     // date object
//     let d = new Date();
//     // increment the current time by 1 minute (cookie will expire after 1 minute)
//     d.setMinutes(2 +d.getMinutes());
//     // dcument.cookie = "myCookieName=thisIsMyCookie;
//     // expres = " + d + ";";

//     popUp.classList.add("hide");
//     popUp.classList.remove("show");
// });

// const checkCookie = () => {
//     let input = document.cookie.split("=");
//     if(input[0] == "myCookieName")
//     {
//         //hide
//         popUp.classList.add("hide");
//         popUp.classList.add("show");
//     }else
//     {
//         //show
//         popUp.classList.add("hide");
//         popUp.classList.add("show");
//     }
// };

// Window.onload = () =>{
//     setTimeout (()=>{
//         checkCookie();
//     }, 2000);
// };

function hideTap() {
    var tapDiv = document.getElementById("Tap");
    tapDiv.style.transition = "opacity 0.4s ease-out";
    tapDiv.style.opacity = 0;

    setTimeout(function() {
        tapDiv.style.display = "none";
    }, 400); // 0.4 secunde
}

