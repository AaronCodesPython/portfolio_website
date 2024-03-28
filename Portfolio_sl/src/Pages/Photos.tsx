import Images from "../widgets/AllImages";
import styles from "./PagesCss.module.css"

export default function Photos(){
    return (
        <div className={styles.outerDiv}>
            <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur odio velit quia vero nisi quaerat accusamus, incidunt corrupti. Maiores provident consequatur animi beatae eius, expedita blanditiis rerum harum. Aliquam, temporibus.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur odio velit quia vero nisi quaerat accusamus, incidunt corrupti. Maiores provident consequatur animi beatae eius, expedita blanditiis rerum harum. Aliquam, temporibus</p>
            <br/>
            <Images query='*[_type == "photo"]{
title,
publishedAt,
_id,
"imageUrl": image.asset->url
}'></Images>
        </div>
    );
}