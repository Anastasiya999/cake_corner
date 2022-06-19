import styles from "./NotFoundInfo.module.scss";

const NotFoundInfo: React.FC = () => {
  return (
    <div className={styles.block}>
      <span>🥺</span>
      <h2>Nothing to show...</h2>
      <p>Unfortunately this page does not exist on our site</p>
    </div>
  );
};

export default NotFoundInfo;
