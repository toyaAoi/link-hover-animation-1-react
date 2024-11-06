import { useRef } from "react";
import customCursor from "./customCursor.js";

import yourNamePoster from "./assets/contents/your-name.jpg";
import yourNameBgVideo from "./assets/contents/your-name.mp4";
import yourNameThumb from "./assets/contents/your-name-thumb.jpg";

import spiritedAwayPoster from "./assets/contents/spirited-away.jpg";
import spiritedAwayBgVideo from "./assets/contents/spirited-away.mp4";
import spiritedAwayThumb from "./assets/contents/spirited-away-thumb.jpg";

import totoroPoster from "./assets/contents/totoro.jpg";
import totoroBgVideo from "./assets/contents/totoro.mp4";
import totoroThumb from "./assets/contents/totoro-thumb.jpg";

import Content from "./components/Content";
import { useEffect } from "react";

const contents = [
  {
    poster: yourNamePoster,
    bgVideo: yourNameBgVideo,
    videoThumb: yourNameThumb,
    title: "Your Name",
  },
  {
    poster: totoroPoster,
    bgVideo: totoroBgVideo,
    videoThumb: totoroThumb,
    title: "Totoro",
  },
  {
    poster: spiritedAwayPoster,
    bgVideo: spiritedAwayBgVideo,
    videoThumb: spiritedAwayThumb,
    title: "Spirited Away",
  },
];

function App() {
  useEffect(() => {
    customCursor.initialize();
  });

  const mainBg = useRef(null);
  const cover = useRef(null);

  // This function triggers video playback and transitions by adding and removing classes
  function toggleContent(index) {
    mainBg.current.classList.toggle("fade");
    cover.current.classList.toggle("fade");

    const contentWrapper = document.querySelector(
      `.content-wrapper.item-${index}`
    );

    const video = contentWrapper.querySelector(`video`);
    video.addEventListener("canplay", () => {
      video.currentTime = 0;
      video.play();
    });

    contentWrapper.querySelector(`.content`).classList.toggle("fade");
    contentWrapper.classList.toggle(`variant-${index}`);
  }

  return (
    <>
      <div className="fixed" id="main-bg" ref={mainBg}></div>
      <div id="container">
        <nav>
          <ul>
            {contents.map((item, index) => (
              <li
                key={item.title}
                onMouseEnter={() => toggleContent(index + 1)}
                onMouseLeave={() => toggleContent(index + 1)}
                className="link"
              >
                <a href="#"></a>
                {item.title}
              </li>
            ))}
          </ul>
        </nav>
        <div id="cover" ref={cover}>
          <div className="cover-up">
            <div></div>
            <div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Exercitationem, iste ipsum! Aspernatur nostrum est magni.
              </p>
            </div>
          </div>
          <div className="cover-down">
            <h1>
              <span>We make</span> <span>animations</span>
            </h1>
          </div>
        </div>
        <div id="contents-container">
          {contents.map((content, index) => (
            <Content key={content.title} content={content} index={index + 1} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
