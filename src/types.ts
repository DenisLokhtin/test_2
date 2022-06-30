export type AllNews = { id: string; title: string; body: string };
export type State = { news: [], localNews: {title: string, body: string, id: string}[], profile: {}, newsTitle: string, newsBody: string };
export type NewsCardsProps = { title: string; body: string };