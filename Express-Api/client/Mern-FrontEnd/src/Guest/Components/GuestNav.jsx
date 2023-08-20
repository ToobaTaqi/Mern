import React from "react";
import { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";
import { BiHomeHeart, BiLogInCircle, BiLogOutCircle } from "react-icons/bi";

export default function GuestNav() {
  const location = useLocation();

  const NavItems = [
    {
      tab: "Home",
      url: "/",
      icon: (
        <BiHomeHeart
          size={30}
          color={location.pathname === "/" ? "#E6C9BA" : "#654321"}
        />
      ),
      bgColor: location.pathname === "/" ? "#654321" : "#E6C9BA",
    },
    {
      tab: "Login",
      url: "/login",
      icon: (
        <BiLogInCircle
          size={30}
          color={location.pathname === "/category" ? "#E6C9BA" : "#654321"}
        />
      ),
      bgColor: location.pathname === "/category" ? "#654321" : "#E6C9BA",
    },
    {
      tab: "Logout",
      // url: "/category",
      icon: (
        <BiLogOutCircle
          size={30}
          color={location.pathname === "/logout" ? "#E6C9BA" : "#654321"}
        />
      ),
      bgColor: location.pathname === "/logout" ? "#654321" : "#E6C9BA",
    },
  ];

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <div className=" d-flex justify-content-between box">
      <div className="gap-4">
        <p>You're visiting Us as a "Guest"
        </p>
      </div>

      <div className="mr-3 fixed">
        <ul className="nav">
          {NavItems.map((val, key) => (
            <li className={"nav-item "} key={key}>
              <Link className={`nav-link ${val.color}`} to={val.url}>
                <div
                  className="icon-wrapper p-1"
                  style={{ backgroundColor: val.bgColor, borderRadius: "5px" }}
                >
                  {val.icon}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
