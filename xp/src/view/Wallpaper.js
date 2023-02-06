import { useState, useEffect } from "react";
import { collection, addDoc, getDocs, query, onSnapshot, orderBy } from "firebase/firestore";
import { dbService } from "../fb";
import styled from "styled-components";

import Directory from "../components/Directory";

const StyledWallpaper = styled.section`
  background: url(img/wallpaper.jpg) no-repeat center;
  background-size: cover;

  ul {
    position: absolute;
  }
`;

const StyledContext = styled.ul`
  ${({ contextOpen }) => {
    return contextOpen.state
      ? `display: block; left: ${contextOpen.pageX}px; top: ${contextOpen.pageY}px;`
      : `display: none`;
  }}
`;

const Wallpaper = () => {
  // 우클릭 이벤트
  const [contextOpen, setContextOpen] = useState({ state: false, pageY: 0, pageX: 0 });
  useEffect(() => {
    const onContextMenu = event => {
      event.preventDefault();
      setContextOpen({ state: true, pageY: event.pageY, pageX: event.pageX });
    };
    function onClearContextMenu(event) {
      setContextOpen({ state: false });
    }
    document.addEventListener("contextmenu", onContextMenu, false);
    document.addEventListener("click", onClearContextMenu, false);
  }, []);

  // 파일생성 이벤트
  const onFileCreate = async () => {
    try {
      const docRef = await addDoc(collection(dbService, "JavaScript"), {
        name: "abc",
        content: "lorem lisum",
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // 파일 가져오기
  const [files, setFiles] = useState();
  useEffect(() => {
    const q = query(
      collection(dbService, "JavaScript"),
      // orderBy("createdAt", "desc"),
    );
    onSnapshot(q, snapshot => {
      const fileArr = snapshot.docs.map(document => ({
        id: document.id,
        ...document.data(),
      }));
      setFiles(fileArr);
    });
  }, []);

  return (
    <>
      <StyledWallpaper>
        <StyledContext contextOpen={contextOpen}>
          <li>
            <button onClick={onFileCreate}>파일생성</button>
          </li>
        </StyledContext>
        <ul>
          <li>
            <button>JavaScript</button>
          </li>
          <li>
            <button>React</button>
          </li>
        </ul>
        <div className="taskBar"></div>
      </StyledWallpaper>
    </>
  );
};

export default Wallpaper;
