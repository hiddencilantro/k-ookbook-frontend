class Category {
    static all = [];
    static filteredCategories = [];

    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.selected = false;

        this.button = document.createElement('button');
        this.button.addEventListener('click', this.handleCategoryButton)
        this.option = document.createElement('option');

        Category.all.push(this)
    };

    // NODE GETTERS
    static container = () => contentContainer().querySelector('#categories');
    static dropdown = () => formContainer().querySelector('#cat-dropdown');

    // RENDERS
    renderButton = () => {
        this.button.innerText = this.name;
        this.button.classList.add('category-buttons');
        return this.button;
    };
    
    renderOption = () => {
        this.option.innerText = this.name;
        this.option.value = this.id;
        return this.option;
    };

    // DOM MANIPULATIONS
    attachButton = () => {
        Category.container().append(this.renderButton());
    };

    attachOption = () => {
        Category.dropdown().append(this.renderOption());
    };

    // EVENT HANDLERS
    handleCategoryButton = () => {
        Category.all.forEach(category => {
            if(category.button === this.button && !this.selected) {
                category.button.classList.add('active');
                category.selected = true;
                Category.filteredCategories.push(category);
                Recipe.filterByCategory(Category.filteredCategories);
            } else if(category.button === this.button && this.selected) {
                category.button.classList.remove('active');
                category.selected = false;
                Category.filteredCategories = Category.filteredCategories.filter(category => category !== this);
                Recipe.filterByCategory(Category.filteredCategories);
            };
        });
    };
};
