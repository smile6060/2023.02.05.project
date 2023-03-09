package com.koreait.restaurant.web.api;

import com.koreait.restaurant.aop.annotation.ValidAspect;
import com.koreait.restaurant.entity.DinningMst;
import com.koreait.restaurant.service.ReserveService;
import com.koreait.restaurant.service.SearchService;
import com.koreait.restaurant.web.dto.CMRespDto;
import com.koreait.restaurant.web.dto.SearchReserveReqDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/reserve")
public class ReserveApi {

    @Autowired
    private ReserveService reserveService;

    @PostMapping("/page/{reserveId}")
    public ResponseEntity<?> getCheckPage(@RequestBody SearchReserveReqDto searchReserveReqDto) {

        return ResponseEntity
                .ok()
                .body(new CMRespDto<>(HttpStatus.OK.value(), "Successfully", reserveService.userSearchReserve(searchReserveReqDto)));
    }

}