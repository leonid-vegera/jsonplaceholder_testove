import React, {useState} from 'react';
import './App.scss';
import {Route, Routes, useLocation, useSearchParams} from "react-router-dom";
import {UsersList} from "./components/UsersList";
import {Posts} from "./components/Posts";
import {Albums} from "./components/Albums";
import {Modal} from "./utils/Modal";

function App() {
  const [users, setUsers] = useState([]);
  const [checkedUserId, setCheckedUserId] = useState(0);
  const [posts, setPosts] = useState([])
  const [modalActive, setModalActive] = useState(true);
  //
  // const location = useLocation();
  // console.log('location', location)

  // const [searchParams, setSearchParams] = useSearchParams('');
  // console.log('searchParams+++', searchParams.get('userId'));

  // console.log('checkedUserId', checkedUserId)

  // const getUsers = () => {
  //   // return request('/users')
  //       // .then(result => setUsers(result))
  //       .then(setUsers)
  // }
  // const getPosts = (userId) => {
  //   request('/posts')
  //     .then(posts => {
  //       return setPosts(posts.filter(post => post.userId === userId))
  //     });
  // }

  // useEffect(() => {
  //   getUsers()
  //     .then(setUsers)
  // }, [])


  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <Routes>
          {/*<Route path="/" element={<Modal active={modalActive} setActive={setModalActive} />} />*/}
          <Route path="/" element={<UsersList users={users} setUsers={setUsers} setActive={setModalActive} />} />
          {/*<Route path="posts/:userId" element={<Posts userId={checkedUserId}/>} />*/}
          <Route path="posts" element={<Posts />} />
          <Route path="albums" element={
            <Modal active={modalActive} setActive={setModalActive}>
              <Albums />
            </Modal>
          } />
        </Routes>
        {/*<ul className={"users-list"}>*/}
        {/*  {users.map(user => (*/}
        {/*      <li key={user.id}>*/}
        {/*        {user.name}*/}
        {/*        <Link to='./posts' target="_blank">*/}
        {/*          <button type="button" onClick={() => handlePosts(user.id)}>*/}
        {/*            Пости*/}
        {/*          </button>*/}
        {/*        </Link>*/}

        {/*        <button type="button" onClick={() => {}}>*/}
        {/*          Альбоми*/}
        {/*        </button>*/}
        {/*      </li>*/}
        {/*  ))}*/}
        {/*</ul>*/}
        {/*<Counter />*/}
        {/*<p>*/}
        {/*  Edit <code>src/App.jsx</code> and save to reload.*/}
        {/*</p>*/}
        {/*<span>*/}
        {/*  <span>Learn </span>*/}
        {/*  <a*/}
        {/*    className="App-link"*/}
        {/*    href="https://reactjs.org/"*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    React*/}
        {/*  </a>*/}
        {/*  <span>, </span>*/}
        {/*  <a*/}
        {/*    className="App-link"*/}
        {/*    href="https://redux.js.org/"*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    Redux*/}
        {/*  </a>*/}
        {/*  <span>, </span>*/}
        {/*  <a*/}
        {/*    className="App-link"*/}
        {/*    href="https://redux-toolkit.js.org/"*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    Redux Toolkit*/}
        {/*  </a>*/}
        {/*  ,<span> and </span>*/}
        {/*  <a*/}
        {/*    className="App-link"*/}
        {/*    href="https://react-redux.js.org/"*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    React Redux*/}
        {/*  </a>*/}
        {/*</span>*/}
      </header>
    </div>
  );
}

export default App;
