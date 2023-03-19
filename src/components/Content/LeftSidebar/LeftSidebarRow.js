import React from "react";

function SidebarRow({ icon, label, color }) {
  return (
    <div className='flex cursor-pointer items-center rounded-l-xl py-3 pl-3 text-slate-200 hover:bg-trueGray-700'>
      {React.cloneElement(icon, { sx: { color, width: 32, height: 32 } })}
      <p className='self-center pl-3 text-base font-semibold text-white'>
        {label}
      </p>
    </div>
  );
}

export default SidebarRow;