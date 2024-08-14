import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiChat } from 'react-icons/hi';
import { HiArrowLeftOnRectangle, HiUsers } from 'react-icons/hi2';
import { FaRegUserCircle, FaUserCircle } from "react-icons/fa";
import { IoCheckbox, IoCheckboxOutline, IoHome, IoHomeOutline } from "react-icons/io5";

const useRoutes = () => {
  const pathname = usePathname();

  const routes = useMemo(() => [
    { 
      label: 'Profile', 
      href: '/profile', 
      icon: FaRegUserCircle ,
      activeIcon:FaUserCircle,
      active: pathname.includes('/profile'),
    },
    { 
      label: 'Home', 
      href: '/', 
      icon: IoHomeOutline, 
      activeIcon:IoHome,

      active: pathname==='/',
    },
    {
      label: 'My Todos', 
      href: '/my-todos',
      icon: IoCheckboxOutline , 
      activeIcon: IoCheckbox  ,

      active:pathname.includes('/my-todos')
    }
  ], [pathname]);

  return routes;
};

export default useRoutes;