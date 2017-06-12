import React from 'react';
import { connect } from 'react-redux';

const data = {
  price: 'Price',
  beds: 'Beds',
  sqft: 'Sq. ft.'
}


const generateButtons = (handleBtnClick, filter) => Object.keys(data).map((key) => <button key={key} className={'btn'} onClick={handleBtnClick} value={key}>{data[key]}</button>)

const ControlButtons = (props) => {
  const handleBtnClick = (e) => {
    props.updateFilter(e.target.value);
  }
  return (
    <div>{generateButtons(handleBtnClick)}</div>
  )
};

const mapStateToProps = state => ({
  filter: state.filter
});

export default connect(mapStateToProps)(ControlButtons);

// needs access to the value in state.
  // if the value in state is equal to the value of the event
    // set the class to btn-active

    // <button className={'btn' + } onClick={handleBtnClick} value={price}>Price</button>
    // <button className={'btn'} onClick={handleBtnClick} value={beds}>Beds</button>
    // <button className={'btn'} onClick={handleBtnClick} value={sqft}>Sq. ft.</button>