document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("bars");
    const hiddenList = document.getElementById("hidden-menu");
    
    function toggleList() {
        if (hiddenList.style.display === "none") {
            hiddenList.style.display = "block";
        } else {
            hiddenList.style.display = "none";
        }
    }
    
    toggleButton.addEventListener("click", toggleList);
});
