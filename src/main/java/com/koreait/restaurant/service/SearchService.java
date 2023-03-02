package com.koreait.restaurant.service;

import com.koreait.restaurant.entity.DinningMst;
import com.koreait.restaurant.exception.CustomValidationException;
import com.koreait.restaurant.repository.SearchRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class SearchService {

    @Autowired
    private SearchRepository searchRepository;

    public void duplicateReserveId(int reserveId) {
        DinningMst user = searchRepository.findUserByReserveId(reserveId);

        if (user != null) {
            Map<String, String> errorMap = new HashMap<>();
            errorMap.put("reserveId", "예약번호를 다시 확인 해주세요.");

            throw new CustomValidationException(errorMap);
        }

    }

    public void duplicateReserveNumber(String number) {
        DinningMst user = searchRepository.findUserByNumber(number);

        if (user != null) {
            Map<String, String> errorMap = new HashMap<>();
            errorMap.put("number", "전화번호를 다시 확인 해주세요.");

            throw new CustomValidationException(errorMap);
        }
    }

    public void duplicateReserveName(String reserveName) {
        DinningMst user = searchRepository.findUserByReserveName(reserveName);

        if (user != null) {
            Map<String, String> errorMap = new HashMap<>();
            errorMap.put("reserveName", "이름을 다시 확인 해주세요.");

            throw new CustomValidationException(errorMap);
        }
    }
}
