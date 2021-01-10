import * as React from "react";
import { Create, SimpleForm, ReferenceInput, TextInput, SelectInput, ArrayInput, SimpleFormIterator, NumberInput, BooleanInput } from 'react-admin';

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            {/* <TextInput source="id" /> */}
            <TextInput source="name" />
            <TextInput source="password" />
            <BooleanInput source="admin" />
        </SimpleForm>
    </Create>
);

export default UserCreate;