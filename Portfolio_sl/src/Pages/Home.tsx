import Posts from '../widgets/AllPosts';
import UrgentBox from '../widgets/UrgentBox';
import styles from './PagesCss.module.css';

export default function Home(){
    return (
        <div className={styles.outerDiv}>
            <center><p className={styles.heading}>WELCOME TO MY PERSONAL WEBSITE!</p></center>
            <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur odio velit quia vero nisi quaerat accusamus, incidunt corrupti. Maiores provident consequatur animi beatae eius, expedita blanditiis rerum harum. Aliquam, temporibus.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur odio velit quia vero nisi quaerat accusamus, incidunt corrupti. Maiores provident consequatur animi beatae eius, expedita blanditiis rerum harum. Aliquam, temporibus</p>
            <UrgentBox></UrgentBox>
            <br></br>
            <center><p className={styles.subheading}>LATEST POSTS</p></center>
            <Posts query='*[_type == "post"]{
                title,
                publishedAt,
                _id,
                "slug": slug.current
              }'></Posts>
        </div>
    );
}