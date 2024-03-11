import { Status } from '../../reducers/statusReducer';
import { AppRootState } from '../store';

export const statusSelector = (state: AppRootState): Status => state.status;
