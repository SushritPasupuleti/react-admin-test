import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

import UserList from './components/userList';
import PostList from './components/postList';
import PostEdit from './components/postEdit';
import PostCreate from './components/postCreate';
import Dashboard from './components/dashboard';

import authProvider from './auth/authProvider';

import simpleRestProvider from 'ra-data-simple-rest';

const dataProvider = './utils/dataProvider.js'//jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={simpleRestProvider('http://localhost:5000')}>
    {/* // <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}> */}
    {/* <Resource name="users" list={ListGuesser} /> */}
    <Resource name="posts" list={ListGuesser} />
    {/* <Resource name="users" list={UserList} icon={UserIcon}/> */}
    {/* <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/> */}
  </Admin>

);

export default App;