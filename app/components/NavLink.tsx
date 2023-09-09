import { ReactEventHandler } from 'react';
import Link from 'next/link';

const NavLink = ({
  title,
  onClick,
  href,
}: {
  title: string;
  href: string;
  onClick?: ReactEventHandler;
}) => {
  return (
    <Link onClick={onClick} href={href} scroll={true} className="m-2">
      {title}
    </Link>
  );
};

export default NavLink;
