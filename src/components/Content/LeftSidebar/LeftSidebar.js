import React from "react";
import { Avatar } from "@mui/material";
import SidebarRow from "./sidebarRow";
import sidebarData from "./sidebarData";

function LeftSidebar() {
  return (
    <div className='sidebar__left justif flex w-1/5 flex-col border-r-2 border-trueGray-700'>
      <div className='my-2 flex cursor-pointer items-center rounded-l-xl py-2 pl-3 text-sm text-slate-200 hover:bg-trueGray-700'>
        <Avatar
          className=''
          src={"./Me2.jpg"}
          style={{
            width: "42px",
            height: "42px",
          }}
        />
        <p className='ml-4 text-base font-bold text-white'>Maen Dassin</p>
      </div>
      {sidebarData.map((data, index) => (
        <SidebarRow
          key={index}
          icon={data.icon}
          label={data.label}
          color={data.color}
        />
      ))}
    </div>
  );
}

export default LeftSidebar;