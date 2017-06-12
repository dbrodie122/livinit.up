import React from 'react';
import { connect } from 'react-redux';

const active = {
  backgroundColor: '#1377E1',
  border: '2px solid #1377E1',
  outline: 'none'
}

const ControlButtons = (props) => {
  const handleBtnClick = (e) => {
    props.updateFilter(e.target.value);
  }
  return (
    <div>
      <button style={props.filter === "price" ? active : {}} className="btn" onClick={handleBtnClick} value="price" >Price</button>
      <button style={props.filter === "beds" ? active : {}} className="btn" onClick={handleBtnClick} value="beds" >Beds</button>
      <button style={props.filter === "sqft" ? active : {}} className="btn" onClick={handleBtnClick} value="sqft" >Sq. ft.</button>
    </div>
  )
};

const mapStateToProps = state => ({
  filter: state.filter
});

export default connect(mapStateToProps)(ControlButtons);

// needs access to the value in state.
  // if the value in state is equal to the value of the event
    // set the class to btn-active

