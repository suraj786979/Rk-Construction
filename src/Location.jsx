import React from "react";

function Location() {
  return (
    <div
      id="set"
      className="w-full flex justify-center items-center p-4"
    >
      <div className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-lg" style={{height: '17rem'}}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28866.217043057248!2d82.84087425!3d25.261261299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1761971361080!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-0"
          title="Google Map Location"
        ></iframe>
      </div>
    </div>
  );
}

export default Location;
