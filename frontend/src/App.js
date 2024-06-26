import {BrowserRouter, Route, Routes} from "react-router-dom";

import React from "react";

import StartPage from "./pages/SurveyPage/StartPage";
import QuestionPage from "./pages/SurveyPage/QuestionPage";
import ResultPage from "./pages/SurveyPage/ResultPage";
import KakaoPage from "./pages/SurveyPage/KakaoPage";

import KaKaoRedirection from "./pages/login_page/KaKaoRedirection";
import NaverRedirection from "./pages/login_page/NaverRedirection";
import GoogleRedirection from "./pages/login_page/GoogleRedirection";

import MainPage from "./pages/main_page/MainPage";
import LoginPage from "./pages/login_page/LoginPage";
import MyPage from "./pages/my_page/MyPage";
import Badge from "./pages/my_page/Badge";
import Navbar from "./pages/nav/Navbar";
import SocketProvider from "./global/SocketProvider";
import LogoutPage from "./pages/logout_page/LogoutPage";
import NotificationPage from "./pages/notification_page/NotifiationPage";

import WaggleListPage from "./pages/board_page/waggle_page/WaggleListPage";
import WaggleDetailPage from "./pages/board_page/waggle_page/WaggleDetailPage";
import WaggleRegistPage from "./pages/board_page/waggle_page/WaggleRegistPage";

import MateListPage from "./pages/board_page/mate_page/MateListPage";
import MateDetailPage from "./pages/board_page/mate_page/MateDetailPage";
import MateRegistPage from "./pages/board_page/mate_page/MateRegistPage";

import ProductListPage from "./pages/board_page/product_page/ProductListPage";
import ProductDetailPage from "./pages/board_page/product_page/ProductDetailPage";
import ProductRegistPage from "./pages/board_page/product_page/ProductRegistPage";

import MatchSchedulePage from "./pages/match_page/MatchSchedulePage";
import MatchDetailPage from "./pages/match_page/MatchDetailPage";
import MatchChattingPage from "./pages/match_page/MatchChattingPage";
import SettingPage from "./pages/my_page/SettingPage";

import TeamInfoPage from "./pages/teamPage/TeamInfoPage";

function App() {
    return (
        <div className="App">
            <SocketProvider>
                {/* <BrowserRouter> */}
                <Routes>
                    <Route path="/login" element={<LoginPage/>}/>

                    <Route path="/logout" element={<LogoutPage/>}/>

                    <Route path="/KakaoAuth" element={<KaKaoRedirection/>}/>
                    <Route path="/GoogleAuth" element={<GoogleRedirection/>}/>
                    <Route path="/NaverAuth" element={<NaverRedirection/>}/>

                    <Route path="/" element={<Navbar/>}>
                        <Route index element={<MainPage/>}/>

                        <Route path="/notification" element={<NotificationPage/>}/>

                        <Route path="/survey" element={<StartPage/>}/>
                        <Route path="/question/:questionNum" element={<QuestionPage/>}/>
                        <Route path="/result" element={<ResultPage/>}/>
                        <Route path="/kakao" element={<KakaoPage/>}/>

                        <Route path="/waggle" element={<WaggleListPage/>}/>
                        <Route path="/waggle/:boardId" element={<WaggleDetailPage/>}/>
                        <Route path="/waggleRegist" element={<WaggleRegistPage/>}/>

                        <Route path="/mate" element={<MateListPage/>}/>
                        <Route path="/mate/:boardId" element={<MateDetailPage/>}/>
                        <Route path="/mateRegist" element={<MateRegistPage/>}/>

                        <Route path="/product" element={<ProductListPage/>}/>
                        <Route path="/product/:boardId" element={<ProductDetailPage/>}/>
                        <Route path="/productRegist" element={<ProductRegistPage/>}/>

                        <Route path="/schedule" element={<MatchSchedulePage/>}/>
                        <Route path="/match/:matchId" element={<MatchDetailPage/>}/>
                        <Route path="/chat/:matchId" element={<MatchChattingPage/>}/>
                        <Route path="/team" element={<TeamInfoPage/>}/>

                        <Route path="/mypage" element={<MyPage/>}/>
                        <Route path="/badge" element={<Badge/>}/>
                        <Route path="/setting" element={<SettingPage/>}/>
                    </Route>
                </Routes>
                {/* </BrowserRouter> */}
            </SocketProvider>
        </div>
    );
}

export default App;
