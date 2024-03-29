import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import postSaga from './post';
import userSaga from './user';

// axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.baseURL = 'https://api.jdoubleu.me';
axios.defaults.withCredentials = true;

export default function* rootSaga() {
    yield all([
        fork(postSaga),
        fork(userSaga),
    ])
}