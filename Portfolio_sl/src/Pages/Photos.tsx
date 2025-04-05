import Images from "../widgets/AllImages";
import styles from "./PagesCss.module.css"

export default function Photos(){
    return (
        <div className={styles.outerDiv}>
            
            <br/>
            <Images query='*[_type == "photo"]{
title,
publishedAt,
_id,
"imageUrl": image.asset->url
} | order(publishedAt desc)'></Images>
        </div>
    );
}