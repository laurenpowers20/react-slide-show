import SlideShow from "./SlideShow";
import anchor from "./images/anchor.png";
import pizza from "./images/pizza.png";
import beer from "./images/beer.png";
import camera from "./images/camera.png";
import party from "./images/party.png";
import tudor from "./images/tudor.png";

function Slides() {
  const slides = [
    {
      image: `${pizza}`,
      caption: "one",
    },
    {
      image: `${camera}`,
      caption: "two",
    },
    {
      image: `${beer}`,
      caption: "three",
    },
    {
      image: `${party}`,
      caption: "four",
    },
    {
      image: `${tudor}`,
      caption: "five",
    },
    {
      image: `${anchor}`,
      caption: "six",
    },
  ];
  return (
    <>
      <main>
        <SlideShow slides={slides} />
      </main>
    </>
  );
}

export default Slides;
