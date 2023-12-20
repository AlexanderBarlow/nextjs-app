import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@nextui-org/button";
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <div className="flex flex-col items-center h-screen bg-violet-950">
      <div className="p-4 border m-5 w-3/4">
        {/* Content for the top box */}
        <h1 className="text-white text-center">Top Box Heading</h1>
        <p className="text-center">Top Box Content Here</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center w-full sm:w-3/4 lg:w-2/3 xl:w-1/2">
        <div className="w-full sm:w-1/2 p-4 border m-3 mb-52">
          {/* Content for the first box */}
          
          {/* Repeat your content structure as needed */}
        </div>
        <div className="w-full sm:w-1/2 p-4 border m-3 mt-8 sm:mt-56">
          {/* Content for the second box */}
         
          {/* Repeat your content structure as needed */}
        </div>
      </div>
    </div>
  );
}
