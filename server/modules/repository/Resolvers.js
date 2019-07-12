const resolvers = {
  Query: {
    repositories: (root, {page}, {dataSources}) =>
      dataSources.GithubApi.getRepositories({page}),
  },
};

export default resolvers;
