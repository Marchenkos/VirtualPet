export const CHANGE_FOOD_LEVEL = 'CHANGE_FOOD_LEVEL';
export const CHANGE_SLEEP_LEVEL = 'CHANGE_SLEEP_LEVEL';
export const CHANGE_ENJOY_LEVEL = 'CHANGE_ENJOY_LEVEL';
export const CHANGE_WC_LEVEL = 'CHANGE_WC_LEVEL';

export const changeFoodLevel = (level, operation) => {
  return {
    type: CHANGE_FOOD_LEVEL,
    level,
    operation,
  };
};

export const changeSleepLevel = (level, operation) => {
  return {
    type: CHANGE_SLEEP_LEVEL,
    level,
    operation,
  };
};

export const changeEnjoyLevel = (level, operation) => {
  return {
    type: CHANGE_ENJOY_LEVEL,
    level,
    operation,
  };
};

export const changeWCLevel = (level, operation) => {
  return {
    type: CHANGE_WC_LEVEL,
    level,
    operation,
  };
};
