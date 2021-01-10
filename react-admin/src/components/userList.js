import * as React from "react";
import { List, Datagrid, TextField, EmailField, ReferenceField } from 'react-admin';

const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="phone" />
        </Datagrid>
    </List>
);

export default UserList;