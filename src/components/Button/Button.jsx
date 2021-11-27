import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  if (props.id === "voltar") {
    return (
      <button
        className={`${styles.button__voltar} ${styles.button_text__model1}`}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
  }

  if (props.id === "calcular") {
    return (
      <button
        className={`${styles.button__calcular} ${styles.button_text__model1}`}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
  }

  if (props.id === "salvar") {
    return (
      <button
        className={`${styles.button__salvar} ${styles.button_text__model1}`}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
  }

  if (props.id === "cancelar") {
    return (
      <button
        className={`${styles.button__cancelar} ${styles.button_text__model1}`}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
  }

  if (props.id === "adicionar_imagem") {
    return (
      <button
        className={`${styles.button__adicionar_imagem} ${styles.button_text__model1}`}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
  }

  if (props.id === "login") {
    return (
      <button
        className={`${styles.button__login} ${styles.button_text__model1}`}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
  }
};

export default Button;
