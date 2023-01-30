import "./App.css";
import Slides from "./Slides";

function App() {
  return (
    <>
      <main>
        <p className="title">A Simple React Slide Show</p>
        <Slides />
        <a href="https://react-portfolio-lauren-powers.netlify.app/features">
          {" "}
          <button className="button back-button">Back to Lil' Portfolio</button>
        </a>
      </main>
    </>
  );
}

export default App;
