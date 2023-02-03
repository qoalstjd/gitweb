import styled from "styled-components";

const StyledWallpaper = styled.section`
  background: url(img/wallpaper.jpg) no-repeat center;
  background-size: cover;
`;

const Wallpaper = () => {
  return (
    <>
      <StyledWallpaper>
        <ul>
          <li></li>
          <li></li>
        </ul>
        <div className="taskBar"></div>
      </StyledWallpaper>
    </>
  );
};

export default Wallpaper;
