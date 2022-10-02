import React from 'react';

export default function Resume() {
  return (
    <>
      <iframe
        style={{
          position: "absolute",
          // top: 0,
          // left: 0,
          width: "100%",
          height: "100%",
        }}
        // src={require("../assets/Resume.pdf")}
        src="https://drive.google.com/file/d/1BkQLiPbqjHhYAmcUrEz-ese9O9LfJVZB/preview"
        title="resumeFrame"
      />
    </>
  );
}