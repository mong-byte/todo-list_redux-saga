import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { TodoInput, TodoList } from "src/components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreater } from "src/store/reducer/actionCreater";
import { RootState } from "src/store";
import Modal from "src/components/Modal";
import CancelIcon from "src/assets/CancelIcon";

const TodoPage: React.FC = () => {
  const [noticeMsg, setNoticeMsg] = useState<string>("");
  const [inputOpen, setInputOpen] = useState(false);
  const { loadTodo } = actionCreater;
  const dispatch = useDispatch();
  const { msg } = useSelector((state: RootState) => state.reducer);

  // 최초 로딩시 Dispatch를 사용하여 데이터를 받아옴
  useEffect(() => {
    dispatch(loadTodo());
  }, [dispatch, loadTodo]);

  // 받아온 데이터에서 msg가 있을경우, noticeMsg를 업데이트
  useEffect(() => {
    if (msg) {
      setNoticeMsg(msg);
    }
  }, [msg]);

  // 닫기, 모달 외부영역을 클릭했을때 noticeMsg를 초기화
  const closeModal = useCallback(() => {
    setNoticeMsg("");
  }, [setNoticeMsg]);

  // 반응형 디자인에서 input을 열거나 닫는곳에 사용 되는 함수
  const toggleMoblieOpen = () => {
    setInputOpen(!inputOpen);
  };

  return (
    <>
      <TodoContainer>
        <TodoInput inputOpen={inputOpen} />
        <TodoList />
        <MobileToggleButton inputOpen={inputOpen} onClick={toggleMoblieOpen}>
          <CancelIcon />
        </MobileToggleButton>
      </TodoContainer>
      {noticeMsg && <Modal noticeMsg={noticeMsg} closeModal={closeModal} />}
    </>
  );
};

export default TodoPage;

export interface ToggleButtonProps {
  inputOpen: boolean;
}

const TodoContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 0px 20px;
`;

const MobileToggleButton = styled.button<ToggleButtonProps>`
  all: unset;
  display: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 5px;
  right: 5px;
  padding: 10px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.4);
  transform: rotate(${(props) => (props.inputOpen ? "0deg" : "45deg")});
  transition: transform 0.3s ease-in-out;

  svg {
    fill: white;
    height: 34px;
    width: 34px;
  }

  @media only screen and (max-width: 768px) {
    display: flex;
  }
`;
