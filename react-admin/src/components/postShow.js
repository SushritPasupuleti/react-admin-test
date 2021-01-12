
import * as React from "react";
import { SimpleShowLayout, TextField, RichTextField, Show } from 'react-admin';

export const PostShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="title" />
            <RichTextField source="content" />
            <TextField source="createdBy"></TextField>
        </SimpleShowLayout>
    </Show>
);

export default PostShow;