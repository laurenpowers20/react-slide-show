import SlideShow from "./SlideShow";

function Slides() {
  const slides = [
    {
      image: "Slide 1",
      caption: "one",
    },
    {
      image: "Slide 2",
      caption: "two",
    },
    {
      image: "Slide 3",
      caption: "three",
    },
    {
      image: "Slide 4",
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
