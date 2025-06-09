import React, { useEffect } from "react";

const JDoodleEmbed: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.jdoodle.com/assets/jdoodle-pym.min.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="jdoodle-container  mx-4 sm:mx-16 rounded-xl sm:rounded-3xl ">
      <header className="jdoodle-header">
        <h3>Interaktiv C++ muhiti</h3>
      </header>
      <div
        className="jdoodle-frame overflow-hidden"
        dangerouslySetInnerHTML={{
          __html: `
            <div data-pym-src="https://www.jdoodle.com/embed/v0/2IhG?stdin=1&arg=0"></div>
          `,
        }}
      />
    </div>
  );
};

export default JDoodleEmbed;
