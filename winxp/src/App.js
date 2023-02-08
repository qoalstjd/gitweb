import Wallpaper from "./components/Wallpaper";
import Directory from "./components/Directory";
import Layer from "./components/Layer";
import Taskbar from "./components/Taskbar";

import styled from "styled-components";
import ResetCSS from "./assets/css/ResetCSS";
import CommonCSS from "./assets/css/CommonCSS";

const Main = styled.main`
  display: flex;
  flex-flow: column wrap;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

function App() {
  return (
    <>
      <ResetCSS />
      <CommonCSS />
      <Main>
        <Wallpaper />
        <Directory />
        <Layer />
        <Taskbar />
      </Main>
    </>
  );
}

export default App;
