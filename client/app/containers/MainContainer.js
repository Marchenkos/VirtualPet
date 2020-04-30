import ShopPage from '../screens/ShopPage';
import {removeCurrentUserAction} from '../actions/currentUser.action';
import {
  changeEnjoyLevel,
  changeFoodLevel,
  changeSleepLevel,
  changeWCLevel,
} from '../actions/changeDesireLevels';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
    foodLevel: state.petsDesires.foodLevel,
    sleepLevel: state.petsDesires.sleepLevel,
    wcLevel: state.petsDesires.wcLevel,
    enjoyLevel: state.petsDesires.enjoyLevel,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(removeCurrentUserAction()),
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
)(ShopPage);
