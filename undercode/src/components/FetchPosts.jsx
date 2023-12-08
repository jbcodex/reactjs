/* eslint-disable */
import styles from "./FetchPosts.module.css"
import { FaHashtag } from "react-icons/fa6";
const FetchPosts = ({post}) => {
  return (
    <>
        <div className={styles.posts}>
           
            <img src={post.image} alt={post.title}/>
            <h2>{post.title}</h2>
            <p>Por:  {post.createdBy} em: </p>
            <div className={styles.tags}>
                {post.tagsArray.map((tag, i)=>( 
                    <p key={i}><span><FaHashtag style={{marginBottom:"-1px",fontSize:"12px" ,color:"#069"}} /></span>{tag}</p>
                ))}
            </div>
           
           
            
        </div>
    </>
  )
}

export default FetchPosts