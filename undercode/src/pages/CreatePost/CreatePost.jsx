import styles from "./CreatePost.module.css";
import { useState, useEffect, useNavigate } from "react";
import { useAutValue } from "../../context/AuthContext";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventeDefault();
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
        <button className="btn">Postar</button>
        {/* {!loading && <button className="btn">Postar</button>}
        {loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}

        {error && <p className="error">{error}</p>}
        {success && <p className="sucess">Cadastro realizado com sucesso</p>} */}
      </form>
   </div>
  );
};

export default CreatePost;
