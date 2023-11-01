document.addEventListener("DOMContentLoaded", function () {
    const favoriteList = document.getElementById("favoriteList");
    const addToFavoriteButtons = document.querySelectorAll(".addToFavorite");

    addToFavoriteButtons.forEach(button => {
        button.addEventListener("click", function () {
            const itemTitle = this.previousElementSibling.textContent;
            addToFavorites(itemTitle);
        });
    });

    function addToFavorites(itemTitle) {
        const listItem = document.createElement("h3");
        listItem.textContent = itemTitle;
        favoriteList.appendChild(listItem);
    }
});
