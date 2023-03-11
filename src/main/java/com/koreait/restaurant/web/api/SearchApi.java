package com.koreait.restaurant.web.api;

import com.koreait.restaurant.aop.annotation.ParamsAspect;
import com.koreait.restaurant.entity.DinningMst;
import com.koreait.restaurant.service.SearchService;
import com.koreait.restaurant.web.dto.CMRespDto;
import com.koreait.restaurant.web.dto.SearchReqDto;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.annotations.Delete;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api")
public class SearchApi {

    @Autowired
    private SearchService searchService;

    @GetMapping("/contents1")
    public ResponseEntity<CMRespDto<List<DinningMst>>> searchReserveIdAndNumber(SearchReqDto searchReqDto) {
        return ResponseEntity
                .ok()
                .body(new CMRespDto<>(HttpStatus.OK.value(), "Successfully", searchService.searchReserveIdAndNumber(searchReqDto)));

    }

    @DeleteMapping("/reserve/{reserveId}")
    public ResponseEntity<CMRespDto<?>> removeReserve(int reserveId) {
        searchService.removeReserve(reserveId);
        return ResponseEntity
                .ok()
                .body(new CMRespDto<>(HttpStatus.OK.value(), "Successfully", true));
    }



}
