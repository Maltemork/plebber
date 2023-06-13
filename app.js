"use strict";

window.addEventListener("load", initApp);

function initApp() {
    loadEventListeners();
}

function loadEventListeners() {
    

    document.querySelector("#about-btn").addEventListener("click", () => {
        changeSection();
        document.querySelector("#about-section").classList.remove("hidden");
    });
    document.querySelector("#music-btn").addEventListener("click", () => {
        changeSection();
        document.querySelector("#music-section").classList.remove("hidden");
    });
    document.querySelector("#art-btn").addEventListener("click", () => {
        changeSection();
        document.querySelector("#art-section").classList.remove("hidden");
    });
    document.querySelector("#shop-btn").addEventListener("click", () => {
        changeSection();
        document.querySelector("#shop-section").classList.remove("hidden");
    });
    document.querySelector("#contact-btn").addEventListener("click", () => {
        changeSection();
        document.querySelector("#contact-section").classList.remove("hidden");
    });
}

function changeSection() {
    // reset hidden class
    document.querySelector("#about-section").classList.remove("hidden");
    document.querySelector("#music-section").classList.remove("hidden");
    document.querySelector("#art-section").classList.remove("hidden");
    document.querySelector("#shop-section").classList.remove("hidden");
    document.querySelector("#contact-section").classList.remove("hidden");
    // reapply hidden class
    document.querySelector("#about-section").classList.add("hidden");
    document.querySelector("#music-section").classList.add("hidden");
    document.querySelector("#art-section").classList.add("hidden");
    document.querySelector("#shop-section").classList.add("hidden");
    document.querySelector("#contact-section").classList.add("hidden");
    
}