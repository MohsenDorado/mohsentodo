import clsx from "clsx";
import React from "react";


export type Varients = 'Confirm' | 'Delete' | 'BlueDarks' | 'Blue'|'BlueLight'


const Button = ({ varient, text,disabled }: { varient: Varients; text: any; disabled?:boolean }) => {

return(
  <button
  disabled={false||disabled}
   className={clsx(`border-none w-full px-3 py-2 text-sm font-semibold border hover:brightness-125 disabled:hover:brightness-100 transition-all duration-100 rounded-md `,
    varient==="Confirm"&&"bg-green-400 text-white"||varient==="Delete"&&"bg-red-500"
    

  )}>
        {text}
    </button>
)
};

export default Button;
