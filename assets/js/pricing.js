document.getElementById("calculate").addEventListener("click", function() {
    let metalType = document.getElementById("metalType").value;
    let shape = document.getElementById("shape").value;
    let weight = document.getElementById("metalWeight").value;

    if (metalType === "Select Metal Type" || shape === "Select Shape" || weight === "") {
        alert("Please fill in all fields correctly.");
        return;
    }

    alert(`Calculation for ${metalType} with shape ${shape} and weight ${weight} in progress...`);
});

document.getElementById("submitForm").addEventListener("click", function() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let metalType = document.getElementById("callbackMetalType").value;
    let shape = document.getElementById("callbackShape").value;
    let weight = document.getElementById("callbackMetalWeight").value;

    if (name === "" || phone === "" || metalType === "Select Metal Type" || shape === "Select Shape" || weight === "") {
        alert("Please fill in all fields correctly.");
        return;
    }

    alert(`Thank you ${name}, we will contact you at ${phone} regarding your ${metalType}.`);
});
