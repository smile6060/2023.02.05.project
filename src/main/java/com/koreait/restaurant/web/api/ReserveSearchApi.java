package com.koreait.restaurant.web.api;

import com.koreait.restaurant.service.ReserveSearchService;
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
public class ReserveSearchApi {

    @Autowired
    private ReserveSearchService reserveService;

    @PostMapping("/search/{reserveId}")
    public ResponseEntity<?> getCheckPage(@RequestBody SearchReserveReqDto searchReserveReqDto) {

        return ResponseEntity
                .ok()
                .body(new CMRespDto<>(HttpStatus.OK.value(), "Successfully", reserveService.userSearchReserve(searchReserveReqDto)));
    }

}