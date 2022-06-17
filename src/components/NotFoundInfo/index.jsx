import styles from "./NotFoundInfo.module.scss";

function NotFoundInfo() {
  return (
    <div className={styles.block}>
      <span>🥺</span>
      <h2>Nothing to show...</h2>
      <p>Unfortunately this page does not exist on our site</p>
    </div>
  );
}

export default NotFoundInfo;
