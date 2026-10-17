import { useState } from "react";
import couple from "../assets/images/couple.jpg";

export default function InvitationCover({ onOpen }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="invitation-cover">
      <div className="cover-photo">
        <img
          src={couple}
          alt="Irshad and Shahila"
          onLoad={() => setImageLoaded(true)}
          className={imageLoaded ? "loaded" : "" }
        />
      </div>

      <div className="cover-shade" />

      <div className="cover-top">
        <p className="cover-small-label">
          بِسْمِ ٱللّٰهِ ٱلرَّحْمٰنِ ٱلرَّحِيمِ
        </p>
      </div>

      <div className="cover-center">
        <p className="cover-intro">
          A CELEBRATION OF TWO SOULS
        </p>

         <div className="cover-separator">
          <span />
          <span>◇</span>
          <span />
        </div>

       <h1 className="cover-couple-names">
  <span className="couple-name">
    Abdul Irshad A I
  </span>

  <span1 className="ampersand">&amp;</span1>

  <span className="couple-name">
    Fathimath Shahila P K
  </span>
</h1>

        <div className="cover-separator">
          <span />
          <span>◇</span>
          <span />
        </div>

        <p className="cover-subtitle">
          A beautiful beginning,
          <br />
          written by the grace of Allah.
        </p>

        <button
          className="cover-open-button"
          onClick={onOpen}
          type="button"
        >
          <span>OUR BEGINNING</span>
          <span aria-hidden="true">↗</span>
        </button>
      </div>

      <div className="cover-bottom">
        <span>WITH LOVE</span>
        <span className="cover-bottom-symbol">✳</span>
        <span>WITH GRATITUDE</span>
      </div>
    </section>
  );
}