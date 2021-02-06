import React, { useState, useEffect, useRef } from "react";
import ReactDom from "react-dom";
import usePrevious from "../../hooks/usePrevious";
import Close from "../../assets/svg/close.svg";
import { Dialog, CloseButton, Content, Background } from "./styles";

const ModalComponent = ({
  id,
  onExitClick,
  isOpen,
  children,
  theme = "light",
}) => {
  const getModalRoot = () =>
    typeof document !== "undefined"
      ? document.getElementById("modal-root")
      : null;
  const getInitialElement = () => document.activeElement;
  const getOriginalBodyStyle = () =>
    window.getComputedStyle(document.body).overflow;
  const [fadeType, setFadeType] = useState(null);
  const prevIsOpen = usePrevious(isOpen);
  const [originalElement] = useState(getInitialElement());
  const [originalBodyStyle] = useState(getOriginalBodyStyle());
  const [modalRoot] = useState(getModalRoot);
  const backgroundRef = useRef();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onEscKeyDown, false);
    setTimeout(() => {
      setFadeType("in");
    }, 0);
    return () => {
      document.body.style.overflow = originalBodyStyle;
      window.removeEventListener("keydown", onEscKeyDown, false);
    };
  }, [originalBodyStyle]);

  useEffect(() => {
    return () => {
      console.log("returning focus to original element");
      if (originalElement) {
        originalElement.focus();
      }
    };
  }, [originalElement]);

  useEffect(() => {
    if (isOpen && !prevIsOpen) {
      setFadeType("out");
    }
  }, [isOpen, prevIsOpen]);

  const transitionEnd = (e) => {
    if (e.propertyName !== "opacity" || fadeType === "in") return;
    if (fadeType === "out") {
      onExitClick();
    }
  };

  const onEscKeyDown = (e) => {
    if (e.key !== "Escape") {
      return;
    }
    setFadeType("out");
  };

  const handleClick = (e) => {
    e.preventDefault();
    setFadeType("out");
  };

  if (!modalRoot) {
    return null;
  }

  return ReactDom.createPortal(
    <div
      aria-label='modal'
      aria-modal='true'
      tabIndex={-1}
      id={id}
      className={`Modal fade-${fadeType}`}
      onTransitionEnd={transitionEnd}
    >
      <Dialog>
        <CloseButton onClick={handleClick} theme={theme}>
          <Close />
        </CloseButton>
        <Content>{children}</Content>
      </Dialog>
      <Background
        onMouseDown={handleClick}
        ref={backgroundRef}
        role='button'
        tabIndex={0}
      />
    </div>,
    modalRoot,
  );
};

export default ModalComponent;
