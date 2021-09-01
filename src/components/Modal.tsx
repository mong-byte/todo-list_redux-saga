import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";

interface ModalPropsTypes {
  noticeMsg: string;
  closeModal: () => void;
}

const Modal: React.FC<ModalPropsTypes> = ({ noticeMsg, closeModal }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  // 내부 modal 영역이 아닌 외부영역을 클릭했을때 modal을 닫는 함수
  const clickOutSideModal = useCallback(
    (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!modalRef.current || !modalRef.current.contains(target)) {
        closeModal();
      }
    },
    [closeModal]
  );

  // 윈도우 전체에 click을 감지하는 Event를 적용, 이후 cleanUp 함수 적용
  useEffect(() => {
    window.addEventListener("click", clickOutSideModal);
    return () => window.removeEventListener("click", clickOutSideModal);
  }, [clickOutSideModal]);

  return (
    <ModalWrapper>
      <ModalContainer>
        <ModalContents ref={modalRef}>
          <ModalTextBox>{noticeMsg}</ModalTextBox>
          <ModalButton onClick={closeModal}>close</ModalButton>
        </ModalContents>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default Modal;

const ModalWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
`;

const ModalContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.1);
`;

const ModalContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20%;
  border-radius: 20px;
  background-color: white;
`;

const ModalTextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

const ModalButton = styled.button`
  all: unset;
  margin-bottom: 20px;
  padding: 8px 10px;
  border-radius: 10px;
  box-shadow: 10px 5px 20px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;
