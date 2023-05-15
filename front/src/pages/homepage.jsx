import { useEffect } from "react";
import Card from "../components/card";
import { InfoContext } from "../App";
import { useState, useContext } from "react";
import NavBar from "../components/navbar";
import BackEndButton from "../components/backendbutton";
import "./css/homepage.css";

function HomePage() {
  console.log("here i am");
  const info2 = useContext(InfoContext);
  console.log("loll i am");
  useEffect(() => {
    const test = async () => {
      try {
        const res = await fetch("https://momsrecipe-api.onrender.com");
        info2.setJson(await res.json());
      } catch (err) {
        console.log(err);
      }
    };
    test();
    console.log(info2.json);
  }, []);
  useEffect(() => {
    info2.setFiltered(info2.json);
  }, [info2.json]);
  return (
    <div id="backgroung">
      <NavBar />
      <div className="center">
        {info2.loged ? (
          <BackEndButton path="addrecipe" roll="add" />
        ) : (
          <h1>welcome to iris recipe website</h1>
        )}
      </div>
      <div id="recipesflex">
        {info2.filtered.map((item, index) => (
          <Card
            key={index}
            id={item?._id}
            name={item?.recipename}
            descrption={item?.ingredints}
            urlImg={item?.imgurl}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
