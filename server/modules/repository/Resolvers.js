const resolvers = {
  Query: {
    repositories: (root, {page, created_at}, {dataSources}) =>
      dataSources.githubApi.getRepositories({page, created_at}),
  },
};

export default resolvers;
