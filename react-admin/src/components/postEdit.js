import * as React from "react";
import { Edit, SimpleForm, ReferenceInput, TextInput, SelectInput } from 'react-admin';

export const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = props => (
    <Edit title={<PostTitle/>} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            {/* <ReferenceInput source="userId" reference="users"><SelectInput optionText="name" /></ReferenceInput> */}
            {/* <TextInput source="id" /> */}
            <TextInput source="title" />
            <TextInput multiline source="content" />
        </SimpleForm>
    </Edit>
);

export default PostEdit;