import NewsCard from "../components/NewsCard";
import {Container, Typography} from "@mui/material";
import axiosApi from "../axiosApi";
import React, {useEffect} from "react";
import {useGlobalState} from "../state";

const Main: React.FC = () => {
    const [news, setNews] = [...useGlobalState('news')];
    const [localNews] = [...useGlobalState('localNews')];

    useEffect(() => {
        const getPosts = async () => {
            const response = await axiosApi.get('/posts');
            setNews(response.data);
        };

        getPosts();
    }, [news.length])

    const allNews = [...news, ...localNews];

    const printNews = () => {
        if (allNews.length !== 0) {
            return allNews.map((value: { id: string; title: string; body: string }) => {
                return (
                    <NewsCard
                        key={value.id}
                        title={value.title}
                        body={value.body}
                    />
                )
            })
        }
    };

    return (
        <Container>
            <Typography variant="h4" sx={{marginTop: '35px', textAlign: 'center'}}>
                MAIN PAGE
            </Typography>
            <div className='list'>
                {printNews()}
            </div>
        </Container>
    );
};

export default Main;