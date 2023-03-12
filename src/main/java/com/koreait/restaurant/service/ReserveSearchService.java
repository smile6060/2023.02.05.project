package com.koreait.restaurant.service;

import com.koreait.restaurant.repository.ReserveRepository;
import com.koreait.restaurant.web.dto.SearchReserveReqDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReserveSearchService {

    @Autowired
    private ReserveRepository reserveRepository;

    public int userSearchReserve(SearchReserveReqDto searchReserveReqDto) {
        return reserveRepository.findUserByReserveCheck(searchReserveReqDto);

    }

}

