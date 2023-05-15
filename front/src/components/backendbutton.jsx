import { Link, useLocation } from "react-router-dom";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
function BackEndButton(props) {
  return (
    <div>
      <Link to={`/${props.path}`} state={{ info: `${props.info}` }}>
        <Stack justifyContent="center" direction="row">
          <Button variant="contained">{props.roll}</Button>
        </Stack>
      </Link>
    </div>
  );
}

export default BackEndButton;
