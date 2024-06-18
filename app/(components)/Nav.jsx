import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <nav className="flex justify-between p-4 bg-black">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href="/Ticketpage/new">
          <FontAwesomeIcon icon={faTicket} className="icon" />
        </Link>
        <Link href="/triples" className="text-white">
          TripleS
        </Link>
      </div>
      <div>
        <p className="text-default-text">holycow@molly.com</p>
      </div>
    </nav>
  );
};

export default Nav;
