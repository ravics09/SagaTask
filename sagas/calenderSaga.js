import { call, put, takeLatest } from 'redux-saga/effects';
import { API_REQUEST, API_SUCCESS, API_FAILURE, apiSuccess } from '../actions/type.action';

const calenderDataFetch = async () => {
    const res = await fetch('https://www.googleapis.com/calendar/v3/calendars/en.ae%23holiday%40group.v.calendar.google.com/events?key=AIzaSyBrDZ2wOk_LCGD0hhjID80xiDfyGFE8zd8');
    const data = await res.json();
    return data[0].url;
  };
  
function * CalenderSaga(){
    try {
        const calenderData = yield call(calenderDataFetch);
        const payload = { calenderData };
        yield put(apiSuccess(payload));
    }
    catch (error) {
        yield put(apiFailure(error));
      }
}

export default CalenderSaga;