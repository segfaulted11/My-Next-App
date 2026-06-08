"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {

    const pathName = usePathname();
    // console.log('pathname of the current page is ',pathName)//it returns the path of the page you are currently visting on, for example if u r visiting home page it returns (pathname of the current page is "/")

      const links =( <>
      <li><Link href={`/about`} className={pathName ==='/about'?'text-blue-400':''}>About</Link></li>
      <li><Link href={`/contact`}>Contact</Link></li>
      <li><Link href={`/about/developers`} className={pathName ==='/about/developers'?'text-blue-400':''}>Developers</Link></li>
      <li><Link href={`/blogs`} className={pathName ==='/blogs'?'text-blue-400':''}>Blogs</Link></li>
      <li><Link href={`/dashboard`} className={pathName ==='/dashboard'?'text-blue-400':''}>DashBoard</Link></li>
      <li><Link href={`/foods`} className={pathName ==='/foods'?'text-blue-400':''}>Foods</Link></li>
  </>)
    return (
<div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg></div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <Link href={`/`} className="btn btn-ghost text-xl">Next JS</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
         {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Log In</a>
  </div>
</div>
    );
};

export default Navbar;