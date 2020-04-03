import { handleActions } from 'redux-actions';

export const BACKUP_REQUEST = 'dataManager/BACKUP_REQUEST';
export const BACKUP_SUCCESS = 'dataManager/BACKUP_SUCCESS';
export const BACKUP_ERROR = 'dataManager/BACKUP_ERROR';

const defaultState = {
  backupData: [],
};

const dataManager = handleActions(
  {
    [BACKUP_SUCCESS]: (state, action) => {
      return {
        ...state,
        backupData: action.data,
      };
    },
  },
  defaultState
);

export default dataManager;
