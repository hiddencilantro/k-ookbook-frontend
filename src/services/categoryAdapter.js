class CategoryAdapter {
    constructor(domain){
        this.baseURL = `${domain}/categories`
    };

    fetchAllCategories = () => {
        fetch(this.baseURL)
            .then(resp => resp.json())
            .then(json => {
                json.data.forEach(category => addCategoryButton(category));
                appendCategoryButtons(categoryButtons);
            });
    };
};