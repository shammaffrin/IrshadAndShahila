export default function VenueSection() {
  return (
    <section className="venue-section section-padding">
      <p className="section-eyebrow">THE WEDDING</p>

      <h2 className="section-heading">
        A day made more beautiful by you
      </h2>

      <div className="venue-card">
        {/* Venue image */}
        <div className="venue-image">
          <img
            src="/images/wedding-venue.jpg"
            alt="Wedding venue"
          />
          <span className="venue-image-label">
            OUR WEDDING VENUE
          </span>
        </div>

        <div className="venue-content">
          <span className="venue-icon">◇</span>

          <h3>Wedding Ceremony</h3>

          <div className="venue-detail">
            <span className="venue-detail-icon">♧</span>
            <div>
              <p className="venue-detail-label">DATE</p>
              <p className="venue-detail-value">
                Sunday, 8 November 2026
              </p>
            </div>
          </div>

          <div className="venue-detail">
            <span className="venue-detail-icon">◷</span>
            <div>
              <p className="venue-detail-label">TIME</p>
              <p className="venue-detail-value">
                11:00 AM
              </p>
            </div>
          </div>

          <div className="venue-detail">
            <span className="venue-detail-icon">⌖</span>
            <div>
              <p className="venue-detail-label">LOCATION</p>
              <p className="venue-detail-value">
                Rahmath Manzil
              </p>
              <p className="venue-address">
                Alampady, Kasaragod, Kerala
              </p>
            </div>
          </div>

          <a
            className="venue-map-button"
            href="https://maps.app.goo.gl/sTw2Nh2Mitr8DhZH8"
            target="_blank"
            rel="noreferrer"
          >
            VIEW ON GOOGLE MAPS
            <span aria-hidden="true"> ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}