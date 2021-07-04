import { call, put, takeEvery } from 'redux-saga/effects';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

const getApi = async () => {
    try{
    const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
            'content-Type': 'application/json'
        }

    });
    const resp= await response.json()
    return resp;}
    catch(error){
        return error.message
    }
}

function* fetchUsers(action){

    try{
        const users=yield call(getApi);
        yield put({type:'GET_USERS_SUCCESS',users:users})
    }

    catch(error){

        yield put({type:'GET_USERS_FAIL',message:error.message})

    }
}

function* userSaga(){
    yield takeEvery('GET_USERS_REQUESTED',fetchUsers)
}

export default userSaga;