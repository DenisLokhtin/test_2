import {Container, Typography} from "@mui/material";
import CreateNewsForm from "../components/CreateNewsForm";
import React from "react";

const CreateNews: React.FC = () => {
    return (
        <Container sx={{textAlign: 'center'}}>
            <Typography variant="h4" sx={{margin: '35px 0'}}>
                CREATE NEWS
            </Typography>
            <CreateNewsForm/>
        </Container>
    )
};

export default CreateNews;