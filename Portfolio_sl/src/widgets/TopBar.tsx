import styles from './TopBar.module.css';
function TopBar(){
    return <div className={styles.outerDiv}><a className={styles.headText}  href="/">Aaron.Glaser</a></div>;
}

export default TopBar;