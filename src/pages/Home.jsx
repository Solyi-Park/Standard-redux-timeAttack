import React, { useState } from "react";
import styled from "styled-components";
import TodoList from "../components/TodoList";
import todos from "../redux/modules/todos";
import { useDispatch, useSelector } from "react-redux";

const Header = styled.div`
  background-color: red;
`;
const Main = styled.div`
  background-color: yellow;
`;
const Home = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
  const contentChange = (e) => setContent(e.target.value);
  const dispatch = useDispatch();

  return (  
    <div>
      <Header>
        <form>
          <input value={title} />
          <input value={content} onChange={contentChange} />
          <button
            onClick={(e) => {
              e.preventDefault();
            
              dispatch({
                type: "ADD_TODO",
                payload: {
                  id: 1,
                  title: "타이틀",
                  body: "바디",
                  isDone: false,
                },
              });
            }}
          >
            추가하기
          </button> 
        </form>
      </Header>
      <Main>
        <TodoList ListIsDone={false} />
        <TodoList ListIsDone={true} />
      </Main>
    </div>
  );
};

export default Home;
