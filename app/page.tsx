"use client"
import Image from "next/image";
import City from "@/components/Cities";
import { AddCityModal } from "@/components/NewCityModal";
import { useState } from "react";

export default function Home() {
  const [isNewCityModalOpen, setIsNewCityModalOpen] = useState(false);
  const onClick = () => {
    setIsNewCityModalOpen(!isNewCityModalOpen);
  }
  return (
    <main className="flex flex-col">
      <div className="flex flex-col justify-between p-14">
        <h1 className="fixed left-0 top-0 flex mb-3 text-2xl font-semibold backdrop-blur-2xl lg:static">
          Welcome to your weather app!
        </h1>
      </div>
      <div className="flex flex-col">
        <AddCityModal isOpen={isNewCityModalOpen} onClose={onClick} />
        <div className="flex items-center mb-4 w-full justify-center">
          <h2 className="text-large mr-10">
            Your current cities
          </h2>
          <div className="fixed bottom-0 left-0 flex h-48 items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <button className="bg-white rounded-full text-black text-3xl focus:outline-none focus:ring-2 focus:ring-blue-200 w-16" onClick={onClick}>
            +
          </button>
          </div>
        </div>
        <div className="flex items-center mb-4 w-full justify-center">
          <City data={true}/>
        </div>
      </div>
    </main>
  );
}
