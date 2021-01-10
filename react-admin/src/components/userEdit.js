import * as React from "react";
import { Edit, SimpleForm, ReferenceInput, TextInput, SelectInput, ArrayInput, SimpleFormIterator, NumberInput, BooleanInput } from 'react-admin';

export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <BooleanInput source="admin" />
        </SimpleForm>
    </Edit>
);

export default UserEdit;