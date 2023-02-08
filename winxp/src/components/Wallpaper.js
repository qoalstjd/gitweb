import styled from "styled-components";

const StyledWallpaper = styled.section`
  position: relative;
  height: 100%;
  flex: 1;
  background: url(img/main.jpg) center no-repeat;
  background-size: cover;

  ul {
    display: flex;
    flex-direction: column;
    width: 70px;
    gap: 42px 1px;
    padding: 10px 0;

    li {
      position: relative;
      text-align: center;
      padding: 5px;
      padding-bottom: 0px;

      div {
        width: 48px;
        height: 48px;
        margin: 0 auto;
        background: url(../img/splite_ico.png) no-repeat;
        background-position: 0 0;
        background-size: 500%;
        vertical-align: top;
      }

      p {
        position: absolute;
        left: 5px;
        top: 53px;
        width: 60px;
        word-break: break-all;

        &.on {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        font-size: 14px;
        font-weight: 500;
        text-shadow: 2px 0 2px #000;
      }
      .ellipsis {
        width: 200px;
      }
    }
  }
`;

function Wallpaper() {
  return (
    <StyledWallpaper>
      <ul>
        <li>
          <div></div>
          <p className="on">JavaScriptJavaScriptJavaScriptJavaScriptJavaScriptJavaScript</p>
        </li>
        <li>
          <div></div>
          <p>JavaScript</p>
        </li>
      </ul>
    </StyledWallpaper>
  );
}

export default Wallpaper;
