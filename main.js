document.addEventListener('DOMContentLoaded', () => {
    
    const darkModeBtn = document.querySelector("#toggle1");
    const navBar = document.querySelector(".navbar");
    const darkModeLabel = document.querySelector(".dark-mode-label");
    const mainSection = document.querySelector(".main-section");
    const skillLabels = document.querySelectorAll(".skill-label");
    const h3Btns = document.querySelectorAll("h3, h3 a");
    const html = document.querySelector("html");
    const contactSocials = document.querySelectorAll(".contact-social-container");
    const logo = document.querySelector(".logo a")
    var darkModeValue = false;


    // dark mode button - large screen
    darkModeBtn.addEventListener('click', function() {
        if (darkModeValue === false) {
            darkModeValue = true;
            navBar.classList.toggle("dark-mode");
            darkModeLabel.classList.toggle("dark-mode");
            mainSection.classList.toggle("dark-mode");
            html.classList.toggle("dark-mode");
            logo.classList.toggle("dark-mode")
            skillLabels.forEach(function(skillLabel) {
                skillLabel.classList.toggle("dark-mode");
            });
            h3Btns.forEach(function(h3Btn) {
                h3Btn.classList.toggle("dark-mode");
            });
            contactSocials.forEach(function(contactSocial) {
                contactSocial.classList.toggle("dark-mode");
            });
        }else {
            darkModeValue = false;
            navBar.classList.toggle("dark-mode");
            darkModeLabel.classList.toggle("dark-mode");
            mainSection.classList.toggle("dark-mode");
            html.classList.toggle("dark-mode");
            logo.classList.toggle("dark-mode")
            skillLabels.forEach(function(skillLabel) {
                skillLabel.classList.toggle("dark-mode");
            });
            h3Btns.forEach(function(h3Btn) {
                h3Btn.classList.toggle("dark-mode");
            });
            contactSocials.forEach(function(contactSocial) {
                contactSocial.classList.toggle("dark-mode");
            });
        }
    });

    const emoji = document.querySelector(".emoji");
    const sun = document.querySelector("#sun");
    const moon = document.querySelector("#moon");

    // dark mode button - emoji
    emoji.addEventListener('click', function() {
        if (darkModeValue === false) {
            darkModeValue = true;
            darkModeBtn.checked = true;
            moon.style.display = "none";
            sun.style.display = "block";

            navBar.classList.toggle("dark-mode");
            darkModeLabel.classList.toggle("dark-mode");
            mainSection.classList.toggle("dark-mode");
            html.classList.toggle("dark-mode");
            logo.classList.toggle("dark-mode")
            skillLabels.forEach(function(skillLabel) {
                skillLabel.classList.toggle("dark-mode");
            });
            h3Btns.forEach(function(h3Btn) {
                h3Btn.classList.toggle("dark-mode");
            });
            contactSocials.forEach(function(contactSocial) {
                contactSocial.classList.toggle("dark-mode");
            });
        }else if (darkModeValue === true) {
            darkModeValue = false;
            darkModeBtn.checked = false;
            sun.style.display = "none";
            moon.style.display = "block";

            navBar.classList.toggle("dark-mode");
            darkModeLabel.classList.toggle("dark-mode");
            mainSection.classList.toggle("dark-mode");
            html.classList.toggle("dark-mode");
            logo.classList.toggle("dark-mode")
            skillLabels.forEach(function(skillLabel) {
                skillLabel.classList.toggle("dark-mode");
            });
            h3Btns.forEach(function(h3Btn) {
                h3Btn.classList.toggle("dark-mode");
            });
            contactSocials.forEach(function(contactSocial) {
                contactSocial.classList.toggle("dark-mode");
            });
        }
    });

    // display sidebar
    const toggleSidebar = document.querySelector(".sidebar");
    const burger = document.querySelector(".burger");
    const sidebarContent = document.querySelector(".sidebar-content");
    let status = false;

    toggleSidebar.addEventListener('click' , function() {
        if (status === false){
            sidebarContent.style.visibility = "visible";
            sidebarContent.style.opacity = ".9";
            burger.classList.add('open');
            status = true;
        }else {
            sidebarContent.style.visibility = "hidden";
            sidebarContent.style.opacity = "0";
            sidebarContent.style.transition = "all .5s ease";
            burger.classList.remove('open');
            status = false;
        }
    });

    // close sidebar when click on body
    const section = document.querySelector(".main-section");
    section.addEventListener('click', function() {
        if (status === true) {
            sidebarContent.style.visibility = "hidden";
            sidebarContent.style.opacity = "0";
            sidebarContent.style.transition = "all .5s ease";
            burger.classList.remove('open');
            status = false;
        }
    });

    // close sidebar when screen resize
    window.addEventListener('resize', function() {
        let screenMin768 = window.matchMedia("(min-width: 768px)");
        if (screenMin768.matches) {
            moon.style.display = "none";
            sun.style.display = "none";
            sidebarContent.style.visibility = "hidden";
            sidebarContent.style.transition = "all 0s";
            burger.classList.remove('open');
            status = false;
        }else if (darkModeValue === true){
            sun.style.display = "block";
        }else {
            moon.style.display = "block";
        }
    });

});