// Import her photos here — add as many as you want
import pic1 from "../assets/Mili1.jpg";
import pic2 from "../assets/Mili2.jpg";
import pic3 from "../assets/Mili3.jpg";
import pic4 from "../assets/Mili4.jpg";

const photos = [
  { src: pic1, caption: "Always glowing ✨" },
  { src: pic2, caption: "That smile 😊" },
  { src: pic3, caption: "Vibes for days" },
  { src: pic4, caption: "Beautiful as always" },
];

function Gallery() {
  return (
    <section className="gallery">
      <h2 className="section-title">Moments of You 📸</h2>
      <div className="gallery-grid">
        {photos.map((photo, i) => (
          <div className="photo-card" key={i}>
            <img src={photo.src} alt={photo.caption} />
            <p className="caption">{photo.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
