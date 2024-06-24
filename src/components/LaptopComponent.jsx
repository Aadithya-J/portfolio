import styles from './LaptopComponent.module.css';

const LaptopComponent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.laptopBorder}></div>
            <div className={styles.laptop}>
                <div className={styles.pad}></div>
                <div className={styles.key}></div>
                <div className={styles.screen}>
                    <div className={styles.code}></div>
                </div>
            </div>
            <div className={styles.glass}>
                <div className={styles.fume}></div>
                <div className={styles.glassShadow}></div>
            </div>
            <div className={styles.box}></div>
        </div>
    );
}

export default LaptopComponent;
