import Link from "next/link";

const DashboardLayout = ({children}) => {
    return (
  <div className="drawer lg:drawer-open">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
      Open drawer
    </label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-red-500 min-h-full w-80 p-4">
      {children}
      {/*  */}
      <li><Link href={`/dashboard/profile`}>Profile</Link></li>
      <li><Link href={`/dashboard/revenue`}>Revenue</Link></li>
    </ul>
  </div>
</div>
    );
};

export default DashboardLayout;