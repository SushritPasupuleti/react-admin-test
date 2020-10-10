import * as React from "react";
import { Filter, ReferenceInput, SelectInput, TextInput, List, TextField, ReferenceField, Datagrid, EditButton, SimpleList } from 'react-admin';
import { useMediaQuery } from '@material-ui/core';

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

const PostList = (props) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));

    return (<List filters={<PostFilter />} {...props}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                {/* <TextField source="id" /> */}
                <TextField source="name" />
            </ReferenceField>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            <EditButton />
        </Datagrid>
    </List>
    )
};

export default PostList