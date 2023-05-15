import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Outlet, Link } from "react-router-dom";

function CardImg(props) {
  return (
    <Link to={`/recipe/${props.id}`}>
      <div>
        <Card sx={{ maxWidth: 345, margin: 3 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={props.urlImg}
              alt={props.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </Link>
  );
}

export default CardImg;
