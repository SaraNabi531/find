
function showDoctorMap() {

    const results = document.getElementById("doctorResults");
    const map = document.getElementById("doctorMap");

    if (results) {
        results.style.display = "none";
    }

    if (map) {
        map.style.display = "block";
    }
}


function showDoctorList() {

    const results = document.getElementById("doctorResults");
    const map = document.getElementById("doctorMap");

    if (results) {
        results.style.display = "flex";
    }

    if (map) {
        map.style.display = "none";
    }
}


function doctorSearch() {

    const name = document.getElementById("doctorName").value;
    const location = document.getElementById("doctorLocation").value;

    if (name === "" && location === "") {

        alert("Please enter doctor name or location.");

        return;
    }

    alert(
        "Searching for doctors...\n" +
        "Doctor: " + name +
        "\nLocation: " + location
    );
}


function findDoctor() {

    alert("Doctor profile will open here.");
}

function showClinicMap() {

    const results = document.getElementById("clinicResults");
    const map = document.getElementById("clinicMap");

    if (results) {
        results.style.display = "none";
    }

    if (map) {
        map.style.display = "block";
    }
}


function showClinicList() {

    const results = document.getElementById("clinicResults");
    const map = document.getElementById("clinicMap");

    if (results) {
        results.style.display = "flex";
    }

    if (map) {
        map.style.display = "none";
    }
}


function clinicSearch() {

    const name = document.getElementById("clinicName").value;
    const location = document.getElementById("clinicLocation").value;

    if (name === "" && location === "") {

        alert("Please enter clinic name or location.");

        return;
    }

    alert(
        "Searching for clinics...\n" +
        "Clinic: " + name +
        "\nLocation: " + location
    );
}