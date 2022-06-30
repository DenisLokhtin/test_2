import Profile from "./Profile";
import Main from "./Main";
import {Route, Routes,} from "react-router-dom";
import CreateNews from "./CreateNews";
import React from "react";

//список правок:
//1) Сменил типы () => JSX.Element на React.FC
//2) убрал типы any, подкорретировал типы, создал файл для кастомных типов
//3) Названия файлов в едином стиле
//4) файлы tsx, без JSX, переименовал в ts
//5) изменил стили, расположение файлов scss

//комментарий:
// инлайн стили типа sx, это в основном стили MUI, их я трогать не стал


const App: React.FC = () => {
    return (
        <Routes>
            <Route element={<Main/>} path="/"/>
            <Route element={<Profile/>} path="/profile"/>
            <Route element={<CreateNews/>} path="/createNews"/>
        </Routes>
    )
};

export default App;