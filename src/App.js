import Layout from './components/Layout.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import NewPost from './pages/NewPost.js';
import PostPage from './pages/PostPage.js';
import Error from './pages/Error.js';
import { Route, Routes, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function App() {
  const [posts, setPosts] = useState([{
    id: 1,
    title: "My first Post",
    datetime: "Oct 29, 2022",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  },
  {
    id: 2,
    title: "My second Post",
    datetime: "Nov 01, 2022",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  },
  {
    id: 3,
    title: "My third Post",
    datetime: "Nov 02, 2022",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  },
  {
    id: 4,
    title: "My fourth Post",
    datetime: "Nov 04, 2022",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  }])

  const [search, setSearch] = useState('')
  // const [searchResults, setSearchResults] = useState([])
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const postsList = posts.filter(post => post.id !== id);
    setPosts(postsList);
    navigate('/');
  }
  return (
    <Routes>
      <Route path="/" element={<Layout search={search} setSearch={setSearch} />}>
        <Route path="/" element={<Home posts={posts} />} />

        <Route>
          <Route path="post" element={<NewPost />} />
          <Route path="post/:id" element={<PostPage posts={posts} handleDelete={handleDelete} />} />
        </Route>

        <Route path="about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
