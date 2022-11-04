import Layout from './components/Layout.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import NewPost from './pages/NewPost.js';
import PostPage from './pages/PostPage.js';
import Error from './pages/Error.js';
import { Route, Routes, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([{
    id: 1,
    title: "My First Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  },
  {
    id: 2,
    title: "My 2nd Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  },
  {
    id: 3,
    title: "My 3rd Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  },
  {
    id: 4,
    title: "My Fourth Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  }])

  const [search, setSearch] = useState('')
  // const [searchResults, setSearchResults] = useState([])
  return (
    <Routes>
      <Route path="/" element={<Layout search={search} setSearch={setSearch} />}>
        <Route path="/" element={<Home posts={posts} />} />

        <Route>
          <Route path="post" element={<NewPost />} />
          <Route path="post/:id" element={<PostPage posts={posts} />} />
        </Route>

        <Route path="about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
