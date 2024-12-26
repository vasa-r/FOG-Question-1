import ControlsSidebar from "./components/ControlsSideBar";
import MainBody from "./components/MainBody/MainBody";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <div className="flex w-screen h-screen">
      <SideBar />
      <MainBody />
      <ControlsSidebar />
    </div>
  );
};

export default App;
