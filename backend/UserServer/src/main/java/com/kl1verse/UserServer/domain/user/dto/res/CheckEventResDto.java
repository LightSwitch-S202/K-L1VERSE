package com.kl1verse.UserServer.domain.user.dto.res;

import java.time.LocalDate;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class CheckEventResDto {
    String name;
    String description;
    LocalDate start_date;
    LocalDate end_date;
}