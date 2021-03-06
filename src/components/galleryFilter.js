import React from "react";
import "../css/filter.css";
export const GalleryFilter = props => {
  const { onFilterChange, filterOptions } = props;
  return (
    <div className="filter__wrapper">
      <div className="logo"></div>
      <div className="container">
        <div className="row">
          <div className="filter col-md-12">
            <div className="filter__section">
            {/* First filter menu. */}
              <select
                id="section"
                name="section"
                onChange={e => onFilterChange(e)}
                defaultValue={filterOptions.section}
              >
                <option value="hot">Hot</option>
                <option value="top">Top</option>
                <option value="user">User</option>
              </select>
            </div>
            {/* Second filter menu. */}
            <div className="filter__section">
              <select
                id="sort"
                name="sort"
                onChange={e => onFilterChange(e)}
                defaultValue={filterOptions.sort}
              >
                <option value="viral">Viral</option>
                <option value="top">Top</option>
                <option value="time">Time</option>
                <option value="rising">Rising</option>
              </select>
            </div>
            {/* Third fitler menu (time frame). */}
            <div className="filter__section">
              <select
                id="window"
                name="window"
                onChange={e => onFilterChange(e)}
                defaultValue={filterOptions.window}
              >
                <option value="day">Day</option>
                <option value="week">Week</option>
                <option value="month">Month</option>
                <option value="year">Year</option>
                <option value="all">All</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
