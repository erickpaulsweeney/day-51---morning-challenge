const messageBtn = document.querySelector(".message");
const alertBtn = document.querySelector(".alert");
const notif = document.querySelector(".container-notif");

let hide;

messageBtn.addEventListener("click", () => {
    notif.style.display = "flex";
    hide = setTimeout(() => notif.style.display = "none", 2000);
    console.log("start1");
});

alertBtn.addEventListener("click", () => {
    notif.style.display = "flex";
    hide = setTimeout(() => notif.style.display = "none", 2000);
    console.log("start2");
});

notif.addEventListener("mouseover", (ev) => {
    if (hide) clearTimeout(hide);
    console.log("end");
});

notif.addEventListener("mouseout", (ev) => {
    hide = setTimeout(() => notif.style.display = "none", 2000);
    console.log("start3");
});

notif.addEventListener("click", () => console.log("test"));
