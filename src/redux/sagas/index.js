import { all } from "@redux-saga/core/effects";

import userSaga from './UserSaga'


export default function* rootSaga() {

    yield all([

        userSaga(),
    ])
}