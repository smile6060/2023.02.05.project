package com.koreait.restaurant.service;

import com.koreait.restaurant.entity.DinningMst;
import com.koreait.restaurant.repository.SearchRepository;
import com.koreait.restaurant.web.dto.SearchReqDto;
import com.koreait.restaurant.web.dto.SearchReserveReqDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SearchService {

    @Autowired
    private SearchRepository searchRepository;


    public List<DinningMst> searchReserve(SearchReqDto searchReqDto) {
        System.out.println(searchReqDto);
        return searchRepository.searchReserve(searchReqDto);
    }

}
