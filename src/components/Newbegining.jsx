
export default function NewBeginning() {
  return (
    <main className="new-beginning-page">
      {/* Soft background glow */}
      <div className="beginning-glow glow-one" />
      <div className="beginning-glow glow-two" />

      {/* Floating decorations */}
      <span className="floating-star star-one">✦</span>
      <span className="floating-star star-two">✧</span>
      <span className="floating-star star-three">✦</span>

      <article className="beginning-card">
        {/* Top ornament */}
        <div className="gold-rosette" aria-hidden="true">
          ❋
        </div>

        <p className="beginning-heading">
          A PRAYER FOR OUR NEW
          <br />
          BEGINNING
        </p>

        {/* Qur'anic dua */}
        <div className="beginning-dua-content">
          <div
            className="beginning-dua"
            lang="ar"
            dir="rtl"
          >
            <p>
              رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا
            وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ   وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا</p>

          </div>

          <div className="beginning-divider" />

          {/* Transliteration */}
          <p className="beginning-transliteration">
            Rabbana hab lana min azwajina
            <br />
            wa dhurriyyatina qurrata a'yunin
            <br />
            waj'alna lil-muttaqina imama
          </p>

          {/* English meaning */}
          <p className="beginning-meaning">
            “Our Lord, grant us from among our spouses
            and offspring comfort to our eyes and make
            us an example for the righteous.”
          </p>

          <p className="beginning-reference">
            SURAH AL-FURQAN · 25:74
          </p>
        </div>

        {/* Bottom ornament */}
        <div
          className="gold-rosette bottom-rosette"
          aria-hidden="true"
        >
          ❋
        </div>
      </article>

      <p className="beginning-signoff">
        A beautiful beginning, by the grace of Allah.
      </p>
    </main>
  );
}
