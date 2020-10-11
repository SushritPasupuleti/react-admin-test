import * as React from "react";
import { Edit, SimpleForm, ReferenceInput, TextInput, SelectInput, ArrayInput, SimpleFormIterator, NumberInput } from 'react-admin';

export const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="title" />
            <TextInput source="content" />
            {/* <TextInput source="slug" /> */}
            <ArrayInput source="instructions"><SimpleFormIterator><NumberInput source="step" />
                <TextInput multiline source="instruction" /></SimpleFormIterator></ArrayInput>
        </SimpleForm>
    </Edit>
);

export default PostEdit;