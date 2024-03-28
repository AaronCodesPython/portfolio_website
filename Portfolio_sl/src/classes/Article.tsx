
/*
const builder = imageUrlBuilder(sanityClient);
function urlFor(source:string) {
	return builder.image(source);
}*/

import { useNavigate } from 'react-router-dom';
import styles from './Article.module.css';
interface Post {
    title:string;
    publishedAt:string;
	slug:string;
	_id:string;
}


const Category = ({ post, bgGrey }: { post: Post; bgGrey: boolean }) => {
	const releaseDate = new Date(post.publishedAt);
	const formattedDay = releaseDate.getDate() < 10 ? '0' + releaseDate.getDate() : releaseDate.getDate();
	const formattedMonth = releaseDate.getMonth() < 10 ? '0' +  releaseDate.getMonth() :  releaseDate.getMonth();
	const navigate = useNavigate();
	return (
		<div className={styles.outerDiv} style={{backgroundColor: bgGrey?"#1A1A1A":"#2B2B2B"}} onClick={
			() => navigate(`/projects/${post.slug}`)
		}>
			<h4 className={styles.heading}>{post.title}</h4>
			<h4 className={styles.date}>{formattedDay}.{formattedMonth}.{releaseDate.getFullYear()}</h4>
		</div>
	);
};

export default Category;

/*<img
				src={urlFor(category.image).url()}
				alt={category.title}
			/>*/