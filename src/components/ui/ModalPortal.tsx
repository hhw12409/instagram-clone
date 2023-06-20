import React from "react";
import reactDom from "react-dom";

type Props = {
  children: React.ReactNode;
};

export default function ModalPortal({ children }: Props) {
  // 서버사이드 렌더링시는 미처리
  // 브라우저 환경에서만 작동하게끔 처리
  if (typeof window === "undefined") {
    return null;
  }
  const node = document.getElementById("portal") as Element;
  return reactDom.createPortal(children, node);
}
