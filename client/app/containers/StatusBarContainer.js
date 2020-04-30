import {connect} from 'react-redux';

import StatusBar from '../components/StatusBar';
import {
  changeEnjoyLevel,
  changeFoodLevel,
  changeSleepLevel,
  changeWCLevel,
} from '../actions/changeDesireLevels';

const mapStateToProps = state => {
  return {
    foodLevel: state.petsDesires.foodLevel,
    sleepLevel: state.petsDesires.sleepLevel,
    wcLevel: state.petsDesires.wcLevel,
    enjoyLevel: state.petsDesires.enjoyLevel,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeFoodLevel: (value, actionOperation) =>
      dispatch(changeFoodLevel(value, actionOperation)),
    changeSleepLevel: (value, actionOperation) =>
      dispatch(changeSleepLevel(value, actionOperation)),
    changeWCLevel: (value, actionOperation) =>
      dispatch(changeWCLevel(value, actionOperation)),
    changeEnjoyLevel: (value, actionOperation) =>
      dispatch(changeEnjoyLevel(value, actionOperation)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StatusBar);
