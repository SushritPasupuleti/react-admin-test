import * as React from "react";
import { Create, SimpleForm, ReferenceInput, TextInput, SelectInput, ArrayInput, SimpleFormIterator, NumberInput } from 'react-admin';

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            {/* <TextInput source="id" /> */}
            <TextInput source="title" />
            <TextInput source="content" />
            {/* <TextInput source="slug" /> */}
            <ArrayInput source="instructions">
                <SimpleFormIterator>
                    <NumberInput source="step" />
                    <TextInput multiline source="instruction" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
);

export default PostCreate;