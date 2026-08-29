const menuSections = document.querySelectorAll(
    ".drinks-menu, .food-menu, .desserts-menu"
);

menuSections.forEach(section => {

    const filterButtons = section.querySelectorAll(".filter-button");
    const menuItems = section.querySelectorAll(".drink-block");

    function filterItems(filter) {

        menuItems.forEach(item => {

            const categories = item.dataset.category.split(" ");

            if (categories.includes(filter)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        });
    }

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            const filter = button.dataset.filter;

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            filterItems(filter);
        });

    });

    // 페이지 처음 열었을 때 active 버튼 적용
    const activeButton = section.querySelector(".filter-button.active");

    if (activeButton) {
        filterItems(activeButton.dataset.filter);
    }

});