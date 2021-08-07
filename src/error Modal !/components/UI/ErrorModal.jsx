import React from 'react';
import Card from './Card';
import Button from './Button';
import styles from './ErrorModal.module.css';

function ErrorModal(props) {
  return (
		<div>
		<div className={styles.backdrop} onClick={props.onButtonClick} />
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
  </div>);
}

export default ErrorModal;
