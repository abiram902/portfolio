import Header from "./Components/Header";
import "./App.css";
import Welcome from "./Components/Welcome";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import { useState, useEffect, useRef } from "react";

function App() {
  const [clickedItem, setClickedItem] = useState("");
  const welcomeRef = useRef(null);
  const myWorkRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    switch (clickedItem) {
      case "About":
        const aboutRect = welcomeRef?.current.getBoundingClientRect().top;
        welcomeRef?.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
        break;
      case "MyWork":
        const myWorkRect = myWorkRef?.current.getBoundingClientRect().top;
        window.scrollBy(0, myWorkRect + 90);
        break;
      case "Contact":
        const cRect = contactRef?.current.getBoundingClientRect().top;
        window.scrollBy(0, cRect + 90);
        break;
      default:
        break;
    }
  }, [clickedItem]);

  return (
    <div className="App" style={{ scrollBehavior: "smooth" }}>
      <Header clickedItem={clickedItem} onClick={setClickedItem} />
      <div id="welcome" ref={welcomeRef}>
        <Welcome />
      </div>
      <div id="projects" ref={myWorkRef}>
        <Projects />
      </div>
      <div id="contact" ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
