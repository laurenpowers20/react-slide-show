import SlideShow from "./SlideShow";
import pizza from "./images/pizza.png";
import beer from "./images/beer.png";
import camera from "./images/camera.png";
import party from "./images/party.png";

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
