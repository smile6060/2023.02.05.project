package com.koreait.restaurant.service;

import com.koreait.restaurant.entity.DinningMst;
import com.koreait.restaurant.repository.AccountRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class AccountService {

    @Autowired
    private AccountRepository accountRepository;

    public DinningMst getUser(int reserveId) {
        return accountRepository.findUserByReserveId(reserveId);
    }
}
