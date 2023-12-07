import styles from "./CreatePost.module.css";
import { useState, useNavigate } from "react";
import { useAutValue } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocument";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const { user } = useAutValue()
  const {insertDocument, response} = useInsertDocument("posts")
 
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("")

    //validade url image
    // create tags array
    //Check all values

   
    insertDocument({
      title,
      image,
      body,
      tags,
      uid:user.uid,
      createdBy: user.displayName
    })

    //Redirect
  
   

  };
  return (
   <div className={styles.createPost}>
     <h2>Criar Post</h2>
      <p>O que quer compartilhar hoje?</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título do Post</span>
          <input
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
            placeholder="O Melhor título"
          />
        </label>
        <label>
          <span>URL da imagem</span>
          <input
            type="text"
            name="image"
            onChange={(e) => setImage(e.target.value)}
            value={image}
            required
            placeholder="Endereço Imagem que represente melhor o Post"
          />
        </label>
        <label>
          <span>Descrição</span>
          <textarea
            name="body"
            required
            placeholder="Descrição do Post"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>
        <label>
          <span>Tags</span>
          <input
            type="text"
            name="tags"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
            required
            placeholder="Marque algumas tags separadas por vírgulas"
          />
        </label>

        {!response.loading && <button className="btn">Postar</button>}
        {response.loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}

        {response.error && <p className="error">{response.error}</p>}
      
      </form>
   </div>
  );
};

export default CreatePost;
