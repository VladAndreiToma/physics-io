export default function InsertPictureBackgroundInCourses({ text, picture , rowFlexMode }) {
    const justifyStyle = rowFlexMode === 'to-right' ? 'row' : 'row-reverse';

    console.log( justifyStyle );

    return (
      <div
        className="insert-picture-background-in-courses-main"
        style={{ flexDirection: justifyStyle }}>
        <div className="insert-picture-background-in-courses-left">
          {text}
        </div>
        <div
          className="insert-picture-background-in-courses-right"
          style={{
            backgroundImage: `url(${picture})`,
          }}
        ></div>
      </div>
    );
  }