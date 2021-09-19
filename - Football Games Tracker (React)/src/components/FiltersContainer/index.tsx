import React, { useState } from "react";
import { FILTER_OPTIONS } from "src/types";
import { applyFilter } from "src/redux/actions";
import { useDispatch } from "react-redux";

const FiltersContainer = () => {
  const dispatch = useDispatch();

  const [enabledIndex, setEnabledIndex] = useState<number | null>(null);

  const onFilterApplied = (filter: string, index: number) => {
    if (index !== enabledIndex) {
      setEnabledIndex(index);
    } else {
      setEnabledIndex(null);
    }

    dispatch(applyFilter(filter));
  };

  return (
    <div className="filters-container">
      <div className="heading">Filter Results</div>
      <hr color="#ccc" style={{ width: "100%" }} />

      <div className="filter-options">
        {Object.keys(FILTER_OPTIONS).map((filterOption, index) => (
          <button
            key={index}
            className={`btn-filter-option ${
              index === enabledIndex ? "enabled" : ""
            }`}
            onClick={() => onFilterApplied(filterOption, index)}
          >
            {filterOption.replace("_", " ").replace(/\w\S*/g, function (txt) {
              return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            })}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FiltersContainer;
