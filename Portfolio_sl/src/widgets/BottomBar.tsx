import styles from "./BottomBar.module.css"
function BottomBar(){
    return <footer className={styles.outerDiv}>
        <p>Maintained by Aaron Leonard Glaser</p>
        <div className={styles.surroundDiv}>
            <ul className={styles.linksList}>
                <li><a href ="https://github.com/AaronCodesPython">Github</a></li>
                <li><a href ="mailto:aaron.glaser.05@gmail.com">Mail</a></li>
                <li><a href="https://www.instagram.com/aaron.glasr/">Instagram</a></li>
                <li><a href="https://www.linkedin.com/in/aaron-leonard-glaser-b2587b243/">LinkedIn</a></li>
                <li>Privacy policy</li>
            </ul>
        </div>
    </footer>
}
export default BottomBar;