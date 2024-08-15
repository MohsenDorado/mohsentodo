"use server";
import React from "react";
import FeatureCard from "./FeatureCard";
import getFeatures from "../actions/getFeatures";

const Features = () => {
  const features=getFeatures();
  return (
    <div className="w-full mt-[100px] flex items-center justify-center flex-col max-sm:px-2  lrg:px-[170px] relative z-50 ">
      
      <h1 className=" font-dancing text-[5em] max-md:text-[4em] font-extrabold tracking-tighter text-DarkPrimary">
        What is this app?
      </h1>
      <div className="text-2xl flex items-center justify-center text-center max-sm:text-xl px-10 text-slate-600">
        MohsenTodo is a full Todo app with great functionallities which is made by
         Mohsen Khojasteh nejad.
        Maybe at first my intension was to just practice frontend dev skills but... I really worked on this for long.
        Hope you enjoy it!
      </div>
      <h1 className=" font-dancing text-[5em] font-extrabold tracking-tighter text-DarkPrimary">
        The features
      </h1>
      <div className="grid max-lrg:grid-cols-2 max-sm:grid-cols-1 grid-cols-4 mt-10 gap-10 w-full max-sm:px-1 max-lg:px-[100px]">


      {features!==null&&
        features.map((feature)=>(

          
          <FeatureCard key={feature.name} icon={feature.icon} name={feature.name} url={feature.url} />

        ))
      }      </div>

      
    </div>
  );
};

export default Features;
