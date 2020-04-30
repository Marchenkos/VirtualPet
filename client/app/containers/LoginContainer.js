import Login from '../screens/LogIn';
import {saveCurrentUserAction} from '../actions/currentUser.action';

import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserCurrent: user => dispatch(saveCurrentUserAction(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
