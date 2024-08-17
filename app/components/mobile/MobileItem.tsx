import Link from "next/link";

import clsx from "clsx";

interface MobileItemProps {
  href: string;
  icon: any;
  active?: boolean;
  label: string;
  activateIcon: any;
}

const MobileItem: React.FC<MobileItemProps> = ({
  label,
  href,
  icon: Icon,
  active,
  activateIcon: Iconactive,
}) => {
  return (
    <Link
      href={href}
      className={clsx(
        `
        flex 
        items-center
        flex-col
        leading-6 
        font-semibold 
        w-full 
        justify-center 
        h-full
        
        text-gray-500 
        hover:bg-gray-200
      `,
        active && "bg-gray-100"
      )}
    >
      {active ? (
        <Icon className="w-7 h-7 text-black transition-all duration-100 stroke-2" />
      ) : (
        <Icon className="w-6 h-6 transition-all duration-100" />
      )}

      <p
        className={clsx(
          `text-sm  pb-1`,
          active &&
            " text-md text-black font-extrabold transition-all duration-100"
        )}
      >
        {label}
      </p>
    </Link>
  );
};

export default MobileItem;
