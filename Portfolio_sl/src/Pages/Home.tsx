import Posts from '../widgets/AllPosts';
import UrgentBox from '../widgets/UrgentBox';
import styles from './PagesCss.module.css';

export default function Home(){
    return (
        <div className={styles.outerDiv}>
            <center><p className={styles.heading}>WELCOME TO MY PERSONAL WEBSITE!</p></center>
            <p className={styles.text}>I'm Aaron, a 19 year old Abitur Student in Germany. <br/><br/>This year I will start my Studies 
            in Computer Science at <a href="https://ethz.ch" className={styles.sidelinks}>ETH-Zurich</a>. I enjoy <a href="/projects" className={styles.sidelinks}>Coding</a>, <a href="/photos" className={styles.sidelinks}>Travelling</a>, <a href="/hobby" className={styles.sidelinks}>Gaming</a> and much more!
            <br/>This website contains things I feel are interesting enough to put on the internet, enjoy!</p>
            <UrgentBox></UrgentBox>
          
            <center><p className={styles.subheading}>LATEST POSTS</p></center>
            <Posts query='*[_type == "post"]{
                title,
                publishedAt,
                _id,
                "slug": slug.current
              } | order(publishedAt desc)'></Posts>
        </div>
    );
}