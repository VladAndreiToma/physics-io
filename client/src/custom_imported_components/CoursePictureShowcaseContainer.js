import React from "react";

function CoursePictureShowcaseContainer({ images }) {
  const numImages = images.length;
  const gapRem = 2; // gap in rem
  // convert gap to px assuming 1rem = 16px (adjust if needed)
  const gapPx = gapRem * 16;
  
  // Calculate width % per image accounting for gap:
  // total gap width = (numImages -1) * gapPx
  // total width for images = 100% - total gap width in px (approx)
  // We'll just do width in % without exact px subtraction for simplicity

  const imageWidthPercent = 100 / numImages;

  return (
    <div style={styles.container}>
      {images.map((src, index) => (
        <div
          key={index}
          style={{
            ...styles.imageWrapper,
            width: `${imageWidthPercent}%`,
            maxWidth: "27vw", // optional max width to avoid huge images on big screens
          }}
        >
          <img src={src} alt={`img-${index}`} style={styles.image} />
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "2.5rem",
    width: "100%",
    height: "55vh",
    backgroundColor: 'inherit',
    justifyContent: "center",
    alignItems: "center",
    marginTop: '1.5rem',
    boxSizing: 'border-box',
    padding:'0.5rem',
    marginBottom: '1.2rem',
    borderRadius: '1rem'
  },
  imageWrapper: {
    height: "100%",
    overflow: "visible",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    borderRadius: '3rem',
    transition: "transform 0.3s ease",
  },
};

// CSS hover effect with z-index and scale on img inside wrapper div
if (typeof window !== "undefined") {
  const styleSheet = document.styleSheets[0];
  if (
    !Array.from(styleSheet.cssRules).some(
      (rule) => rule.cssText === "div:hover > img {transform: scale(1.2); z-index: 10;}"
    )
  ) {
    styleSheet.insertRule(
      `div:hover > img {
        transform: scale(1.2);
        z-index: 10;
      }`,
      styleSheet.cssRules.length
    );
  }
}

export default CoursePictureShowcaseContainer;
