import * as React from "react";
import { Filter, ReferenceInput, SelectInput, TextInput, List, TextField, ReferenceField, Datagrid, EditButton, SimpleList } from 'react-admin';
import { useMediaQuery } from '@material-ui/core';

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        {/* <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput> */}
    </Filter>
);

const PostList = (props) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));

    return (
        <List filters={<PostFilter />} {...props}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => `${record.views} views`}
                    tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            ) : (
                <Datagrid>
                    <TextField source="id" />
                    {/* <ReferenceField label="User" source="userId" reference="users">
                        <TextField source="name" />
                    </ReferenceField> */}
                    <TextField source="title" />
                    <TextField source="content" />
                    <EditButton />
                </Datagrid>
            )}
        </List>
    );
}

export default PostList