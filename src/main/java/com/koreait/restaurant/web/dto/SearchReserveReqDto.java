package com.koreait.restaurant.web.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class SearchReserveReqDto {

    private int reserveId;

    private String reserveName;

    private String number;


}
