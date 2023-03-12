package com.koreait.restaurant.service;

import com.koreait.restaurant.entity.DinningMst;
import com.koreait.restaurant.repository.CheckRepository;
import com.koreait.restaurant.web.dto.CheckReqDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CheckService {

    @Autowired
    private CheckRepository searchRepository;


    public List<DinningMst> searchReserveIdAndNumber(CheckReqDto searchReqDto) {
        System.out.println(searchRepository.searchReserveIdAndNumber(searchReqDto));
        return searchRepository.searchReserveIdAndNumber(searchReqDto);
    }

    public void removeReserve(int reserveId) {
        searchRepository.deleteReserve(reserveId);
    }
}
