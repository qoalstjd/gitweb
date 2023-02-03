import Wallpaper from "../view/Wallpaper";
import Auth from "../view/Auth";
import { useState } from "react";
import "../css/reset.css";
import "../css/common.css";

const App = () => {
  const [signned, setSignned] = useState(false);
  return <>{signned ? <Wallpaper /> : <Auth setSignned={setSignned} />}</>;
};

export default App;
