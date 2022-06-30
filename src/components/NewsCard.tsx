import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {NewsCardsProps} from "../types";

const NewsCard: (props: NewsCardsProps) => JSX.Element = (props: NewsCardsProps) => {
    return (
        <Card sx={{ minWidth: 275 }} className='NewsCard'>
            <CardContent>
                <Typography variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2">
                    {props.body}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default NewsCard;
