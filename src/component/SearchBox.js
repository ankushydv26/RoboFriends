import React from "react";

const SearchBox = ({searchChange,searchfiled}) => {
  return (
    <div className="pa2">
      <input 
      type="search" 
      placeholder="search"
      className="pa3 ba b--grean bg-lightest-blue"
      onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
