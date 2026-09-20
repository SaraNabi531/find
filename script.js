
const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document.getElementById("email").value;

        const password =
            document.getElementById("password").value;


        if (email === "" || password === "") {

            alert("Please enter your email/phone and password.");

            return;
        }


        window.location.href = "dashboard.html";

    });

}

function goToDashboard() {

    window.location.href = "dashboard.html";

}

function toggleSidebar() {

    const sidebar =
        document.getElementById("sidebar");

    sidebar.classList.toggle("show");

}

const menuItems =
    document.querySelectorAll(".menu-item");


menuItems.forEach(function(item) {

    item.addEventListener("click", function() {

        menuItems.forEach(function(menu) {

            menu.classList.remove("active");

        });


        this.classList.add("active");

    });

});