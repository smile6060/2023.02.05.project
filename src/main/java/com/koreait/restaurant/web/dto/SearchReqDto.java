package com.koreait.restaurant.web.dto;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class SearchReqDto {

    private int reserveId;

    private String reserveName;

    private String reserveDate;

    private String reserveTime;

    private String number;

    private String email;

    private int adult;

    private int child;

}
