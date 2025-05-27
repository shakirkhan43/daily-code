// React aur uske hooks import kar rahe hain
import React, { useState, useEffect } from 'react';

// Functional component banaya gaya hai jiska naam ScrollEffect hai
function ScrollEffect() {

  // scrollY state banayi gayi hai, jo scroll position (vertical) ko store karegi
  // Initial value 0 hai
  const [scrollY, setScrollY] = useState(0);

  // useEffect hook use kiya gaya hai scroll event listener ko handle karne ke liye
  useEffect(() => {

    // handleScroll function banaya jo scroll hone par chalega
    const handleScroll = () => {
      // window.scrollY se current vertical scroll position milti hai
      // use state me update kar dete hain
      setScrollY(window.scrollY);

      // Console me print kar rahe hain debugging ke liye
      console.log("User scrolled to:", window.scrollY, "px");
    };

    // Jab component mount hota hai tab scroll event listener lagate hain
    window.addEventListener("scroll", handleScroll);

    // Cleanup function return karte hain
    // Yeh function tab chalega jab component unmount hoga ya re-render hoga
    return () => {
      // Scroll event listener ko hata rahe hain memory leak se bachne ke liye
      window.removeEventListener("scroll", handleScroll);

      // Console me batate hain ki scroll listener hata diya gaya
      console.log("Scroll listener removed");
    };

  }, []); // Empty dependency array ka matlab hai effect sirf component mount pe chalega

  
  // Component ka UI return ho raha hai
  return (
    <div>

      {/* 
        Fixed top banner banaya gaya hai jo hamesha screen ke top me dikhai dega
        Isme hum scrollY value (kitna scroll hua) display kar rahe hain
      */}
      <div style={{
        position: "fixed",      // Isse div screen ke top par chipak jaata hai
        top: 0,                 // Top position 0 px
        width: "100%",          // Puri screen ki width lega
        backgroundColor: "#333", // Background color dark gray
        color: "white",          // Text white
        padding: "10px",         // Thoda sa space andar
        zIndex: 1000,            // Upar sabse top me dikhai dega
        textAlign: "center"      // Text ko center align kiya gaya
      }}>
        {/* State ka use karke scroll distance dikhaya ja raha hai */}
        You have scrolled: {scrollY}px
      </div>

      {/* 
        Neeche ek bada container banaya gaya hai jisme height 2000px di gayi hai 
        Taaki page scroll ho sake aur hum effect dekh saken
      */}
      <div style={{ paddingTop: "60px", height: "1000px" }}>
        <h1 style={{ textAlign: "center" }}>
          Scroll Down to See the Effect
        </h1>
      </div>

    </div>
  );
}

// Component ko export kar rahe hain taaki dusre file me use kiya ja sake
export default ScrollEffect;
