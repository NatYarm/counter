import { ValuesType } from '../reducers/counterReducer';
import { AppRootState } from './store';

export const valuesSelector = (state: AppRootState): ValuesType => state.values;
