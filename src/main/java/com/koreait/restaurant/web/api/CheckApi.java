package com.koreait.restaurant.web.api;

import com.koreait.restaurant.entity.DinningMst;
import com.koreait.restaurant.service.CheckService;
import com.koreait.restaurant.web.dto.CMRespDto;
import com.koreait.restaurant.web.dto.CheckReqDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api")
public class CheckApi {

    @Autowired
    private CheckService searchService;

    @GetMapping("/check")
    public ResponseEntity<CMRespDto<List<DinningMst>>> searchReserveIdAndNumber(CheckReqDto searchReqDto) {
        return ResponseEntity
                .ok()
                .body(new CMRespDto<>(HttpStatus.OK.value(), "Successfully", searchService.searchReserveIdAndNumber(searchReqDto)));

    }

    @DeleteMapping("/check/{reserveId}")
    public ResponseEntity<CMRespDto<?>> removeReserve(@PathVariable int reserveId) {
        searchService.removeReserve(reserveId);
        return ResponseEntity
                .ok()
                .body(new CMRespDto<>(HttpStatus.OK.value(), "Successfully", true));
    }



}
