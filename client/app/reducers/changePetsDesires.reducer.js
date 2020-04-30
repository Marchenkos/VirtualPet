import {
  CHANGE_ENJOY_LEVEL,
  CHANGE_FOOD_LEVEL,
  CHANGE_SLEEP_LEVEL,
  CHANGE_WC_LEVEL,
} from '../actions/changeDesireLevels';
import getLevelInRange from '../functions/getLevelInRange';

const defaultState = {
  foodLevel: 50,
  sleepLevel: 50,
  wcLevel: 50,
  enjoyLevel: 50,
};

export default function changePetsDesire(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_ENJOY_LEVEL:
      return {
        ...state,
        enjoyLevel: getLevelInRange(
          action.operation,
          state.enjoyLevel,
          action.level,
        ),
      };
    case CHANGE_FOOD_LEVEL:
      return {
        ...state,
        foodLevel: getLevelInRange(
          action.operation,
          state.foodLevel,
          action.level,
        ),
      };
    case CHANGE_SLEEP_LEVEL:
      return {
        ...state,
        sleepLevel: getLevelInRange(
          action.operation,
          state.sleepLevel,
          action.level,
        ),
      };
    case CHANGE_WC_LEVEL:
      return {
        ...state,
        wcLevel: getLevelInRange(action.operation, state.wcLevel, action.level),
      };
    default:
      return state;
  }
}
