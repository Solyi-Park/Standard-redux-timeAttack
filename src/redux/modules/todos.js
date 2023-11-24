// import uuid from "react-uuid";
import shortid from "shortid";

//add
const ADD_TODO = "todos/ADD_TODO";

//delete
const DELETE_TODO = "todos/DELETE_TODO";

//switch
const SWITCH_TODO = "todos/SWITCH_TODO";

//title input
const UPDATE_TITLE = "todos/UPDATE_TITLE";

const initialTitleState = {
  titleInputValue: "",
};

const initialState = [
  {
    id: shortid.generate(),
    title: "타이틀",
    body: "바디",
    isDone: false,
  },
];




// export const updateTitle = (id, newTitle) => {
//   return {
//     type: UPDATE_TITLE,
//     payload: { id, newTitle },
//   };
// };

// export const addTodo = (title, body) => {
//   return { 
//     type: ADD_TODO,
//     payload: {
//       id: shortid.generate(),
//       title,
//       body,
//       isDone: false,
//     } 
//   };
// };

// export const deleteTodo = () => {
//   return { DELETE_TODO, payload };
// };
// export const switchTodo = () => {
//   return { SWITCH_TODO, payload };
// };


// 리듀서
// const title = (state = initialTitleState, action) => {
//   switch (action.type) {
//     case "UPDATE_TITLE":
//       return {

//         }
//       }

//     default:
//       return state;
//   }
// }

// const [ todos, setTodos] = useState([])
// setTodos([...todos, {id: 1, title: ~~~, body: ~~~, isDone: false }])
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      // return; //TODO: 여기 작성
      // return에는 그다음에 되었으면하는 state의 모양을 넣는다.
      return [...state, action.payload]

    case "DELETE_TODO":
      // return; //TODO: 여기 작성
      return state.filter((할일) => 할일.id !== action.payload)

    case "SWITCH_TODO":
      return; //TODO: 여기 작성
      // return state.map((할일) => )

    default:
      return state;
  }
};

export default todos;
