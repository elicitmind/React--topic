import React from 'react';
import Card from './Card';
import Button from './Button';
import styles from './ErrorModal.module.css';
import ReactDOM from 'react-dom'

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onButtonClick} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header>
        <h2 className={styles.header}>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.content}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onButtonClick}>Close</Button>
      </footer>
    </Card>
  );
};

function ErrorModal(props) {
  return (
    <>
    {ReactDOM.createPortal(<Backdrop onButtonClick={props.onButtonClick}/>, document.getElementById('backdrop-root'))}
    {ReactDOM.createPortal(<ModalOverlay {...props}/>, document.getElementById('overlay-root'))}
    </>
  );
}

export default ErrorModal;
