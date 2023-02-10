import Wallpaper from "./components/Wallpaper";
import Directory from "./components/Directory";
import Layer from "./components/Layer";
import Taskbar from "./components/Taskbar";

import "./assets/css/common.scss";

function App() {
  return (
    <main>
      <Wallpaper />
      <Directory />
      <Layer />
      <Taskbar />
    </main>
  );
}

export default App;
