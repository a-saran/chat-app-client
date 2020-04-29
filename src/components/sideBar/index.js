import React, { useRef, useEffect, useCallback } from "react";
import "./style.css";

const SideBar = ({ users: { users }, visibility, closeSideBar }) => {
  const sideBarRef = useRef();
  const handleOutsideClick = useCallback(
    (e) => {
      if (sideBarRef.current.contains(e.target)) {
        return;
      }
      closeSideBar();
    },
    [closeSideBar]
  );

  useEffect(() => {
    visibility &&
      document.body.addEventListener("click", handleOutsideClick, true);
    return () => {
      visibility &&
        document.body.removeEventListener("click", handleOutsideClick, true);
    };
  }, [handleOutsideClick, visibility]);

  return (
    <div
      className={`sidebar-container ${visibility ? "visible" : ""}`}
      ref={sideBarRef}
    >
      <h1 className='heading -sm'>Users</h1>
      {users && users.length > 0 && users.map((user, i) => <h3 key={i}>{user.name}</h3>)}
    </div>
  );
};

export default SideBar;
