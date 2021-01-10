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

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

const dataProvider = './utils/dataProvider.js'//jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = createMuiTheme({
    palette: {
      type: prefersDarkMode ? 'dark' : 'light',
      primary: {
        // Purple and green play nicely together.
        main: '#11cb5f',
      },
      secondary: {
        // This is green.A700 as hex.
        main: purple[500],
      },
    }
  });

  return (
    <Admin theme={theme} dashboard={Dashboard} authProvider={authProvider} dataProvider={simpleRestProvider('http://localhost:5000')}>
      {/* // <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}> */}
      {/* <Resource name="users" list={ListGuesser} /> */}
      {/* <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate}/> */}
      <Resource name="users" list={UserList} icon={UserIcon}/>
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    </Admin>

  )
};

export default App;