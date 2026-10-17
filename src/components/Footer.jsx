
export default function InvitationFooter() {
  return (
    <footer className="invitation-footer">
      <div className="footer-background" />
      <div className="footer-overlay" />

      <div className="footer-particles">
        {Array.from({ length: 18 }, (_, i) => (
          <span
            key={i}
            className={`particle particle-${(i % 5) + 1}`}
            style={{
              left: `${(i * 37 + 11) % 100}%`,
              top: `${(i * 53 + 7) % 100}%`,
              animationDelay: `${(i % 7) * 0.6}s`,
            }}
          />
        ))}
      </div>

      <div className="footer-content">
        <div className="footer-emblem">❋</div>

        <p className="footer-heading">
          With Love &amp; Gratitude
        </p>

        <p className="footer-date">
          NOVEMBER 08, 2026 · KASARAGOD
        </p>

        <div className="footer-names">
          <span>Irshad</span>
          <span className="footer-heart">♥</span>
          <span>Shahila</span>
        </div>

        <div className="footer-thanks">
          <p className="footer-arabic" lang="ar" dir="rtl">
            جَزَاكُمُ اللَّهُ خَيْرًا
          </p>

          <p className="footer-message">
            Thank you for being part of our special day.
          </p>
        </div>

        <p className="footer-small">
          CRAFTED WITH LOVE · 2026
        </p>
      </div>
    </footer>
  );
}
