import styled from "styled-components";

const StyledLayer = styled.section`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: none;
`;

function Layer() {
  return (
    <StyledLayer>
      <h2>Layer</h2>
    </StyledLayer>
  );
}

export default Layer;
