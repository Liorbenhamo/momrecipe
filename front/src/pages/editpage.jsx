import { useLocation } from "react-router-dom";
import NavBar from "../components/navbar";
import { useContext, useState } from "react";
import { InfoContext } from "../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EditPage() {
  const navigate = useNavigate();
  const info2 = useContext(InfoContext);
  const location = useLocation();
  const { info } = location.state;
  const [speinfo, setSpeinfo] = useState([
    info2.filtered.filter((item) => item._id == info),
  ]);

  let name = speinfo[0][0].recipename;
  let photo = speinfo[0][0].imgurl;
  let ingredints = speinfo[0][0].ingredints;
  let description = speinfo[0][0].makingdescription;

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
    console.log(speinfo);
    await axios.put("https://momsrecipe-api.onrender.com/putre", {
      _id: info,
      recipename: name,
      imgurl: photo,
      ingredints: ingredints,
      makingdescription: description,
    });
    navigate("/");
  };

  return (
    <div>
      <NavBar />
      <div>
        <label>recipe name</label>
        <br />
        <input
          defaultValue={`${speinfo[0][0].recipename}`}
          onChange={namechange}
          type="text"
        />
      </div>
      <div>
        <label>photo URL:</label>
        <br />
        <textarea
          onChange={photochange}
          defaultValue={`${speinfo[0][0].imgurl}`}
          type="text"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div>
        <label>ingredints:</label>
        <br />
        <textarea
          defaultValue={`${speinfo[0][0].ingredints}`}
          onChange={ingredintschange}
          type="text"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div>
        <label>cooking description:</label>
        <br />
        <textarea
          defaultValue={`${speinfo[0][0].makingdescription}`}
          onChange={descriptionchange}
          type="text"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <button onClick={handleclick}>edit recipe</button>
    </div>
  );
}

export default EditPage;
