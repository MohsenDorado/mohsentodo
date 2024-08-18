"use client";
import Link from "next/link";
import useRoutes from "../hooks/useRoutes";
import clsx from "clsx";
const Header = () => {
  const routes = useRoutes();
  const exclude="Home";
  const result=routes.filter((item)=>item.label!==exclude)

  return (
    <div className=" lrg:px-[170px] flex items-center justify-between p-4 z-50">
      <Link href="/" className="caveat font-extrabold z-50 text-5xl max-sm:text-3xl">
        Mohsen<span className="text-Primary">TODO</span>
      </Link>
      <div className="flex items-center justify-center gap-[10px]">
        {result.map((route) => (
          <Link key={route.href} href={route.href} className={clsx(` z-50 border rounded-md px-4 py-2 max-sm:py-1
             font-medium transition-all duration-200 max-sm:text-sm max-sm:px-2`,
           route.label==="Profile"? 'bg-white text-Primary hover:bg-slate-50' :'bg-Primary text-white hover:bg-LightPrimary'
           )}>
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Header;