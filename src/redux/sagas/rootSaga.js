import { takeLatest } from "redux-saga/effects";
import { handleGetData } from "./handlers/data";
import { GET_DATA } from "../ducks/data";

export function* watcherSaga() {
  yield takeLatest(GET_DATA, handleGetData);
}
