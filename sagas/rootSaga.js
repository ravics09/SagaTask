import CalenderSaga from './calenderSaga';
import { API_REQUEST } from '../actions/type.action';

export function* rootSaga() {
    yield takeLatest(API_REQUEST, CalenderSaga);
  }