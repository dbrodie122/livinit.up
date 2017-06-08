import React from 'react';

const ControlButtons = (props) => {
  const handleBtnClick = (e) => {
    props.updateFilter(e.target.value);
  }
  return (
    <div>
      <button className="btn" value="price" onClick={handleBtnClick}>Price</button>
      <button className="btn" value="beds" onClick={handleBtnClick}>Beds</button>
      <button className="btn" value="sqft" onClick={handleBtnClick}>Sq. ft.</button>
    </div>
  )
};

export default ControlButtons;