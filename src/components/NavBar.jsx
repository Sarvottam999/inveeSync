import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';


export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = "/";
  const router = useRouter();

  const isActive = (pathname) => router.pathname === pathname;

  
  // console.log(location.pathname)



  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
 



  return (

    <nav className="mt-5  p-2">

      <div className="flex justify-center space-x-12 text-lg font-gt items-center ">
        <Link href={"/"}  className={isActive('/') ? "  flex space-x-3  font-medium bg-slate-100 px-4 p-1 rounded-xl" : "flex space-x-3  font-medium   px-4 p-1 rounded-xl "}>
          <span>Orders</span>  <span className={isActive('/') ?'text-xs px-2 py-1 border-2 rounded-lg border-white ' : "text-xs px-2 py-1 border-2 rounded-lg border-white"}>/</span>
        </Link>
        <Link href={"/inventory"} className={isActive('/inventory') ? "  flex space-x-3  font-medium bg-slate-100 px-4 p-1 rounded-xl" : "flex space-x-3  font-medium   px-4 p-1 rounded-xl "}>
          Inventory
        </Link>
        

       
        <div>



        </div>
      </div>


    </nav>
  );
}


{/* <nav className="bg-gray-800 p-4">
<div className="container mx-auto flex justify-between items-center">
  <div className="text-white font-bold text-xl">
    <Link href="/">
      <span>Inventory Management</span>
    </Link>
  </div>
  <div>
    <Link href="/orders">
      <span className="text-white px-3 py-2 rounded-md text-sm font-medium">Orders</span>
    </Link>
    <Link href="/inventory">
      <span className="text-white px-3 py-2 rounded-md text-sm font-medium">Inventory</span>
    </Link>
  </div>
</div>
</nav> */}
