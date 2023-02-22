package com.koreait.restaurant.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class DinningMst {

    private int reserveId;
    private String reserveName;

    private Timestamp reserveDate;

    private String reserveTime;

    private String number;

    private String email;

    private int adult;

    private int child;

    private String guest;

    private String request;

}
