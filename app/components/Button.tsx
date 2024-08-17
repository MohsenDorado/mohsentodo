import clsx from "clsx";
import React from "react";


export type Varients = 'Confirm' | 'Delete' | 'BlueDarks' | 'Blue'|'BlueLight'


const Button = ({ varient, text }: { varient: Varients; text: string }) => {

return(
  <button className={clsx(`w-full px-3 py-2 text-sm font-semibold border hover:brightness-90 transition-all duration-300 rounded-md`,
    varient==="Confirm"&&"bg-green-500"
    

  )}>
        {text}
    </button>
)
};

export default Button;
