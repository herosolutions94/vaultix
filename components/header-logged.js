import Link from "next/link";
import { useRouter } from 'next/router';
import { useState } from "react";

export default function LoggedHeader() {
  const router = useRouter();
  const [userDrop, setUserDrop] = useState(false);
  

  const ToggleUserDrop = () => {
    setUserDrop(!userDrop);
  };
  return (
    <>
      <header className="logged_header dash_logged_header">
        <div className="contain">
          <div className="logged_side dashload_side">
            <form>
              <div className="inner">
                <img src="/images/dashboard/search.svg" alt=""/>
                <input type="text" name="" placeholder="Search vault assets, rules or logs..." className="input"/>
              </div>
            </form>
            <ul>

              <li className="logged_drop">
                <button className="logged_drop_btn dp_dp_outer" onClick={ToggleUserDrop}>
                  <div className="user_img">
                    <img src="/images/dashboard/user.png" alt="" />
                  </div>
                </button>
                <ul className={userDrop ? "sub active dp_drop_dash" : "sub dp_drop_dash"} >
                  <li><Link href="/dashboard" onClick={ToggleUserDrop}>Dashboard</Link></li>
                  <li><a href="#!" onClick={(e) => logout(e, router?.asPath)}>Logout</a></li>
                </ul>
              </li>

              
            </ul>
          </div>
          <div className="clearfix"></div>
        </div>
      </header>
    </>
  );
}
