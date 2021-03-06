import React from "react";
import PropTypes from "prop-types";

const TechItem = ({ tech }) => {
  return (
    <ul className="collection">
      <li className="collection-item">
        <div>
          {tech.firstName} {tech.lastName}
          <a href="#!" className="secondary-content">
            <i className="material-icons">delete</i>
          </a>
        </div>
      </li>
    </ul>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired
};

export default TechItem;
