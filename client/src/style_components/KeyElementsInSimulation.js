// fucntion for keywords spanning

const KeyElementsInSimulation = ({ items = [], rowsConfig = [4, 5, 4] }) => {
 if (items.length === 0) {
    items = Array.from({ length: 13 }, (_, i) => `Key ${i + 1}`);
  }

  let index = 0;
  const maxCols = Math.max(...rowsConfig); // max coloane pe rând

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1vh' , width:'100%', backgroundColor:'#1c1c1c',
        borderRadius:'3rem', padding: '1rem' , boxSizing: "border-box"
     }}>
      {rowsConfig.map((cols, rowIndex) => {
        const rowItems = items.slice(index, index + cols);
        index += cols;

        return (
          <div
            key={rowIndex}
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${maxCols}, 1fr)`, // fixăm maxCols coloane
              gap: '1.2vw', display: "flex",
              justifyContent: 'center', alignItems: "center"
            }}
          >
            {rowItems.map((item, i) => (
              <div
                key={i}
                className="keyword-box"
              >
                {item}
              </div>
            ))}
            {/* Umple restul coloanelor cu elemente goale ca să păstrezi spațiul */}
            {Array(maxCols - rowItems.length).fill(null).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default KeyElementsInSimulation;