import React, { useEffect, useState } from "react";

export default function Service() {
  const texts = [
    "1. Construction - We build with quality, safety, and trust — on time, every time.",
    "2. Renovation - Upgrade your home with smart, stylish renovation.",
    "3. Civil Work - Reliable civil work for strong and safe structures.",
    "4. PipeLine Work - Strong, safe, and long-lasting pipeline solutions.",
    "5. Inteckwell and WTP (JJM)",
    "6. Manpower Supply",
    "7. Material Suppliers",
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === texts.length) return;

    // typing speed
    const timeout = setTimeout(
      () => {
        if (!reverse) {
          // typing forward
          if (subIndex < texts[index].length) {
            setSubIndex(subIndex + 1);
          } else {
            // pause after completing typing
            setTimeout(() => setReverse(true), 1000);
          }
        } else {
          // deleting effect
          if (subIndex > 0) {
            setSubIndex(subIndex - 1);
          } else {
            setReverse(false);
            setIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      reverse ? 20 : 60
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <div>
      <h1 className="flex-auto text-center font-bold text-3xl" style={{paddingTop: "35px", color: "#e34907"}}>Services</h1>
      <div className="w-full bg-white-200 p-6 text-center rounded-lg">
        <p className="text-xl font-bold whitespace-pre-wrap">
          {texts[index].substring(0, subIndex)}
          <span className="border-r-2 border-black animate-pulse ml-1"></span>
        </p>
      </div>
    </div>
  );
}
