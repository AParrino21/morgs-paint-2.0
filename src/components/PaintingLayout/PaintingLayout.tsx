import React from "react";
import "./PaintingLayout.css";
import { AuthContext } from "../../context/AuthContext";
import {
  Button,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
} from "@mui/material";
import { PaintingData } from "../../types";

const PaintingLayout = () => {
  const { paintings } = React.useContext(AuthContext);
  const [paintingPage, setPaintingPage] = React.useState<number>(0);
  const [viewdPainting, setViewedPainting] = React.useState<PaintingData | null>(null)

  function viewPainting(e: React.MouseEvent<HTMLElement>) {

    setPaintingPage(1)
  }
  return (
    <>
      {paintingPage === 0 && (
        <div className="painting-layout-root">
          {paintings?.map((painting) => (
            <Card sx={{ width: "90%", maxWidth: 400, margin: "20px auto" }}>
              <CardHeader
                title={painting.name}
                subheader={painting.description}
              />
              <CardMedia
                component="img"
                height="300"
                image={painting.image}
                alt={painting.name}
              />
              <CardActions disableSpacing>
                <Button id={painting.id} onClick={(e) => viewPainting(e)}>VIEW</Button>
              </CardActions>
            </Card>
          ))}
        </div>
      )}
      {paintingPage === 1 && (
        <div>
            <Button onClick={() => setPaintingPage(0)}>BACK</Button>
        </div>
      )}
    </>
  );
};

export default PaintingLayout;
