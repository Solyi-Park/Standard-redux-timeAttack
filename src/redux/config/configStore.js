import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos";


//5. combineReducers안에 리덕스가 실제 동작하는 코드" reducer"를 넣는다.
const rootReducer = combineReducers({
  todos: todos,
  // 여기에 리덕스가 실제 동작하는 코드 들어감.
});

const store = createStore(rootReducer);

export default store;

//4. 이거 만들기
