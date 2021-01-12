import * as React from "react";
import { Filter, ReferenceInput, SelectInput, TextInput, List, TextField, ReferenceField, Datagrid, EditButton, SimpleList, ArrayField, SingleFieldList, ChipField } from 'react-admin';
import { useMediaQuery } from '@material-ui/core';
import { useQuery, Loading, Error } from 'react-admin';

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
                    <Datagrid rowClick="edit" expand={<ExpandedDetails></ExpandedDetails>}>
                        {/* <TextField source="userId" /> */}
                        <TextField source="title" />
                        <TextField source="content" />
                        {/* <TextField source="slug" /> */}
                        <ArrayField source="instructions"><SingleFieldList><ChipField source="step" /></SingleFieldList></ArrayField>
                        <TextField source="createdBy"></TextField>
                    </Datagrid>
                )}
        </List>
    );
}

const ExpandedDetails = (props) => {
    const { data, loading, error } = useQuery({ 
        type: 'getOne',
        resource: 'users',
        payload: { id: props.record.userId }
    });

    console.log("data: ",{ data, loading, error, props })

    if (loading) return <Loading />;
    if (error) return <Error />;
    if (!data) return null;

    return (
        <div>
            Written by: {data.name}
        </div>
    )
}

export default PostList