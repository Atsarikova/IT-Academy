class Search {

    get searchButton() {
        return $('.DocSearch')
    }

    get searchInput() {
        return $('.DocSearch-Input')
    }

    get searchResult() {
        return $$('.DocSearch-Hit')
    }
}

module.exports = new Search();