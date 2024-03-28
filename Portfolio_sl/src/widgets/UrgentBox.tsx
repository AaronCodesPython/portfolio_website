import styles from './UrgentBox.module.css';
function UrgentBox(){
    return <div className={styles.outerBox}>
        <p className={styles.urgentText}>Important: I'm currently looking for a WG in Zurich. Feel free to <a href="mailto:aaron.glaser.05@gmail.com" className={styles.emailLink}>contact</a> me :)</p>
    </div>;
}

export default UrgentBox;