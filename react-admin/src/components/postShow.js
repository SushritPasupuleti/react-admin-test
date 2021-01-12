
import * as React from "react";
import { SimpleShowLayout, TextField, RichTextField, Show } from 'react-admin';
import { Typography } from '@material-ui/core'

export const PostShow = (props) => (
    <Show aside={<PostAside></PostAside>} {...props}>
        <SimpleShowLayout>
            <TextField source="title" />
            <RichTextField source="content" />
            <TextField source="createdBy"></TextField>
        </SimpleShowLayout>
    </Show>
);

const PostAside = (props) => {
    console.log({props})
    return (
        <div style={{ width: 200, margin: '1em' }}>
            <Typography variant="h6">Post details</Typography>
            <Typography variant="body2" gutterBottom>
                Posts will only be published once an editor approves them
        </Typography>
            <Typography>"{props.record.content}" will be reviewed soon</Typography>
        </div>
    )
}
export default PostShow;