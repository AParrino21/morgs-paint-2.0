import React from "react";
import "./Gallery.css";
import { AuthContext } from "../../context/AuthContext";
import { GalleryData } from "../../types";
import ViewPainting from "../../components/ViewPainting/ViewPainting";

const Gallery = () => {
  const { oils, mixedMedia, addToCart, galleryHeader, cartItems } =
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
    <div>
      {paintingPage === 0 && (
        <div>
          <div>
            <img className="header" src={galleryHeader} alt="header" />
          </div>
          <div className="gallery-container">
            {mixedMedia?.map((mixed) => (
              <div key={mixed._id} className="gallery-item">
                <h2>{mixed.name}</h2>
                <br />
                <p>{mixed.bio}</p>
                <br />
                <p>{mixed.size}</p>
                <br />
                <img
                  onClick={(e) => viewGalleryPainting(e)}
                  className="gallery-img"
                  id={mixed._id}
                  src={mixed.src}
                  alt="painting"
                />
              </div>
            ))}

            {oils?.map((oil) => (
              <div key={oil._id} className="gallery-item">
                <h2>{oil.name}</h2>
                <br />
                <p>{oil.description}</p>
                <br />
                <p>{oil.size}</p>
                <br />
                <img
                  onClick={(e) => viewGalleryPainting(e)}
                  className="gallery-img"
                  id={oil._id}
                  src={oil.image}
                  alt="painting"
                />
              </div>
            ))}
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
    </div>
  );
};

export default Gallery;
