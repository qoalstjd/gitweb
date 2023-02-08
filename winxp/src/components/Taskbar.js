import styled from "styled-components";

const StyledTaskbar = styled.section`
  position: relative;
  height: 36px;
  background: url(img/bar.png);
  display: flex;

  button {
    display: block;
    background: url(img/start.png);
    width: 113px;
    height: 100%;
    font-size: 20px;
    padding: 0 0 3px 8px;
    font-weight: 500;
  }
  ul {
    width: 100%;
    flex: 1;
  }
  div {
    padding: 0 15px;
    border-left: 2px solid #21c5f6;
    background: url(img/time_bar.png);
    line-height: 36px;
    font-weight: 500;
  }
`;

function Taskbar() {
  return (
    <StyledTaskbar>
      <button>시작</button>
      <ul></ul>
      <div>오후 00:00</div>
    </StyledTaskbar>
  );
}

export default Taskbar;
