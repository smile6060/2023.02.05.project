package com.koreait.restaurant.web.api;

import com.koreait.restaurant.entity.DinningMst;
import com.koreait.restaurant.service.AccountService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNullApi;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

@Slf4j
@RestController
@RequestMapping("/api/account")
public class AccountApi {
    DinningMst user = AccountService.
    @PostMapping("/login")
    public ResponseEntity<?> reserveCheck(DinningMst dinningMst) {
        return ResponseEntity.created(URI.create("/api/account/user/" + user.getReserveId()))
                .body(HttpStatus.CREATED.value(),"Create a new User", user);

    }
}
