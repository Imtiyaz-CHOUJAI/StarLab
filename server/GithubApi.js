const {RESTDataSource} = require("apollo-datasource-rest");

class githubApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.github.com/search";
  }

  async getRepositories({
    q = "created:>",
    created_at = "2017-10-22",
    sort = "stars",
    order = "desc",
    page = 1,
    per_page = 25,
  }) {
    const result = await this.get("repositories", {
      q: `${q}${created_at}`,
      sort,
      order,
      page,
      per_page,
    });

    return result.items;
  }
}

export default githubApi;
