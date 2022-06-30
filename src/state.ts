import {createGlobalState} from "react-hooks-global-state";

// Изменил тип на корректный, без any

const {useGlobalState} = createGlobalState<{ news: [], localNews: {title: string, body: string, id: string}[], profile: {}, newsTitle: string, newsBody: string }>({
    news: [],
    localNews: [],
    profile: {},
    newsTitle: '',
    newsBody: '',
});

export {useGlobalState};