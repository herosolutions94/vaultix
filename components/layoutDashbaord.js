
import LoggedHeader from './header-logged';
import SiteMaster from './sitemaster';

export default function LayoutDashboard({ children }) {
  return (
    <>
      <div className="content">
          <SiteMaster />
          {children}
          
          
        </div>
    </>
  );
}
