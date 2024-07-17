import styles from "./item.module.css";

export default function Item({ item }) {
  return (
    <div>
      <div className={styles.itemContainer} key={item.id}>
        <div className={styles.itemImage}>
          <img className={styles.image}
            src={
              `https://spoonacular.com/cdn/ingredients_100x100/` + item.image
            }
            alt=""
          />
        </div>
        <div className={styles.itemDetailsContainer}>
          <div className={styles.itemName}>{item.name}</div>
          <div className={styles.itemAmmount}>
            {item.amount} {item.unit}
          </div>
        </div>
      </div>
    </div>
  );
}
