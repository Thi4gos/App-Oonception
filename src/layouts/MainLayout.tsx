import MenuLateral from "../components/Meijor/MenuLateral";
import TopBar from "../components/Meijor/TopBar";
import WorkSpace from "../components/Meijor/WorkSpace"

function MainPage() {
    return (
        <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] h-screen">
          {/* MENU LATERAL */}
          <div className="col-span-1 row-span-2 w-fit bg-gray-800">
            <MenuLateral />
          </div>
      
          {/* TOPBAR */}
          <div className="col-span-1 row-span-1 bg-gray-200">
            <TopBar />
          </div>
      
          {/* WORKSPACE */}
          <div className="col-span-1 row-span-1 bg-white">
            <WorkSpace />
          </div>
        </div>
      );      
}

export default MainPage