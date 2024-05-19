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
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
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

        CheckEventResDto checkEventResDto = CheckEventResDto.builder()
            .name("1")
            .description("SSAFY 12기 모집")
            .start_date(LocalDate.parse("2024-04-22"))
            .end_date(LocalDate.parse("2024-05-07"))
            .build();
        CheckEventResDto checkEventResDto2 = CheckEventResDto.builder()
            .name("2")
            .description("LIGHT SWITCH 체험단")
            .start_date(LocalDate.parse("2024-03-17"))
            .end_date(LocalDate.parse("2024-06-30"))
            .build();
        CheckEventResDto checkEventResDto3 = CheckEventResDto.builder()
            .name("3")
            .description("맨스티어 티셔츠")
            .start_date(LocalDate.parse("2024-02-28"))
            .end_date(LocalDate.parse("2024-05-20"))
            .build();
        eventResDtos.add(checkEventResDto);
        eventResDtos.add(checkEventResDto2);
        eventResDtos.add(checkEventResDto3);

        eventResDtos.sort(Comparator.comparing(CheckEventResDto::getStart_date));

        LSUser lsUser = new LSUser.Builder(userId)
            .build();

        if (lightSwitch.getBooleanFlag("Event 광고 플래그", lsUser, false)) {
            log.info(" 해당 유저는 TRUE " + userId);
            eventResDtos.sort(Comparator.comparing(CheckEventResDto::getEnd_date));
        }

        return eventResDtos;
    }
}
