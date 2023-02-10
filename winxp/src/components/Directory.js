import { useState, useRef } from "react";

function Directory() {
  const directory = useRef();

  // dir control
  const minimization = () => {};

  const [minmax, setMinmax] = useState(true);
  const minmaxToggle = () => {
    setMinmax(prev => !prev);
    minmax ? directory.current.classList.add("max") : directory.current.classList.remove("max");
  };

  const closeDir = () => {
    directory.current.remove();
  };

  // dir route
  const [dirRoute, setdirRoute] = useState("");
  const route = event => {
    setdirRoute(event.target.value);
  };

  const fileList = [
    { name: "1. 기본 개념과 동작 원리 이해의 중요성", size: "22KB", type: "txt", createdDate: "2022-05-10" },
    { name: "2. 자바스크립트란?", size: "53KB", type: "txt", createdDate: "2022-05-12" },
    { name: "3. 자바스크립트 개발 환경과 실행 방법", size: "32KB", type: "txt", createdDate: "2022-05-17" },
  ];
  return (
    <section className="directory" ref={directory}>
      <div className="title">
        <p>JavaScript</p>
        <div>
          <button onClick={minimization}>
            <span className="hidden">최소화</span>
          </button>
          <button onClick={minmaxToggle}>
            <span className="hidden">최대화</span>
          </button>
          <button onClick={closeDir}>
            <span className="hidden">닫기</span>
          </button>
        </div>
      </div>
      <div className="menu">
        <div>
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
        <form onSubmit={event => event.preventDefault()}>
          <label htmlFor="address">주소(D)</label>
          <input id="address" type="text" value={dirRoute} onChange={route} />
          <button>이동</button>
        </form>
      </div>
      <div className="content">
        <aside></aside>
        <div>
          <table>
            <caption>폴더 내부 파일 목록</caption>
            <colgroup>
              <col style={{ width: "60%" }} />
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
              {fileList.map((data, i) => (
                <tr key={i} className={data.type}>
                  <td>
                    <button>
                      {data.name}.{data.type}
                    </button>
                  </td>
                  <td>{data.size}</td>
                  <td>{data.type.toUpperCase()} 파일</td>
                  <td>{data.createdDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="windowBar"></div>
    </section>
  );
}

export default Directory;
