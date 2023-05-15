import NavBar from "../components/navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PostPage() {
  let name;
  let photo;
  let ingredints;
  let description;
  const navigate = useNavigate();
  function namechange(e) {
    name = e.target.value;
    console.log(name);
  }
  function photochange(e) {
    photo = e.target.value;
    console.log(photo);
  }
  function ingredintschange(e) {
    ingredints = e.target.value;
    console.log(ingredints);
  }
  function descriptionchange(e) {
    description = e.target.value;
    console.log(description);
  }
  const handleclick = async () => {
    console.log("hello");
    try {
      await axios.post("https://momsrecipe-api.onrender.com/addrecipe", {
        recipename: name,
        imgurl: photo,
        ingredints: ingredints,
        makingdescription: description,
      });
    } catch (err) {
      if (err.response) {
        console.log("Error in the res");
      } else if (err.request) {
        console.log("Error in the req");
      } else {
        console.log("Error", err.message);
      }
    }
    navigate("/");
  };
  return (
    <div>
      <NavBar />
      <div>
        <label>recipe name:</label>
        <br />
        <input onChange={namechange} type="text" placeholder="recipe name" />
      </div>
      <div>
        <label>photo URL:</label>
        <br />
        <textarea
          onChange={photochange}
          type="text"
          cols="30"
          rows="10"
          placeholder="photo url"
        ></textarea>
      </div>
      <div>
        <label>ingredints:</label>
        <br />
        <textarea
          onChange={ingredintschange}
          type="text"
          cols="30"
          rows="10"
          placeholder="ingredints"
        ></textarea>
      </div>
      <div>
        <label>cooking description:</label>
        <br />
        <textarea
          onChange={descriptionchange}
          type="text"
          cols="30"
          rows="10"
          placeholder="cooking description"
        ></textarea>
      </div>
      <button onClick={handleclick}>add new recipe</button>
    </div>
  );
}

export default PostPage;
