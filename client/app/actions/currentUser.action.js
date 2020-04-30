export const SAVE_CURRENT_USER = 'SAVE_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';

export const saveCurrentUserAction = user => {
  return {
    type: SAVE_CURRENT_USER,
    user,
  };
};

export const removeCurrentUserAction = () => {
  return {
    type: SAVE_CURRENT_USER,
  };
};
