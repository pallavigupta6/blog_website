// "use client";
// import {
//   HomeIcon,
//   DocumentDuplicateIcon,
//   UserGroupIcon,
//   EnvelopeIcon,
// } from "@heroicons/react/outline";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// // import clsx from 'clsx';

// const links = [
//   { name: "Home", href: "/", icon: HomeIcon },
//   { name: "Posts", href: "/blog/posts", icon: DocumentDuplicateIcon },
//   { name: "About", href: "/blog/about", icon: UserGroupIcon },
//   { name: "Contact", href: "/blog/contact", icon: EnvelopeIcon },
// ];

// export default function NavLink() {
//   const pathname = usePathname();

//   return (
//     <>
//       {links.map((link) => {
//         const LinkIcon = link.icon;
//         return (
//           <Link
//             key={link.name}
//             href={link.href}
//             className="flex h-[48px] grow items-center justify-center gap-2 rounded"
//           >
//             <LinkIcon />
//             <p className="hidden md:block">{link.name}</p>
//           </Link>
//         );
//       })}
//     </>
//   );
// }
"use client";

import { HomeIcon } from "@heroicons/react/outline"; // Make sure this path is correct for v2
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Posts", href: "/blog/posts", icon: HomeIcon },
  { name: "About", href: "/blog/about", icon: HomeIcon },
  { name: "Contact", href: "/blog/contact", icon: HomeIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        // const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center  gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-purple-100 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-purple-100": pathname === link.href,
              }
            )}
          >
            <p className="hidden md:block" style={{ color: "black" }}>
              {link.name}
            </p>
          </Link>
        );
      })}
    </>
  );
}
