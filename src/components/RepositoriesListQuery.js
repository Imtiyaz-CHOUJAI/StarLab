import React from "react";
import gql from "graphql-tag";
import {Query} from "react-apollo";
import RepositoriesList from "./RepositoriesList";
import {Purify} from "../utils/Purify";
import {ThrowError} from "../utils/SweetAlert";
import {Loading} from "./base/Loading";

const RepositoriesQuery = gql`
  query repositories($page: Int, $createdAt: String) {
    repositories(page: $page, created_at: $createdAt) {
      id
      name
      full_name
      owner {
        avatar_url
        login
      }
      html_url
      description
      stargazers_count
      open_issues
      created_at
    }
  }
`;

const RepositoriesListQuery = ({createdAt}) => (
  <Query query={RepositoriesQuery} errorPolicy="all" variables={{createdAt}}>
    {({error, data, fetchMore, loading}) => {
      if (loading) return <Loading />;

      if (error) {
        ThrowError();
        return <span>An error has occurred, please refresh the page</span>;
      }

      return (
        data &&
        data.repositories &&
        data.repositories.length && (
          <RepositoriesList
            repositories={data.repositories || []}
            onLoadMore={(page = 1) =>
              fetchMore({
                variables: {
                  page,
                },
                updateQuery: (previousRepositories, {fetchMoreResult}) => {
                  if (!fetchMoreResult) return previousRepositories;

                  let repositories = [
                    ...previousRepositories.repositories,
                    ...fetchMoreResult.repositories,
                  ];

                  return Object.assign({}, previousRepositories, {
                    repositories: Purify(repositories, "id"),
                  });
                },
              })
            }
          />
        )
      );
    }}
  </Query>
);

export default RepositoriesListQuery;
