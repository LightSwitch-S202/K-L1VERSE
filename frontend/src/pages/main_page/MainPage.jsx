/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { LSClient, LSUser } from "lightswitch-js-sdk";
import { UserState } from "../../global/UserState";
import Board from "../../components/main/Board";
import {
  Category,
  Title,
  AllBtn,
  NostraContent,
} from "../../styles/main-styles/MainStyle";
import TodayMatch from "../../components/main/TodayMatch";
import Notice from "../../components/main/Notice";
import Hotclip from "../../components/main/Hotclip";
import Nostradamus from "../../components/main/Nostradamus";
import Survey from "../../components/main/Survey";
import EditNicknameModal from "../../components/mypage/EditNicknameModal";
import Footer from "../../components/main/Footer";
import Banner from "../../components/main/Banner";
import authAxios from "../../api/authAxios";
import { getEventList } from "../../api/user";

function MainPage() {
  const [userState] = useRecoilState(UserState);
  const { nickname } = userState;
  const { email } = userState;
  const { userId } = userState;

  const navigate = useNavigate();

  (function () {
    var w = window;
    if (w.ChannelIO) {
      return w.console.error("ChannelIO script included twice.");
    }
    var ch = function () {
      ch.c(arguments);
    };
    ch.q = [];
    ch.c = function (args) {
      ch.q.push(args);
    };
    w.ChannelIO = ch;
    function l() {
      if (w.ChannelIOInitialized) {
        return;
      }
      w.ChannelIOInitialized = true;
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
      var x = document.getElementsByTagName("script")[0];
      if (x.parentNode) {
        x.parentNode.insertBefore(s, x);
      }
    }
    if (document.readyState === "complete") {
      l();
    } else {
      w.addEventListener("DOMContentLoaded", l);
      w.addEventListener("load", l);
    }
  })();

  ChannelIO("boot", {
    pluginKey: process.env.REACT_APP_CHANNELIO_PLUGIN_KEY,
  });

  const [flag, setFlag] = useState(true);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (!email) {
      navigate("/login");
    } else {
      ChannelIO("showChannelButton");

      let user = new LSUser("123", {
        mainBadge: userState.mainBadge === null ? "null" : "not null",
      });

      console.log(
        "mainBadge:",
        userState.mainBadge === null ? "null" : "not null",
      );

      getEventList(
        userId,
        (data) => {
          setEvents(data);
          console.log(data);
        },
        (err) => {
          console.log(err);
        },
      );

      let lightswitch = LSClient.getInstance();

      lightswitch
        .init({
          sdkKey: "bed9b6c269934b3f90633f14351be202",
          onFlagChanged: () => {},
          endpoint: "https://dear103.store/lightswitch",
        })
        .then(() => {
          console.log(
            "###########",
            lightswitch.getBooleanFlag("자바스크립트 배너 테스트", user, false),
          );

          setFlag(
            lightswitch.getBooleanFlag("자바스크립트 배너 테스트", user, false),
          );
        })
        .catch((err) => {
          console.log(err);
        });

      return () => ChannelIO("hideChannelButton");
    }
  }, []);

  useEffect(() => {
    console.log("@@@@@@@@@@@@@", flag);
  }, [flag]);

  function handleAllBtn() {
    navigate("/waggle");
  }

  const goMatchSchedule = () => {
    navigate("/schedule");
  };

  return (
    <div>
      <div>
        <Notice />
        <Banner />
        {!flag && <Survey />}
        <Category>
          <Title>💬 커뮤니티</Title>
          <AllBtn onClick={handleAllBtn}>전체보기</AllBtn>
        </Category>
        <Board />
        <Category>
          <Title>🏁 오늘의 경기</Title>
          <AllBtn onClick={goMatchSchedule}>전체보기</AllBtn>
        </Category>
        <TodayMatch />
        <Hotclip />
        <Category>
          <Title>🎯 노스트라다무스 랭킹</Title>
        </Category>
        <NostraContent>
          경기 결과 예측에 성공하여 순위에 올라보세요!
        </NostraContent>
        <Nostradamus />
        {flag && <Survey />}
        <Footer />
        {nickname === null && <EditNicknameModal type="signUp" />}
      </div>
    </div>
  );
}

export default MainPage;
