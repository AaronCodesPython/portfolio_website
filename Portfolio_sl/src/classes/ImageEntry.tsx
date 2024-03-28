import styles from './ImageEntry.module.css'

interface Photo{
    title:string;
    categories:string[];
    publishedAt:string;
    imageUrl:string;
    _id:string;
}
function ImageEntry({photo} : {photo:Photo}){
    return <div onClick={ () => window.open(photo.imageUrl)} className={styles.outerDiv}><img className= {styles.image}src={photo.imageUrl}></img> <div className={styles.textWrap}><p className={styles.title}>{photo.title}</p></div> </div>;
}

export default ImageEntry;