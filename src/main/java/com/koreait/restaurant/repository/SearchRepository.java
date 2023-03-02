package com.koreait.restaurant.repository;

import com.koreait.restaurant.entity.DinningMst;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SearchRepository {

    public DinningMst findUserByReserveId(int reserveId);

    public DinningMst findUserByNumber(String number);

    public DinningMst findUserByReserveName(String reserveName);
}
