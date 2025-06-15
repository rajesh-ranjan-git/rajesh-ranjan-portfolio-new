import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useSidebarStore } from "@/store/store";
import { menuItems } from "@/config/menuItems";

const SidebarMenu = () => {
  const sidebarToggle = useSidebarStore((state) => state.sidebarToggle);
  const setSidebarToggle = useSidebarStore((state) => state.setSidebarToggle);

  const handleListItemAction = () => {
    if (sidebarToggle) setSidebarToggle(false);
  };

  return (
    <ul className="flex flex-col gap-2 2xl:gap-5 w-full">
      {menuItems && menuItems.length > 0 ? (
        menuItems.map((item, index) => (
          <li
            className="flex justify-start items-center gap-4 hover:bg-blue-500 p-2 px-3 rounded-md w-full h-10 overflow-hidden text-xl transition-all ease-in-out cursor-pointer"
            onClick={handleListItemAction}
            key={index}
          >
            <div className="flex justify-center items-center w-6 min-w-6">
              {item?.icon}
            </div>

            {sidebarToggle && (
              <div className="px-3 w-full text-lg whitespace-nowrap">
                <h2 className="w-full text-left">{item?.label}</h2>
              </div>
            )}
          </li>
        ))
      ) : (
        <li className="flex items-center gap-4 hover:bg-blue-500 p-3 rounded-md w-full text-xl transition-all ease-in-out cursor-pointer">
          <div>
            <FontAwesomeIcon icon={faHouse} />
          </div>

          {sidebarToggle && (
            <div className="px-3 w-full text-lg whitespace-nowrap">
              <h2 className="w-full text-left">Home</h2>
            </div>
          )}
        </li>
      )}
    </ul>
  );
};

export default SidebarMenu;
