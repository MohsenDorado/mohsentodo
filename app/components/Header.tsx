"use client";
import Link from "next/link";
import useRoutes from "../hooks/useRoutes";
import clsx from "clsx";
const Header = () => {
  const routes = useRoutes();
  const exclude="Home";
  const result=routes.filter((item)=>item.label!==exclude)

  return (
    <div className="max-lrg:hidden lrg:px-[170px] flex items-center justify-between p-4 z-50">
      <Link href="/" className="caveat font-extrabold z-50 text-5xl">
        Mohsen<span className="text-Primary">TODO</span>
      </Link>
      <div className="flex items-center justify-center gap-[10px]">
        {result.map((route) => (
          <Link key={route.href} href={route.href} className={clsx(`text-white z-50 border rounded-md px-4 py-2
           hover:bg-DarkPrimary bg-LightPrimary font-medium transition-all duration-200`,
           route.label==="Profile" && 'text-black'
           )}>
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Header;