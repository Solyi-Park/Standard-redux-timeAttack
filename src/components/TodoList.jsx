import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";


export default function TodoList({ ListIsDone }) {

  const todos = useSelector((a) =>{

    return a.todos
  })
  return (
    <div>
      <SectionTitle> {ListIsDone ? "Done!" : "Working"}</SectionTitle>
      {todos.map((item) => {
        return (
          <TodoCard key={item.id}>
            <Title>{item.title}</Title>
            <Content>{item.content}</Content>
            <ButtonsWrapper>
              <Button>{item.isDone ? "완료" : "취소"}</Button>
              <Button>삭제</Button>
            </ButtonsWrapper>
          </TodoCard>
        );
      })}
    </div>
  );
}

const SectionTitle = styled.h1`
  font-size: 35px;
  font-weight: 800;
`;
const TodoCard = styled.div`
  width: 300px;
  height: 250px;
  border: 2px solid green;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
`;
const Content = styled.p`
  font-size: 16px;
`;
const ButtonsWrapper = styled.div`
  display: flex;
`;
const Button = styled.button`
  padding: 10px 15px;

`;
