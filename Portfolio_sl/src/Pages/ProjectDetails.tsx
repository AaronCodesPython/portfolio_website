import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from "../Client";
import styles from './PagesCss.module.css';
interface Post{
    title:string;
    publishedAt:string;
    body:bodyBlock[];
	_id:string;
}

interface bodyBlock{
    _type :string;
    _children: bodyBlock[];
    text :string|null;
    asset :asset|null;
}

interface asset{
    _ref:string;
    _type:string;
}
function ProjectDetails() {
    const { projectName } = useParams();
    // now we fetch rest data with the given slug
   
    const [articleData, setArticleData] = useState<Post[]| null>(null); 
    useEffect(() => {
        
        sanityClient.fetch(
            `*[_type == "post" && slug.current == "${projectName}"]{
                title,
                publishedAt,
                body,
                _id
              }`
        ).then((data) =>{
            setArticleData(data);
        }).catch(console.error);
        
        //.then((data) => setArticleData(data)).catch(console.error);
    });

    let index = 0;
    return (
    <div className={styles.outerDiv}>
        
       
        {articleData &&
					articleData.map((article) => (
						<div>
                            <p>{projectName}</p>
                            <h1 className={styles.heading}>{article.title}</h1>
                            {article.body.map((paragraph) => (
                                <>
                                    <p className={styles.text}>{paragraph._type ?? " "}</p>
                                
                                </>
                            ))}
                            
                        </div>
					))}
    </div>
    );
  }
  export default ProjectDetails;

  /*

*[_type == "post" && slug.current == "aaron-der-g-hat-1-trillion-usd-gewonnen"]{
                title,
                publishedAt,
                "images": body[_type == 'image'].asset -> url,
                _id
              }

0:{…} 4 properties
title:Aaron Der G hat 1 TRILLION USD GEWONNEN
publishedAt:2024-03-22T15:49:00.000Z
images:[…] 1 item
0:https://cdn.sanity.io/images/cp7vy88r/production/c0e057edef6ac964a11477a983e8be0d2d40e43b-627x918.png
_id:918f64b5-c5a4-4848-a9de-64f218ca6e1
  */
