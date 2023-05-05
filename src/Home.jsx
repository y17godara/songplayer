import { useState } from "react";

// Components
import "./Home.css";
import "./index.css";
import imageSongDisc from "/Assets/playerDisc.png"; // disc image
import Songs from "./db/songs"; // songs fetch
import { Moodbuttons, Songtitles } from "./components/index.components"; // components

function Home() {
  const [songUrl, setsongUrl] = useState("");
  const [songName, setsongName] = useState("...");
  const [mood, setmood] = useState("");
  const [toggleMode, settoggleMode] = useState(false);
  const [searchVal, setsearchVal] = useState("");
  const [playerthumbnail, setplayerthumbnail] = useState("");
  const DarkmodeClass = ["fatherContainer"];
  const NonDarkModeClass = ["whiteBg"];

  const playSong = (songSource, songTitle, playerThumbnail) => {
    setsongName(songTitle);
    setsongUrl(songSource);
    setplayerthumbnail(playerThumbnail);
  };

  const toggle = () => {
    settoggleMode(!toggleMode);
  };


  return (
    <>
      <section
        className={
          toggleMode ? DarkmodeClass.join(" ") : NonDarkModeClass.join("")
        }
      >
        <div>
          <div id="spaceBar"></div>

          {/* Disc */}
          <section>
            <div className="audioElement">
              <div class="player">
                <img
                  onClick={toggle}
                  className="playerThumbnail"
                  src={playerthumbnail || imageSongDisc}
                  alt={songName}
                ></img>
                <div class="nameplayer">
                  <p
                    style={
                      toggleMode ? { color: "#0b0b0c" } : { color: "#0b0b0c" }
                    }
                  >
                    {songName}
                  </p>
                  <audio controls autoPlay={true} loop={true} src={songUrl}>
                    Your browser does not support the
                    <code>audio</code> element.
                  </audio>
                </div>
              </div>
            </div>
          </section>
          {/* Disc */}
          
          <div id="spaceBar"></div>

          {/* Display songs */}
          <div className="tileContainer">
            {Songs.map((song) => {
              return (
                <Songtitles
                  key={song.SongID}
                  thumbnail={song.Thumbnail}
                  source={song.Source}
                  title={song.Title}
                  category={song.Category}
                  toggleMode={toggleMode}
                  playFunction={playSong}
                />
              );
            })}
          </div>
          {/* Display songs */}

          
          <div id="spaceBar"></div>

          {/* Moodbuttons */}
          <Moodbuttons setmood={setmood} toggleMode={toggleMode} />
          {/* Moodbuttons */}

          <div id="spaceBar"></div>

          {/* Song Search */}
          <div className={toggleMode ? "searchBar" : "darkSearchBar"}>
            <input
              placeholder="🔍Search your song.."
              value={searchVal}
              onChange={(e) => {
                setsearchVal(e.target.value);
              }}
            ></input>
          </div>
          {/* Song Search */}

          {/* Song Search Display */}
          <div className="listTileHolder">
            {!searchVal
              ? Songs.filter((song) => song.Category.includes(mood)).map(
                (item, index) => (
                  <li
                    onClick={() =>
                      playSong(item.Source, item.Title, item.Thumbnail)
                    }
                    className="listTiles contentFlex"
                  >

                    <div className="imageSongs">
                      <img src={item.Thumbnail} alt="image" />
                    </div>
                    {index + 1}. {item.Title} | {item.Category.toUpperCase()}
                  </li>
                )
              )
              : Songs.filter((song) =>
                song.Title.toUpperCase().includes(searchVal.toUpperCase())
              ).map((item, index) => (
                <li
                  onClick={() =>
                    playSong(item.Source, item.Title, item.Thumbnail)
                  }
                  className="listTiles contentFlex"
                >

                  <div className="imageSongs">
                    <img src={item.Thumbnail} alt="image" />
                  </div>
                  {index + 1}. {item.Title} |{item.Category.toUpperCase()}
                </li>
              ))}
          </div>
          {/* Song Search Display */}
          
          <div id="spaceBar"></div>

          {/* footer */}
          <div className="footer">
            <b>Made By Subhranshu</b>
          </div>
          {/* footer */}

        </div>
      </section>
    </>
  );
}

export default Home;
