import { useEffect } from "react";

function JDoodleEmbed() {
     useEffect(() => {
    // JDoodle iframe uchun kerakli skriptni sahifaga qo'shish
    const script = document.createElement('script');
    script.src = 'https://www.jdoodle.com/assets/jdoodle-pym.min.js';
    script.async = true;
    document.body.appendChild(script);

    // Skriptni tozalash (cleanup) funksiyasi
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="px-4 sm:px-16 py-8 text-white ">
      <div data-pym-src="https://www.jdoodle.com/embed/v0/2IhG?stdin=1&arg=0" defaultValue={''} style={{backgroundColor:"transparent"}}></div>
    </div>
  );
}

export default JDoodleEmbed;
