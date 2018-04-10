import combineReducers from "redux/lib/combineReducers";
import { routerReducer } from "react-router-redux/reducer";
import core from "./modules/core";
import { reducer as formReducer } from "redux-form"

export default combineReducers({
  [core.constants.NAME]: core.reducer,
  router: routerReducer,
  form: formReducer,
});
