import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {faLink} from "@fortawesome/free-solid-svg-icons";

import {Avatar} from "./base/Avatar";
import {Description} from "./base/Description";
import {Link} from "./base/Link";
import {Loading} from "./base/Loading";

let page = 1;

const handleScroll = onLoadMore => {
  page++;
  return onLoadMore(page);
};

const RepositoriesList = ({repositories, onLoadMore}) => {
  return (
    <React.Fragment>
      <InfiniteScroll
        dataLength={repositories.length}
        hasMore={true}
        next={() => handleScroll(onLoadMore)}
        loader={<Loading />}
      >
        {repositories.map(repository => {
          return (
            <div key={repository.id} className="repository">
              <Avatar url={repository.owner.avatar_url} />

              <Description repository={repository} />

              <Link url={repository.html_url} icon={faLink} />
            </div>
          );
        })}
      </InfiniteScroll>
    </React.Fragment>
  );
};

export default RepositoriesList;
