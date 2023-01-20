'use client';

import styles from "./utils.module.css";
import Link from "next/link"
import { useSelectedLayoutSegment } from 'next/navigation'

export default function RootLayout({ children }) {
  const activeSegment = useSelectedLayoutSegment()

  const links = [
    {label: ' Home', path: '/', targetSegment: null}, 
    {label: ' News', path: '/news', targetSegment: 'news'},
    {label: ' Contact', path: '/contact', targetSegment: 'contact'}
  ];

  
  return (
    <html>
      <head />
      <body>
        <div className={`${styles.sidebar}`}>
        {links.map ( (l, i) => {
            return <Link 
                  key={i} 
                  href={l.path}
                  style={{textDecoration: (activeSegment === l.targetSegment) ? 'underline' : 'none'}}>
                {l.label}
            </Link>
        })}
        </div>
        <div className={`${styles.content}`}>
          {children}
        </div>
      </body>
    </html>
  )
}
