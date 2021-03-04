import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import ModalComponent from "../../Modal";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { Row, Column } from "./styles";
import Alert from "../../../assets/svg/alert.svg";

const PleaseReadModal = ({ forceRender = false, onClose }) => {
  const getModalRoot = () =>
    typeof document !== "undefined"
      ? document.getElementById("modal-root")
      : null;
  const [modalRoot, setModalRoot] = useState(getModalRoot);
  const [isModalOpen, setIsModalOpen] = useState(forceRender);
  const [viewed, setViewed] = useLocalStorage("viewedPleaseRead", "false");

  const closeModal = () => {
    setViewed("true");
    setIsModalOpen(false);
    if (onClose) {
      onClose();
    }
  };

  useEffect(() => {
    console.log("viewed useEffect", viewed);
    if (viewed === "false" && !forceRender) {
      setIsModalOpen(true);
    }
  }, [forceRender, viewed]);

  useEffect(() => {
    if (modalRoot === null) {
      setTimeout(() => {
        setModalRoot(getModalRoot);
      }, 100);
    }
  }, [modalRoot, setModalRoot]);

  if (!isModalOpen || !modalRoot) {
    return null;
  }
  return (
    <ModalComponent
      id='pleaseReadModal'
      isOpen={isModalOpen}
      onExitClick={() => closeModal()}
      theme='dark'
    >
      <Row>
        <Column>
          <Alert />
        </Column>
        <Column>
          <h2>Attention</h2>
          <p>
            It's looks like you might be new here. To best understand the
            context and purpose of this information, please visit:
          </p>
          <ul className='unstyled'>
            <li>
              <Link to='/mission'>Mission Statement</Link>
            </li>
            <li>
              <Link to='/blog/2020-11-23-our-philosophy-on-cancel-culture/'>
                Thoughts on Cancel Culture
              </Link>
            </li>
            <li>
              {/* <Link to='/blog/2020-11-23-what-to-do-if-you-see-a-profile-for-someone-you-respect/'>
                What do do if someone you respect has a profile
              </Link> */}
            </li>
          </ul>
        </Column>
      </Row>
    </ModalComponent>
  );
};

export default PleaseReadModal;
