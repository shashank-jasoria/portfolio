"use client";
import React, { Suspense, lazy, useState } from 'react';
import routes from "./data/routes";
import Link from 'next/link';

// Define the props for the Menu component
interface MenuProps {
  right: boolean;
  isOpen: boolean;
  children?: React.ReactNode;
}

// Lazy load the Menu component and cast it to the correct type
const Menu = lazy(() => import('react-burger-menu/lib/menus/slide')) as React.ComponentType<MenuProps>;

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="hamburger-container">
      <nav className="main" id="hambuger-nav">
        <ul>
          {open ? (
            <li className="menu close-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">
                &#10005;
              </div>
            </li>
          ) : (
            <li className="menu open-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">
                &#9776;
              </div>
            </li>
          )}
        </ul>
      </nav>
      <Suspense fallback={<></>}>
        {/* Now Menu is correctly typed with MenuProps */}
        <Menu right={true} isOpen={open}>
          <ul className="hamburger-ul">
            {routes.map((l) => (
              <li key={l.label}>
                <Link href={l.path} onClick={() => setOpen(!open)}>
                  <h3 className={l.index ? "index-li" : undefined}>{l.label}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </Menu>
      </Suspense>
    </div>
  );
};

export default Hamburger;














////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// "use client"
// import React, { Suspense, lazy, useState } from 'react';

// import routes from "../data/routes"
// import Link from 'next/link';

// const Menu = lazy(() => import('react-burger-menu/lib/menus/slide'));
// // react-burger-menu/lib/menus/slide
// const Hamburger = () => {
//   // Define the expected props for the Menu component
// interface MenuProps {
//   right: boolean;
//   isOpen: boolean;
//   children: React.ReactNode;
// }
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="hamburger-container">
//       <nav className="main" id="hambuger-nav">
//         <ul>
//           {open ? (
//             <li className="menu close-menu">
//               <div onClick={() => setOpen(!open)} className="menu-hover">
//                 &#10005;
//               </div>
//             </li>
//           ) : (
//             <li className="menu open-menu">
//               <div onClick={() => setOpen(!open)} className="menu-hover">
//                 &#9776;
//               </div>
//             </li>
//           )}
//         </ul>
//       </nav>
//       <Suspense fallback={<></>}>
//         <Menu right isOpen={open}>
//           <ul className="hamburger-ul">
//             {routes.map((l) => (
//               <li key={l.label}>
//                 <Link href={l.path} onClick={() => setOpen(!open)}>
//                   <h3 className={l.index && 'index-li'}>{l.label}</h3>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </Menu>
//       </Suspense>
//     </div>
//   );
// };

// export default Hamburger;
