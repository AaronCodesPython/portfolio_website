import { useEffect, useState } from "react";
import sanityClient from "../Client";
import ImageEntry from "../classes/ImageEntry";
import styles from './AllImages.module.css'
interface Photo{
    title:string;
    categories:string[];
    publishedAt:string;
    imageUrl:string;
    _id:string;
}

const Images = ({query}:{query:string}) =>{

    const [images, setImages] = useState<Photo[] | null>(null); 
    useEffect(() => {
        sanityClient.fetch(
            query
        ).then((data) => setImages(data)).catch(console.error);
    });
   
    return <div className={styles.imageList}>
     
        {images &&
					images.map((image) => (
						<div className={styles.imageListItem}><ImageEntry key={image._id} photo={image} /></div>
					))}
 
    </div>
}
export default Images;