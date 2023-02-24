import React, {useState} from 'react';
import './App.scss';
import {Route, Routes} from "react-router-dom";
import {UsersList} from "./features/UsersList";
import {Posts} from "./features/Posts";
import {Albums} from "./features/Albums";
import {Modal} from "./utils/Modal";
import {endpoints} from "./api/endpoints";

function App() {
  const [modalActive, setModalActive] = useState(true);
  const {posts, albums} = endpoints;

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<UsersList setActive={setModalActive} />} />
          <Route path={posts} element={<Posts />} />
          <Route path={albums} element={
            <Modal active={modalActive} setActive={setModalActive}>
              <Albums />
            </Modal>
          } />
        </Routes>
      </header>
    </div>
  );
}

export default App;
