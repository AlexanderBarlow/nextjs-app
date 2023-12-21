import { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Spline from "@splinetool/react-spline";
import bck from "../public/bck.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [splineLoaded, setSplineLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading delay
    const simulateLoading = () => {
      setSplineLoaded(true);
    };

    simulateLoading();
  }, []); //

  return (
    <div
      className="flex flex-col items-center h-fit lg:h-screen bg-violet-950"
      style={{ backgroundImage: `url(${bck.src})`, backgroundSize: "cover" }}
    >
      <div className="p-4 border m-5 w-3/4">
        {/* Content for the top box */}
        <h1 className="text-white text-center">The Web Developer Blog</h1>
        <p className="text-center">By Web Developers</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center w-full sm:w-3/4 lg:w-2/3 xl:w-1/2">
        <div className="w-full sm:w-1/2 p-4 border m-3 lg:mb-4">
          {/* Content for the first box */}
          <h1 className="text-white">Heading One</h1>
          <p>Paragraph Here</p>
          <h2>Second Heading</h2>
          <ul>
            <li>List Item One</li>
            <li>List Item Two</li>
            <li>List Item Three</li>
            <li>List Item Four</li>
          </ul>
          {/* Repeat your content structure as needed */}
        </div>
        <div className="w-full sm:w-1/2 p-4 m-3 lg:mt-4 sm:mt-4">
          {/* Conditionally render loading scene or Spline component */}
          {splineLoaded ? (
            <div className="w-full h-unit-9xl">
              {/* Adjust the height as needed */}
              <Spline scene="https://prod.spline.design/E49KkOsgI5Y4b-i3/scene.splinecode" />
            </div>
          ) : (
            <div className="flex items-center justify-center h-unit-9xl">
              <p className="text-white">Loading Spline scene...</p>
              {/* You can also add a spinner or other loading elements here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
