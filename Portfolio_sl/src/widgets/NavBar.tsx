import { NavLink } from 'react-router-dom';
import elements from '../data/Names';
import styles from './NavBar.module.css';
function NavBar(){
    const elems = elements.map((item:Array<string>) => (<li key={item[2]}><NavLink className={styles.links} to ={item[1]}>{item[0]}</NavLink></li>));
    return <div className={styles.surroundDiv}><ul className={styles.listStyle}>{elems}</ul></div>;
}
export default NavBar;