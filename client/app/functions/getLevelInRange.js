import {CONSTANTS} from '../../constants';

export default function getLevelInRange(action, state, level) {
  switch (action) {
    case CONSTANTS.ACTION_OPERATIONS.decrease: {
      return state - level < 0 ? 0 : state - level;
    }
    case CONSTANTS.ACTION_OPERATIONS.increase: {
      return state + level > 100 ? 100 : state + level;
    }
    default:
      return 0;
  }
}
