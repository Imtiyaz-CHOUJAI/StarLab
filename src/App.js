import React, {useState, useEffect} from "react";
import BackToTop from "react-back-to-top-button";
import moment from "moment";

import RepositoriesListQuery from "./components/RepositoriesListQuery";
import "./scss/app.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronCircleUp} from "@fortawesome/free-solid-svg-icons";
import {Logo} from "./components/base/Logo";
import {UseDebounce} from "./utils/UseDebounce";

const App = () => {
  const [searchCreatedAtInput, setSearchCreatedAtInput] = useState(
    moment().format("YYYY-MM-DD"),
  );

  const [createdAtQueryVariable, setCreatedAtQueryVariable] = useState(
    moment()
      .subtract(30, "days")
      .format("YYYY-MM-DD"),
  );

  const debouncedSearchCreatedAtInput = UseDebounce(searchCreatedAtInput, 1000);

  useEffect(() => {
    if (debouncedSearchCreatedAtInput) {
      setCreatedAtQueryVariable(
        moment(searchCreatedAtInput)
          .subtract(30, "days")
          .format("YYYY-MM-DD"),
      );
    }
  }, [debouncedSearchCreatedAtInput]);

  return (
    <React.Fragment>
      <Logo />
      <div className="search">
        <input
          type="date"
          className="search__input"
          value={searchCreatedAtInput}
          onChange={e => setSearchCreatedAtInput(e.target.value)}
        />
      </div>

      <div className="container">
        <RepositoriesListQuery createdAt={createdAtQueryVariable} />
      </div>
      <BackToTop
        showOnScrollUp
        showAt={100}
        speed={1500}
        easing="easeInOutQuint"
      >
        <FontAwesomeIcon icon={faChevronCircleUp} />
      </BackToTop>
    </React.Fragment>
  );
};

export default App;
