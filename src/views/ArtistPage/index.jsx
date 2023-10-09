import React from "react";
import styles from "./ArtistPage.module.css";
import artistImage from "../../Assets/images/artist-image.png";
import Artist from "../../components/UI/Artist";
const ArtistPage = () => {
  return (
    <main className={`overflow-hidden position-relative ${styles.mainArtist}`}>
      <div className="container position-relative z-2">
        <div className="row text-white">
          <div className="col-md-12 ml-md-auto text-center mb-5">
            <h2 className="spicy-font text-sec">Our Halloween's Artist</h2>
          </div>
          <Artist
            className="col-md-6"
            artistName="DJ Remerson Huke"
            artistCaption="Lead DJ On Deadpoll"
            artistDesctription=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore."
            artistImage={artistImage}
          />
          <Artist
            className="col-md-6"
            artistName="DJ Remerson Huke"
            artistCaption="Lead DJ On Deadpoll"
            artistDesctription=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore."
            artistImage={artistImage}
          />
        </div>
      </div>
      <div className={`${styles.sImage}`} />
    </main>
  );
};

export default ArtistPage;
