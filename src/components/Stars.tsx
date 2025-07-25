"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Particles from "~/components/Particles";
// import Intro from "./intro";

export default function Stars() {
  return (
    <Canvas
      camera={{ position: [0, -30, 0], fov: 30 }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1, // Optional: puts canvas behind other content
      }}
    >
      <Particles></Particles>

      {/* Configure OrbitControls to disable panning and control zoom based on device type */}
      <OrbitControls
        // enablePan={false} // Prevents panning of the scene
        // enableZoom={!isTablet} // Disables zoom on tablets
        maxDistance={9} // Maximum distance for zooming out
        minDistance={6} // Minimum distance for zooming in
        // minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
        // maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
      />
      {/* <Intro></Intro> */}
    </Canvas>
  );
}
