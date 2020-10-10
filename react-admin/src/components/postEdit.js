import * as React from "react";
import { Edit, SimpleForm, ReferenceInput, TextInput, SelectInput } from 'react-admin';

export const PostEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users"><SelectInput optionText="name" /></ReferenceInput>
            <TextInput source="id" />
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);

export default PostEdit;