import { useState, useContext, useEffect } from "react";
import { InfoContext } from "../App";
import NavBar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./css/loginpage.css";
import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const doSubmit = (data) => {
    console.log(data);
    for (let user of users) {
      if (user.password === data.password && user.username === data.username) {
        info2.setLoged(true);
        navigate("/");
      }
    }
  };

  const info2 = useContext(InfoContext);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const users = async () => {
      try {
        const res = await fetch("http://localhost:3000");
        setUsers(await res.json());
      } catch (err) {
        console.log(err);
      }
    };
    users();
  }, []);

  return (
    <div id="body">
      <NavBar />
      <div className="cardfather">
        <div className="card">
          <form onSubmit={handleSubmit(doSubmit)}>
            <div>
              <h2>log in:</h2>
              <br />
              <label htmlFor="username">
                <strong>username:</strong>
              </label>
              <input {...register("username", { required: true })} />
              <br />
              <br />
            </div>
            <div>
              <label htmlFor="username">
                <strong>password:</strong>
              </label>
              <input
                type="password"
                {...register("password", { required: true })}
              />
              <br />
              <br />
            </div>
            {errors.exampleRequired && <div>This field is required</div>}
            <div>
              <Stack direction="row" spacing={2}>
                <Button color="inherit" type="submit" variant="outlined">
                  submit
                </Button>
                {/* <input value="submit" type="submit" /> */}
              </Stack>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
