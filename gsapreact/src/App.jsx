import { useGSAP } from "@gsap/react"; // Import GSAP hook for animations
import gsap from "gsap"; // Import GSAP library
import "./App.css"; // Import CSS styles
import { useRef } from "react"; // Import useRef for creating references

function App() {
  const gsapRef = useRef(); // Create a reference for potential GSAP animations
  const container = useRef(); // Create a reference for potential GSAP animations
  const {contextSafe} = useGSAP(); // Initialize GSAP context for safe animations
  const boxRef = useRef(); // Create a reference for the box element

  const rotateBox = contextSafe(() => {
    gsap.to(boxRef.current, {
      rotate: 720, // Rotate 720 degrees
      duration: 1, // Animation duration of 1 second
      delay: 1, // Start animation after 1 second
    });
  });

  useGSAP(
    () => {
      // Uncomment this block to animate the referenced element
      // gsap.to(gsapRef.current, {
      //   x: 500, // Move 500px along the x-axis
      //   duration: 2, // Animation duration of 2 seconds
      //   delay: 1, // Start animation after 1 second
      // });

      // Uncomment this block to animate elements with the class "box"
      // gsap.to(".box", {
      //   x: 500, // Move 500px along the x-axis
      //   duration: 2, // Animation duration of 2 seconds
      //   delay: 1, // Start animation after 1 second
      // });

      // Animate elements with the class "box" to rotate
      gsap.to(".box", {
        rotate: 720, // Rotate 720 degrees
        duration: 1, // Animation duration of 1 second
        delay: 1, // Start animation after 1 second
      });
    },
    // { scope: "main .container" }
    { scope: container }
  ); // Limit the animation scope to elements inside "main .container"

  return (
    <main>
      {/* Uncomment this block to use the referenced element */}
      {/* <div ref={gsapRef} className="box"></div>; */}

      {/* Container with animated elements */}
      <div ref={container} className="container">
        <div className="circle"></div> {/* Circle element */}
        <div className="box"></div> {/* Box element */}
      </div>
      {/* Additional section with similar elements */}
      <div className="kuch">
        <div className="circle"></div> {/* Circle element */}
        <div className="box"></div> {/* Box element */}
      </div>
      <div>
        <button onClick={rotateBox}>Rotate Box</button> {/* Button to trigger rotation */}  
        <di ref={boxRef} className="box">Box</di>
      </div>
    </main>
  );
}

export default App; // Export the App component
