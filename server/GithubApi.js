const {RESTDataSource} = require("apollo-datasource-rest");

class GithubApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.github.com/search";
  }

  async getRepositories({
    q = "created:>2017-10-22",
    sort = "stars",
    order = "desc",
    page = 1,
    per_page = 10,
  }) {
    const result = await this.get("repositories", {
      q,
      sort,
      order,
      page,
      per_page,
    });

    return result.items;
  }
}

export default GithubApi;
