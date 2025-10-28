import * as React from "react";
import styles from "./ShoppingProductView.module.scss";
import img1 from "../assets/imgs/casa-praia.jpg";

type Product = {
  imageUrl: string;
  category?: string;
  title: string;
  price: string;
};

const ShoppingProductView: React.FC = () => {
  const sectionTitle = "Shopping Fundação Copel";

  const products: Product[] = [
    {
      imageUrl: img1,
      category: "Aluguel",
      title: "Casa na praia em Bombas/SC",
      price: "R$ 430,00 – A diária",
    },
    // adicione mais itens se precisar
    // { imageUrl: "...", category: "...", title: "...", price: "..." },
  ];

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.sectionTitle}>{sectionTitle}</h3>

      {products.map((p, idx) => (
        <article key={idx} className={styles.card} aria-label={p.title}>
          <div className={styles.media} role="img" aria-label={p.title}>
            <img className={styles.image} src={p.imageUrl} alt={p.title} />
          </div>

          <div className={styles.body}>
            {p.category && (
              <span className={styles.category}>{p.category}</span>
            )}
            <h4 className={styles.productTitle}>{p.title}</h4>
            <p className={styles.price}>{p.price}</p>
          </div>

          <div className={styles.dots} aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ShoppingProductView;
