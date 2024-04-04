import { Outlet } from "react-router-dom";
import Posts from "../widgets/AllPosts";
import styles from './PagesCss.module.css';

export default function Projects(){
    return (
        <div className={styles.outerDiv}>
            <center><h1 className={styles.heading}>Projects</h1></center>
            <p className={styles.text}>This section includes some of my projects, mostly coding related ones, but also some others!
            If you have any questions about a project of mine, feel free to <a href="mailto:aaron.glaser.05@gmail.com" className={styles.sidelinks}>Contact</a> me, I love talking about my projects! :)</p>
            <Posts query='*[_type == "post" && references(*[_type == "category" && title == "Projects"][0]._id)]{
                title,
                publishedAt,
                _id,
                "slug": slug.current
            } | order(publishedAt desc)'></Posts>
            <Outlet />
        </div>
    );
}