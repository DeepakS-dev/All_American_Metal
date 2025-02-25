document.addEventListener("DOMContentLoaded", () => {
    const sellMetalButton = document.querySelector(".sell-metal");

    sellMetalButton.addEventListener("click", () => {
        alert("Redirecting to Sell Your Metal page...");
        window.location.href = "./sell-metal.html";
    });
});
