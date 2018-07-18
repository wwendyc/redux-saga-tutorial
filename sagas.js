import { delay } from 'redux-saga'
import { put, takeEvery, all, call } from 'redux-saga/effects'

export function* helloSaga() {
  console.log('Hello Sagas!')
}

export function* incrementAsync() {
  // neither put nor call performs any dispatch or asynchronous call by themselves, they simply return plain JavaScript objects

  yield call(delay, 1000) // returns an effect which instructs the middleware to call a given function with the given arguments
  yield put({ type: 'INCREMENT' })
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}
