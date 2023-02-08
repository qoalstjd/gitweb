import styled from "styled-components";

const StyledDirectory = styled.section`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 500px;
  border: 3px solid #005aeb;
  border-top: none;
  border-radius: 8px 8px 0 0;
  background-color: #fff;
  overflow: hidden;

  .title {
    height: 32px;
    background-image: url(img/window_title.png);

    .titText {
      color: #fff;
      padding-left: 32px;
      line-height: 32px;

      &::before {
        content: "";
        display: block;
        position: absolute;
        left: 8px;
        top: 8px;
        width: 16px;
        height: 16px;
        background: url(img/splite_ico.png) no-repeat;
        background-position: 0 0;
        background-size: 500%;
      }
    }
    .btns {
      position: absolute;
      right: 3px;
      top: 3px;
      display: flex;
      gap: 3px;
      button:nth-child(1) {
        background-position: 0 0;
      }
      button:nth-child(2) {
        background-position: -26px 0;
      }
      button:nth-child(3) {
        background-position: -78px 0;
      }
      button {
        display: block;
        width: 26px;
        height: 26px;
        background: url(../img/splite.png) no-repeat;
        background-position: 0 0;
        background-size: 500%;
      }
    }
  }
`;

function Directory() {
  return (
    <StyledDirectory>
      <div className="title">
        <p className="titText">JavaScript</p>
        <div className="btns">
          <button onclick="minimization()">
            <span className="hidden">최소화</span>
          </button>
          <button onclick="maximize()">
            <span className="hidden">최대화</span>
          </button>
          <button onclick="closeLayer()">
            <span className="hidden">닫기</span>
          </button>
        </div>
      </div>
      <div className="menu">
        <div className="controls">
          <button className="withText">
            <span>뒤로</span>
          </button>
          <button>
            <span className="hidden">앞으로</span>
          </button>
          <button>
            <span className="hidden">상위폴더</span>
          </button>
          <button className="withText">
            <span>검색</span>
          </button>
          <button className="withText">
            <span>폴더</span>
          </button>
        </div>
        <div className="addressBar">
          <span>주소(D)</span>
          {/* <input type="text" value="바탕화면₩JavaScript"> */}
          <button>이동</button>
        </div>
      </div>
      <div id="content">
        <div className="menuDetail"></div>
        <div className="fileList">
          <table>
            <caption>폴더 내부 파일 목록</caption>
            <colgroup>
              {/* <col style="width: 60%;" />
                <col style="width: 10%;" />
                <col style="width: 15%;" />
                <col style="width: 15%;" /> */}
            </colgroup>
            <thead>
              <tr>
                <th>이름</th>
                <th>크기</th>
                <th>종류</th>
                <th>수정한 날짜</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1. 기본 개념과 동작 원리 이해의 중요성.txt</td>
                <td>123KB</td>
                <td>TXT 파일</td>
                <td>2022-05-26</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="windowBar"></div>
    </StyledDirectory>
  );
}

export default Directory;
