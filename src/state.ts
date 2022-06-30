import {createGlobalState} from "react-hooks-global-state";
import {State} from "./types"

// Изменил тип на корректный, без any

const {useGlobalState} = createGlobalState<State>({
    news: [],
    localNews: [],
    profile: {},
    newsTitle: '',
    newsBody: '',
});

export {useGlobalState};