function menubar() {
    document.querySelector(".menu-data").classList.add("active");
    document.getElementById("Menu-bar").style.display = "none";
    document.getElementById("close-icon").style.display = "block";
}

function closebar() {
    document.querySelector(".menu-data").classList.remove("active");
    document.getElementById("Menu-bar").style.display = "block";
    document.getElementById("close-icon").style.display = "none";
}

window.onclick = function(event) {
    const menu = document.querySelector(".menu-data");
    const menuIcon = document.getElementById("Menu-bar");

    if (event.target !== menu && event.target !== menuIcon && menu.classList.contains("active")) {
        closebar();
    }
};

window.addEventListener("resize", function () {
    if(window.innerWidth > 768){
        document.querySelector(".menu-data").classList.remove("active");
        document.getElementById("Menu-bar").style.display = "none";
        document.getElementById("close-icon").style.display = "none";
    }else{
        document.getElementById("Menu-bar").style.display = "block";
    }
});


function goToAgentPage() {
    window.location.href = "AgentPage.html";
}

function goToMapsPage(){
    window.location.href = "MapsPage.html";
}

function agentJet() {
    let popup = document.getElementById("abilitisagent");
    popup.style.display = "flex";
}

function agentNova() {
    let popup = document.getElementById("abilitisagent2");
    popup.style.display = "flex";
}

function agentGrim(){
    let popup = document.getElementById("abilitisagent3");
    popup.style.display = "flex";
}

function agentAmen(){
    let popup = document.getElementById("abilitisagent4");
    popup.style.display = "flex";
}

function agentSky(){
    let popup = document.getElementById("abilitisagent5");
    popup.style.display = "flex";
}

function agentYoyo(){
    let popup = document.getElementById("abilitisagent6");
    popup.style.display = "flex";
}

function agentchili(){
    let popup = document.getElementById("abilitisagent7");
    popup.style.display = "flex";
}

function agentastro(){
    let popup = document.getElementById("abilitisagent8");
    popup.style.display = "flex";
}

function closePopup() {
    document.getElementById("abilitisagent").style.display = "none";
    document.getElementById("abilitisagent2").style.display = "none";
    document.getElementById("abilitisagent3").style.display = "none";
    document.getElementById("abilitisagent4").style.display = "none";
    document.getElementById("abilitisagent5").style.display = "none";
    document.getElementById("abilitisagent6").style.display = "none";
    document.getElementById("abilitisagent7").style.display = "none";
    document.getElementById("abilitisagent8").style.display = "none";
}

window.onclick = function(event) {
    let popup1 = document.getElementById("abilitisagent");
    let popup2 = document.getElementById("abilitisagent2");
    let popup3 = document.getElementById("abilitisagent3");
    let popup4 = document.getElementById("abilitisagent4");
    let popup5 = document.getElementById("abilitisagent5");
    let popup6 = document.getElementById("abilitisagent6");
    let popup7 = document.getElementById("abilitisagent7");
    let popup8 = document.getElementById("abilitisagent8");

    if (event.target === popup1) {
        closePopup();
    }
    if (event.target === popup2) {
        closePopup();
    }
    if (event.target === popup3) {
        closePopup();
    }
    if (event.target === popup4) {
        closePopup();
    }
    if (event.target === popup5) {
        closePopup();
    }
    if (event.target === popup6) {
        closePopup();
    }
    if (event.target === popup7) {
        closePopup();
    }
    if (event.target === popup8) {
        closePopup();
    }
};

function validateForm() {
    let isValid = true;

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let server = document.getElementById("server").value;
    let description = document.getElementById("description").value.trim();
    let followup = document.getElementById("followup").checked;

    if (username == "") {
        alert("Username tidak boleh kosong!");
        isValid = false;
    }
    if (email == "") {
        alert("Email tidak boleh kosong!");
        isValid = false;
    } else if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("Email harus mengandung '@' dan '.'!");
        isValid = false;
    }
    if (server == "") {
        alert("Silakan pilih server!");
        isValid = false;
    }
    if (description.length < 10) {
        alert("Deskripsi harus minimal 10 karakter!");
        isValid = false;
    }
    if (!followup) {
        alert("Harap izinkan follow-up email!");
        isValid = false;
    }
    if (isValid) {
        alert("Bug report submitted successfully!");
    }
}

