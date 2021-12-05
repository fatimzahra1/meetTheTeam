import React from "react";
import list from "../../icons/menu.png";
import grid from "../../icons/grid.png";
import search from "../../icons/search.png";
import ascending from "../../icons/ascending.png";
import descending from "../../icons/descending.png";

import "../../App.css";

const Navbar = ({
  setSortedArray,
  setSearchedArray,
  usersList,
  changeTheStyle,
  userStyle,
  title,
}) => {
  const changeStyle = () => {
    changeTheStyle();
  };

  const onChangeHandler = (e) => {
    const newArray = usersList.filter((person) =>
      (person.name.first + " " + person.name.last)
        .toLowerCase()
        .includes(e.target.value)
    );
    setSearchedArray(newArray);
  };

  const compareAscending = (a, b) => {
    // Use toUpperCase() to ignore character casing
    const bandA = a.name.first.toUpperCase();
    const bandB = b.name.first.toUpperCase();

    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
  };

  const compareDescending = (a, b) => {
    // Use toUpperCase() to ignore character casing
    const bandA = a.name.first.toUpperCase();
    const bandB = b.name.first.toUpperCase();

    let comparison = 0;
    if (bandA > bandB) {
      comparison = -1;
    } else if (bandA < bandB) {
      comparison = 1;
    }
    return comparison;
  };

  const sortArrayAscending = () => {
    const newArray = usersList.sort(compareAscending);
    setSortedArray(newArray);
    console.log("i did");
    console.log(usersList);
  };

  const sortArrayDescending = () => {
    const newArray = usersList.sort(compareDescending);
    setSortedArray(newArray);
    console.log("i did");
    console.log(usersList);
  };

  let icon;
  userStyle ? (icon = grid) : (icon = list);

  return (
    <div className="navbar">
      <div className="arrows">
        <div className="arrow" onClick={sortArrayAscending}>
          <img src={ascending} alt="" />
        </div>
        <div className="arrow" onClick={sortArrayDescending}>
          <img src={descending} alt="" />
        </div>
      </div>

      {/* <div onClick={sortArray}><img src={sort} alt="" /></div> */}

      <div className="search">
        <div className="search_container">
          <img className="search-img" src={search} alt="" />
          <input label="search" onChange={onChangeHandler}></input>
        </div>

        <hr></hr>
      </div>

      <div onClick={changeStyle}>
        <button className="btn btn-sm">
          <img src={icon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
