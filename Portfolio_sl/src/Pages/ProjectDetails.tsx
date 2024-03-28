import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from "../Client";
import styles from './PagesCss.module.css';
let index = -1;
interface Post{
    title:string;
    publishedAt:string;
    body:bodyBlock[];
    images: string[];
    
	_id:string;
}

interface bodyBlock{
    _type :string;
    text :string;
    children: bodyBlock[],
}


function ProjectDetails() {
    index = -1;
    const { projectName } = useParams();
    // now we fetch rest data with the given slug
   
    const [articleData, setArticleData] = useState<Post[]| null>(null); 
    useEffect(() => {
        
        sanityClient.fetch(
            `*[_type == "post" && slug.current == "${projectName}"]{
                title,
                publishedAt,
                body,
                "images": body[_type == 'image'].asset -> url,
                _id
              }`
        ).then((data) =>{
            setArticleData(data);
        }).catch(console.error);
        
        //.then((data) => setArticleData(data)).catch(console.error);
    });

    
    return (
    <div className={styles.outerDiv}>
        
       
        {articleData &&
					articleData.map((article) => (
						<div>
                            <h1 className={styles.heading}>{article.title}</h1>
                            {article.body.map((paragraph) => (
                                <div>
                                    {renderBlock(paragraph, article.images)}
                                </div>
                            ))}
                            
                        </div>
					))}
    </div>
    );
  }
  export default ProjectDetails;


  function renderBlock(paragraph : bodyBlock, urls : string[]){
    if(paragraph._type =="block"){
        return <h1>{paragraph.children[0].text}</h1>
    }
    else if(paragraph._type == "image"){
        index+=1;
        
        return <img src={urls[index]} className={styles.image}/>
    }
  }
