import React from "react";
import { NavLink as Link } from "react-router-dom";
import styles from "./CardHomeDiversos.module.css";

const CardHomeDiversos = () => {
  return (
    <div className={styles.card_homediversos}>
      <div className={styles.card_homediversos_curiosidades}>
        <div className={styles.curiosidades_titulo}>
          <h1>Curiosidades</h1>
        </div>

        <div className={styles.curiosidades_item}>
          <div className={styles.curiosidades_item_img}>
            <img src="./images/star.png" alt="Estrela" />
          </div>
          <div curiosidades_item_info>
            <h3>Qual a diferença entre um carro elétrico e um híbrido?</h3>
            <p>O carro elétrico, como o nome já diz, é movido apenas por ...</p>
          </div>
        </div>

        <div className={styles.curiosidades_item}>
          <div className={styles.curiosidades_item_img}>
            <img src="./images/star.png" alt="Estrela" />
          </div>
          <div curiosidades_item_info>
            <h3>A manutenção do carro elétrico é mais cara?</h3>
            <p>Embora sejam mais caros, os carros elétricos são mais ...</p>
          </div>
        </div>

        <div className={styles.curiosidades_item}>
          <div className={styles.curiosidades_item_img}>
            <img src="./images/star.png" alt="Estrela" />
          </div>
          <div curiosidades_item_info>
            <h3>Carro elétrico pode dar choque?</h3>
            <p>Não. Os carros elétricos são desenvolvidos para não ...</p>
          </div>
        </div>

        <div className={styles.curiosidades_vejamais}>
          <Link to="/curiosidades" className={styles.link}>
            Veja mais
          </Link>
        </div>
      </div>

      <div className={styles.card_homediversos_outros}>
        <div className={styles.outros_card}>
          <div className={styles.item_preco_titulo}>
            <h1>
              O mais acessível e o mais caro{" "}
              <img src="./images/BR - Brazil.png" alt="Brasil" />
            </h1>
          </div>
          <div className={styles.item_preco_carro_info}>
            <div className={styles.item_preco_carro_img}>
              <img src="./images/jac.png" alt="Carro Elétrico" />
            </div>
            <div className={styles.item_preco_carro_descricao}>
              <h6>JAC E-JS1</h6>
              <p>A partir de R$ 149.900</p>
            </div>
          </div>
          <div className={styles.item_preco_carro_info}>
            <div className={styles.item_preco_carro_img}>
              <img src="./images/etron.png" alt="Carro Elétrico" />
            </div>
            <div className={styles.item_preco_carro_descricao}>
              <h6>Audi e-tron</h6>
              <p>A partir de R$ 529.990</p>
            </div>
          </div>
          <div className={styles.item_preco_fonte}>
            <p>Fonte: Montadoras</p>
          </div>
        </div>

        <div className={styles.outros_card}>
          <div className={styles.item_dados_titulo}>
            <h1>
              Total de vendas anuais VE{" "}
              <img src="./images/BR - Brazil.png" alt="Brasil" />
            </h1>
          </div>
          <div className={styles.item_dados_info}>
            <div className={styles.item_dados_img_resultado}>
              <img src="./images/dados.png" alt="Dados resultado" />
            </div>
            <div className={styles.item_dados_img_grafico}>
              <img src="./images/grafico.png" alt="Dados gráfico" />
            </div>
          </div>
          <div className={styles.item_dados_fonte}>
            <p>Fonte : Renava/Anfavea/ABVE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHomeDiversos;