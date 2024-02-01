import React, { useEffect, useState } from "react";
import UserProfile from "../../components/mypage/UserProfile";
import axios from "../../api/axios";
// import mockAxios from "../../api/mockAxios";

import RadioGroup from "../../components/common/RadioGroup";
import Radio from "../../components/common/Radio";
import MyWagle from "../../components/mypage/MyWagle";
import Usergoal from "../../components/mypage/Usergoal";

function MyPage() {
  const [user, setUser] = useState({
    userId: "",
    nickname: "",
    profile: "",
    mainBadge: "0",
    goal: 0,
    accurate: 0.0,
    totalBet: 0,
    winBet: 0,
    badge: {
      team1: false,
      team2: false,
      team3: false,
      team4: false,
      team5: false,
      team6: false,
      team7: false,
      team8: false,
      team9: false,
      team10: false,
      team11: false,
      team12: false,
    },
  });

  /* 유저 정보 가져오기 */
  const getUserInfo = () => {
    axios
      .get("/user/users/mypage")
      .then(({ data }) => {
        setUser(data);
      })
      .catch(() => {});
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const [page, setPage] = useState(1);
  const [category, setCategory] = useState();
  const [myWagle, setMyWagle] = useState([]);
  /* 카테고리 변경 시 호출될 훅 */
  const getMyWagle = () => {
    const url = `/wagles?user_id=${user.userId}&category=${category}&pageno=${page}`;
    axios
      .get(url)
      .then(({ data }) => {
        setMyWagle(data);
      })
      .catch(() => {});
  };

  useEffect(() => {
    getMyWagle();
  }, [category]);

  return (
    <div>
      <UserProfile user={user} />
      <Usergoal user={user} />
      <div>
        <RadioGroup>
          <Radio
            name="contact"
            value="1"
            defaultChecked
            setCategory={setCategory}
          >
            와글
          </Radio>
          <Radio name="contact" value="2" setCategory={setCategory}>
            직관 메이트
          </Radio>
          <Radio name="contact" value="3" setCategory={setCategory}>
            중고
          </Radio>
        </RadioGroup>
      </div>
      <div>
        <MyWagle wagles={myWagle} />
      </div>
    </div>
  );
}

export default MyPage;