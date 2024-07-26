import React from "react";
import "./Home.css";
import { AuthContext } from "../../context/AuthContext";
import CakeGirlSeries from "../CakeGirlSeries/CakeGirlSeries";
import ViewPainting from "../../components/ViewPainting/ViewPainting";
import { Divider } from "@mui/material";
import { GalleryData } from "../../types";
import WeddingImage from "./wedding.jpg"

const Home = () => {
  const { oils, mixedMedia, galleryHeader, addToCart, cartItems } =
    React.useContext(AuthContext);
  const [paintingPage, setPaintingPage] = React.useState<number>(0);
  const [chosenPainting, setChosenPainting] = React.useState<
    GalleryData[] | null
  >(null);
  const [paintingIsInCart, setPaintingIsInCart] = React.useState<boolean[]>([]);

  React.useEffect(() => {
    window.scroll(0, 0);
  }, [paintingPage]);

  function viewGalleryPainting(e: React.MouseEvent<HTMLElement>) {
    const paitings: GalleryData[] = [];
    mixedMedia?.map((item) => paitings.push(item));
    oils?.map((item) => paitings.push(item));

    const clickedPainting = paitings.filter(
      (paiting) => paiting._id === e.currentTarget.id
    );

    setPaintingPage(1);

    const allArt: GalleryData[] = [];
    oils.map((o) => allArt.push(o));
    mixedMedia.map((m) => allArt.push(m));
    const viewedPainting = allArt.filter((a) => a._id === e.currentTarget.id);
    setChosenPainting(viewedPainting);

    let isInCart = cartItems.map(
      (i: any) => i.name === clickedPainting[0].name
    );
    const resultArray = isInCart.filter((value: boolean) => value === true);
    setPaintingIsInCart(resultArray);
  }

  return (
    <>
      {paintingPage === 0 && (
        <div className="home-root">
          <div>
            <img className="header" src={galleryHeader} alt="header" />
          </div>
          <div className="home-content">
            <div className="home-welcome-container">
              <p className="home-welcome-text">
                Welcome to{" "}
                <span className="home-welcome-name">Morgan Danton's</span>{" "}
                Online Art Gallery and Store
                {/* -an immersive journey into the world
                of captivating oil paintings. Explore the curated collection,
                where each stroke tells a story and every canvas is a
                masterpiece. Own a piece of art seamlessly with my user-friendly
                store. Whether you're a seasoned collector or a first-time
                buyer, I invite you to elevate your space with timeless
                elegance. */}
              </p>
            </div>
            <Divider />
            <div className="home-wedding-container">
              <p className="home-wedding-title">
                Now Accepting Wedding Portrait Commissions
              </p>
              <div className="home-wedding-content-container">
                <div className="home-wedding-img-container">
                  <img
                    className="home-wedding-img"
                    src={WeddingImage}
                    alt="wedding-portrait"
                  />
                </div>
                <div>
                  <p className="home-wedding-subtext-title">I do.</p>
                  <p className="home-wedding-subtext">
                    ..Wedding Portraits! Each unique piece is
                    meticulously hand-painted with oils on canvas.
                  </p>
                  <button
                    className="learn-more-btn"
                    onClick={() =>
                      (window.location.href = "/wedding-portraits")
                    }
                  >
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>
            <br />
            <div className="featured-container">
              <Divider />
              <br />
              <h2>FEATURED PIECE</h2>
              <br />
              <Divider />
              <br />
              <h3>Reclamation of Autumn</h3>
              <br />

              <img
                id="65810170ac87197f29f73bf7"
                onClick={(e) => viewGalleryPainting(e)}
                className="featured-img"
                src="https://res.cloudinary.com/dtodsxdoy/image/upload/v1702953278/ReclamationOfAutumn_oj7rk2.jpg"
                alt="Reclamation of Autumn"
              />

              <div className="featured-bio-container">
                <p className="featured-bio-text">
                  Introducing the latest masterpiece in Morgan's online Gallery:
                  "Reclamation of Autumn." This captivating creation, rendered
                  in oil on stretched canvas, incorporates meticulously placed
                  dried flowers and leaves, adding a touch of nature's beauty to
                  the artistic tapestry.{" "}
                </p>
                <br />
                <h3>
                  Check out Morgan's featured painting and the rest of her work
                  in the Gallery!
                </h3>
                <br />
                <button
                  className="homePageGalleryBtn"
                  onClick={() => (window.location.href = "/gallery")}
                >
                  Go To Gallery
                </button>
              </div>
            </div>

            {/* <div className="featured-container">
          <h2>FEATURED SERIES</h2>
          <Divider/>
          <br />
          <h4>Birthday Girls</h4>
          <Link to="/happy-birthday">
            <img
              className="featured-img"
              src=""
              alt="cake girl"
            />
          </Link>
        </div> */}
          </div>
        </div>
      )}
      {paintingPage === 1 && (
        <ViewPainting
          setPaintingPage={setPaintingPage}
          setChosenPainting={setChosenPainting}
          chosenPainting={chosenPainting}
          viewGalleryPainting={viewGalleryPainting}
          paintingIsInCart={paintingIsInCart}
          addToCart={addToCart}
          setPaintingIsInCart={setPaintingIsInCart}
        />
      )}
    </>
  );
};

export default Home;
