package com.kl1verse.UserServer.domain.user.service;

import com.kl1verse.UserServer.domain.auth.JwtUtil;
import com.kl1verse.UserServer.domain.user.dto.res.CheckEventResDto;
import com.kl1verse.UserServer.domain.user.dto.res.CheckGoalResDto;
import com.kl1verse.UserServer.domain.user.exception.UserException;
import com.kl1verse.UserServer.domain.user.repository.UserRepository;
import com.kl1verse.UserServer.domain.user.repository.entity.User;
import com.kl1verse.UserServer.global.ResponseCode;
import com.lightswitch.domain.LSUser;
import com.lightswitch.impl.LightSwitch;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;
    private static LightSwitch lightSwitch = LightSwitch.getInstance();


    static {
        lightSwitch.init("0ca69b1cfd754a1fb78191c941c5c76e", "https://lightswitch.kr");
    }



    @Transactional
    public void addTenGoal(Integer userId) {

        Optional<User> userOptional = userRepository.findById(userId);
        if(userOptional.isEmpty()) {
            throw new UserException(ResponseCode.INVALID_USER_INFO);
        }

        User user = userOptional.get();
        user.setGoal(user.getGoal() + 10);
        userRepository.save(user);
    }

    public boolean checkGoal(CheckGoalResDto checkGoalResDto) {
        Optional<User> userOptional = userRepository.findById(checkGoalResDto.getUserId());
        if(userOptional.isEmpty()) {
            throw new UserException(ResponseCode.INVALID_USER_INFO);
        }

        User user = userOptional.get();
        return user.getGoal() >= checkGoalResDto.getCompareGoal();
    }

    public List<CheckEventResDto> checkEvent(String userId) {
        List<CheckEventResDto> eventResDtos = new ArrayList<>();

        LSUser lsUser = new LSUser.Builder(userId)
            .build();

        if (lightSwitch.getBooleanFlag("UserEvent", lsUser, false)) {
            CheckEventResDto checkEventResDto = CheckEventResDto.builder()
                .name("하나은행 K리그 2024 특별 이벤트")
                .description("25개 구단 입장권 할인 및 2024 시즌 축덕카드 할인 이벤트")
                .start_date("2024-01-01")
                .end_date("2024-12-31")
                .build();
            CheckEventResDto checkEventResDto2 = CheckEventResDto.builder()
                .name("GET THE BALL, OWN THE MOMENT")
                .description("지금 k리그 경기 득점 공인구와 환희의 순간을 함께 소장하세요!")
                .start_date("2024-01-01")
                .end_date("2024-12-31")
                .build();
            CheckEventResDto checkEventResDto3 = CheckEventResDto.builder()
                .name("2024 K 리그 판타지 오픈")
                .description("점수 시스템 개편, 누적 랭킹과 보상 확대")
                .start_date("2024-01-01")
                .end_date("2024-12-31")
                .build();
            eventResDtos.add(checkEventResDto);
            eventResDtos.add(checkEventResDto2);
            eventResDtos.add(checkEventResDto3);
        }

        return eventResDtos;
    }
}
