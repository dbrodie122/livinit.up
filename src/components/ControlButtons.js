import React from 'react';

const data = {
  price: 'Price',
  beds: 'Beds',
  sqft: 'Sq. ft.'
}

const generateButtons = (handleBtnClick) => Object.keys(data).map((key) => <button key={key} className="btn" onClick={handleBtnClick} value={key}>{data[key]}</button>)

const ControlButtons = (props) => {
  const handleBtnClick = (e) => {
    props.updateFilter(e.target.value);
  }
  return (
    <div>{generateButtons(handleBtnClick)}</div>
  )
};

export default ControlButtons;