import { InfoContext } from "../App";
import { useState, useContext } from "react";
import NavBar from "../components/navbar";
import { useParams } from "react-router-dom";
import "./css/recipepage.css";
import BackEndButton from "../components/backendbutton";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RecipePage() {
  const navigate = useNavigate();
  const info2 = useContext(InfoContext);
  let { id } = useParams();
  const [speinfo, setSpeinfo] = useState(
    info2.filtered.filter((item) => item._id == id)
  );
  const deleterecipe = async () => {
    try {
      await axios.delete("https://momsrecipe-api.onrender.com/deletere", {
        data: {
          _id: speinfo[0]._id,
        },
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
    <div id="screen">
      <NavBar loginout="logout" />

      <div id="fatherrecipe">
        <img src={speinfo[0]?.imgurl} alt={speinfo[0]?.recipename} />
        <div id="minifatherdiv">
          <h1>{speinfo[0]?.recipename}</h1>

          <div>
            <strong>ingredints:</strong>
            {speinfo[0]?.ingredints}
          </div>
          <div>
            <strong>instruction:</strong>
            {speinfo[0]?.makingdescription}
          </div>
          <div id="buttonsflex">
            {info2.loged ? (
              <BackEndButton info={id} path="editrecipe" roll="edit" />
            ) : (
              <div></div>
            )}
            {info2.loged ? (
              <Stack direction="row">
                <Button onClick={deleterecipe} variant="contained">
                  delete
                </Button>
              </Stack>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipePage;
