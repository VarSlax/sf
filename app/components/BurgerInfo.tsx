import React from 'react';
import Link from 'next/link';

const BurgerInfo = ({
  title,
  onClick,
  href,
}: {
  title: string;
  href: string;
  onClick: React.ReactEventHandler;
}) => {
  return (
    <Link onClick={onClick} href={href} scroll={true} className="my-2">
      {title}
    </Link>
  );
};

export default BurgerInfo;
