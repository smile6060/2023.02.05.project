package com.koreait.restaurant.web.api;

import com.koreait.restaurant.aop.annotation.ParamsAspect;
import com.koreait.restaurant.aop.annotation.ValidAspect;
import com.koreait.restaurant.entity.DinningMst;
import com.koreait.restaurant.service.SearchService;
import com.koreait.restaurant.web.dto.CMRespDto;
import com.koreait.restaurant.web.dto.SearchReserveReqDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/search")
public class SearchApi {

    @Autowired
    private SearchService searchService;

    @ParamsAspect
    @ValidAspect
    @GetMapping("/contents")
    public ResponseEntity<CMRespDto<List<DinningMst>>> searchReserve(@Valid DinningMst dinningMst) {
        return ResponseEntity
                .ok()
                .body(new CMRespDto<>(HttpStatus.OK.value(), "Successfully", searchService.searchReserve(dinningMst)));

    }
}
