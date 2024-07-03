"use client"

import Link from 'next/link';
import styles from './menuLink.module.css';
import { usePathname } from 'next/navigation';

const MenuLink = ({ item }) => {
  const pathname = usePathname();

  if (!item || !item.path) {
    console.error('MenuLink item or item.path is undefined');
    return null; // Don't render anything if item or item.path is undefined
  }

  return (
    <Link href={item.path} className={`${styles.container} ${pathname === item.path ? styles.active : ''}`}>
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
