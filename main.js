document.addEventListener('DOMContentLoaded', () => {
    
    const darkModeBtn = document.querySelector("#toggle1");
    const navBar = document.querySelector(".navbar");
    const darkModeLabel = document.querySelector(".dark-mode-label");
    const mainSection = document.querySelector(".main-section");
    const skillLabels = document.querySelectorAll(".skill-label");
    const h3Btns = document.querySelectorAll("h3, h3 a");
    const html = document.querySelector("html");
    const contactSocials = document.querySelectorAll(".contact-social-container");


    // dark mode button - large screen
    darkModeBtn.addEventListener('click', function() {
        if (darkModeBtn.checked) {
            navBar.classList.add("dark-mode");
            darkModeLabel.classList.add("dark-mode");
            mainSection.classList.add("dark-mode");
            html.classList.add("dark-mode");
            skillLabels.forEach(function(skillLabel) {
                skillLabel.classList.add("dark-mode");
            });
            h3Btns.forEach(function(h3Btn) {
                h3Btn.classList.add("dark-mode");
            });
            contactSocials.forEach(function(contactSocial) {
                contactSocial.classList.add("dark-mode");
            });
        }else {
            navBar.classList.remove("dark-mode");
            darkModeLabel.classList.remove("dark-mode");
            mainSection.classList.remove("dark-mode");
            html.classList.remove("dark-mode");
            skillLabels.forEach(function(skillLabel) {
                skillLabel.classList.remove("dark-mode");
            });
            h3Btns.forEach(function(h3Btn) {
                h3Btn.classList.remove("dark-mode");
            });
            contactSocials.forEach(function(contactSocial) {
                contactSocial.classList.remove("dark-mode");
            });
        }
    });

    const emoji = document.querySelector(".emoji");
    const sun = document.querySelector(".sun");
    const moon = document.querySelector(".moon");
    var darkModeValue = false;

    // dark mode button - emoji
    emoji.addEventListener('click', function() {
        if (darkModeValue === false) {
            darkModeValue = true;
            moon.style.display = "none";
            sun.style.display = "block";
            navBar.classList.add("dark-mode");
            darkModeLabel.classList.add("dark-mode");
            mainSection.classList.add("dark-mode");
            html.classList.add("dark-mode");
            skillLabels.forEach(function(skillLabel) {
                skillLabel.classList.add("dark-mode");
            });
            h3Btns.forEach(function(h3Btn) {
                h3Btn.classList.add("dark-mode");
            });
            contactSocials.forEach(function(contactSocial) {
                contactSocial.classList.add("dark-mode");
            });
        }else if (darkModeValue === true) {
            darkModeValue = false;
            sun.style.display = "none";
            moon.style.display = "block";
            navBar.classList.remove("dark-mode");
            darkModeLabel.classList.remove("dark-mode");
            mainSection.classList.remove("dark-mode");
            html.classList.remove("dark-mode");
            skillLabels.forEach(function(skillLabel) {
                skillLabel.classList.remove("dark-mode");
            });
            h3Btns.forEach(function(h3Btn) {
                h3Btn.classList.remove("dark-mode");
            });
            contactSocials.forEach(function(contactSocial) {
                contactSocial.classList.remove("dark-mode");
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
        let screenChange = window.matchMedia("(min-width: 768px)");
        if (screenChange.matches) {
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

    // sticky navbar
    const sticky = navBar.offsetTop;
    
    function stickyNavbar() {
        if (window.pageYOffset >= sticky) {
            navBar.classList.add("sticky")
        } else {
            navBar.classList.remove("sticky");
        }
    }
    window.onscroll = function() {stickyNavbar()};

});