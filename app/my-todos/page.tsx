"use client"
import React from "react";
import Features from "../components/Features";
import Curved from "../components/Curved";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";

const page = () => {
  return (
    <div className="flex items-center justify-center flex-col pt-10 px-[200px] max-lrg:px-[100px] max-sm:px-[50px] ">
      <div className="w-full">
        <Button text="Search a Todo" varient="Blue" />
      </div>
      <div className="w-full mt-[20px]">
        <Button text="Add a Todo" varient="Confirm" />
      </div>
    </div>
  );
};

export default page;
