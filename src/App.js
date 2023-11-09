import logo from "./logo.svg";
import "./App.css";
import ClassComponent from "./DemoComponent/ClassComponent";
import FunctionComponent from "./DemoComponent/FunctionComponent";
import Ex_Layout from "./Ex_Layout/Ex_Layout";
import DataBinding from "./DataBinding/DataBinding";
import DemoState from "./DemoComponent/DemoState/DemoState";
import EventHandling from "./EventHandling/EventHandling";
import Ex_Car from "./Ex_Car/Ex_Car";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import DemoProps from "./DemoProps/DemoProps";
import Ex_Phone from "./Ex_Phone/Ex_Phone";
import Ex_Shoe from "./Ex_Shoe/Ex_Shoe";
import ListShoe from "./Ex_Shoe/ListShoe";
import DemoRedux from "./DemoRedux/DemoRedux";
import Ex_Shoe_Redux from "./Ex_Shoe_Redux/Ex_Shoe_Redux";
function App() {
  // jsx : html + js
  return (
    <div className="">
      {/* <ClassComponent /> */}
      {/* <FunctionComponent /> */}
      {/* <Ex_Layout /> */}
      {/* <DataBinding /> */}
      {/* <DemoState /> */}
      {/* <EventHandling /> */}
      {/* <Ex_Car /> */}
      {/* <RenderWithMap /> */}
      {/* <DemoProps /> */}
      {/* <Ex_Phone /> */}
      {/* <Ex_Shoe /> */}

      {/* <DemoRedux /> */}
      <Ex_Shoe_Redux />
    </div>
  );
}

export default App;
