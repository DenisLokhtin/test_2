import * as React from 'react';
import {Button, FormControl, TextField} from "@mui/material";
import {useGlobalState} from "../state";
import {nanoid} from 'nanoid';

const CreateNewsForm: () => JSX.Element = () => {
    const [newsTitle, setNewsTitle] = [...useGlobalState('newsTitle')];
    const [newsBody, setNewsBody] = [...useGlobalState('newsBody')];
    const [localNews, setLocalNews] = [...useGlobalState('localNews')];

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();

        setLocalNews([...localNews, {title: newsTitle, body: newsBody, id: nanoid()}]);
        setNewsTitle('');
        setNewsBody('');
    }

    return (
        <FormControl className='form'>
            <TextField sx={{marginBottom: '20px'}} value={newsTitle} onChange={(e) => setNewsTitle(e.target.value)}
                       id="outlined-basic" label="Title" variant="outlined"/>
            <TextField sx={{marginBottom: '20px'}} value={newsBody} onChange={(e) => setNewsBody(e.target.value)}
                       id="outlined-basic" label="Body" variant="outlined"/>
            <Button disabled={!(newsTitle.length && newsBody.length)} type='submit'
                    variant="contained" onClick={(e) => submitForm(e)}>Send</Button>
        </FormControl>
    );
};

export default CreateNewsForm;
