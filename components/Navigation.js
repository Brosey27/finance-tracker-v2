import { ImStatsBars } from "react-icons/im";
import User from "../public/user.png";
import Image from "next/image";


function Nav() {
  return (
    <header className="container max-w-2xl px-6 py-6 mx-auto">
    <div className="flex items-center justify-between">
      {/* User information */}
      <div className="flex items-center gap-2">
        {/* img */}
        <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
          <Image
            className="object-cover w-full h-full"
            src={User}
            alt="Profile image"
          />
        </div>

        {/* name */}
        <small>Hi, Broseph!</small>
      </div>

      {/* Right side of our navigation */}
      <nav className="flex items-center gap-4">
        <div>
          <ImStatsBars className="text-2xl" />
        </div>
        <div>
          <button className="btn btn-danger">Sign out</button>
        </div>
      </nav>
    </div>
  </header>
  );
}

export default Nav;