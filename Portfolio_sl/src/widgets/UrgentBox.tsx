import { NavLink } from 'react-router-dom';
import styles from './UrgentBox.module.css';
function UrgentBox(){
    return <div className={styles.outerBox}>
        <p className={styles.urgentText}>Important: I'm currently looking for a WG in Zurich. Feel free to <NavLink className={styles.links} to ={'/contact'}>contact</NavLink> me :)</p>
    </div>;
}

export default UrgentBox;