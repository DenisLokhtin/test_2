export type AllNews = { id: string; title: string; body: string };
export type State = { news: [], localNews: AllNews[], profile: {}, newsTitle: string, newsBody: string };
export type NewsCardsProps = { title: string; body: string };
export type UserListProps = { arr: {} };