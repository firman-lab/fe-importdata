import Link from 'next/link';
import cx from "classnames";
import React from 'react';


interface MenuItemProps{
    title: string;
    active?: boolean;
    href: string;
    icon: string;
}

export default function MenuItem(props : Partial<MenuItemProps>) {
  const {
    title, active, href = "", icon,
  } = props;
  const classItem = cx({
    active,
  });
  return (
    <Link href={href}>
      <a className={`sidebar-item ${classItem}`}>
        <i className={`bx ${icon}`} />
        <span>{title}</span>
      </a>
    </Link>
  );
}
