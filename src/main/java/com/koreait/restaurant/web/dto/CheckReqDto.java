package com.koreait.restaurant.web.dto;

import lombok.Data;

@Data
public class CheckReqDto {

    private int reserveId;

    private String reserveName;

    private String reserveDate;

    private String reserveTime;

    private String number;

    private String email;

    private int adult;

    private int child;

    private String request;

}
