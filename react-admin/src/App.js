import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import UserList from './components/userList';
import PostList from './components/postList';
import PostEdit from './components/postEdit';
import PostCreate from './components/postCreate';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dataProvider={dataProvider}>
    {/* <Resource name="users" list={ListGuesser} /> */}
    {/* <Resource name="posts" list={ListGuesser} /> */}
    <Resource name="users" list={UserList}/>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate}/>
  </Admin>

);

export default App;