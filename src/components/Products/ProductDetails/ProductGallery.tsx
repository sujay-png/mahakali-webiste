import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";

type Image = { src: string; alt: string };

type Props = {
  images: Image[];
  title: string;
};

export default function ProductGallery({ images, title }: Props) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const current = images[index] ?? images[0];

  if (!current) return null;

  return (
    <div className="pg">
      <div className="pg__stage">
        <AnimatePresence mode="wait">
          <motion.img
            key={current.src}
            src={current.src}
            alt={current.alt || title}
            initial={reduce ? false : { opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="pg__image"
          />
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <div className="pg__thumbs" role="list">
          {images.map((image, i) => (
            <button
              key={image.src + i}
              type="button"
              className={i === index ? "is-active" : ""}
              onClick={() => setIndex(i)}
              aria-label={`View image ${i + 1}`}
            >
              <img src={image.src} alt="" />
            </button>
          ))}
        </div>
      )}

      <style>{`
        .pg { display: grid; gap: 0.9rem; }
        .pg__stage {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          border-radius: 18px;
          background: #f3eee4;
          border: 1px solid rgba(226, 191, 185, 0.35);
        }
        .pg__image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .pg__thumbs {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(72px, 1fr));
          gap: 0.55rem;
        }
        .pg__thumbs button {
          aspect-ratio: 1;
          overflow: hidden;
          border-radius: 10px;
          border: 1px solid rgba(226, 191, 185, 0.4);
          padding: 0;
          opacity: 0.72;
          transition: opacity 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
        }
        .pg__thumbs button img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .pg__thumbs button:hover { opacity: 1; transform: translateY(-2px); }
        .pg__thumbs button.is-active {
          opacity: 1;
          border-color: #570000;
        }
      `}</style>
    </div>
  );
}
