import * as fromRouter from "react-router-redux";
import { combineReducers } from "redux";

export interface RootState {
  routing: fromRouter.RouterState;
}

export default combineReducers<RootState>({
  routing: fromRouter.routerReducer
});
