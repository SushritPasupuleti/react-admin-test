import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import UserList from './components/userList';
import PostList from './components/postList';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dataProvider={dataProvider}>
    {/* <Resource name="users" list={ListGuesser} /> */}
    {/* <Resource name="posts" list={ListGuesser} /> */}
    <Resource name="users" list={UserList}/>
    <Resource name="posts" list={PostList} />
  </Admin>

);

export default App;