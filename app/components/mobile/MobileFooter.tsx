"use client";

import useRoutes from "../../hooks/useRoutes";
import MobileItem from "./MobileItem";

const MobileFooter = () => {
  const routes = useRoutes();

  return (
    <div
      className="

        fixed 
        justify-between 
        w-full 
        h-[60px]
        bottom-0 
        z-50 
        flex 
        items-center 
        bg-white 
        border-t-[1px] 
        lrg:hidden
      "
    >
      {routes.map((route) => (
        <MobileItem
          activateIcon={route.activeIcon}
          label={route.label}
          key={route.href}
          href={route.href}
          active={route.active}
          icon={route.icon}
        />
      ))}
    </div>
  );
};

export default MobileFooter;
