package com.koreait.restaurant.repository;

import com.koreait.restaurant.entity.DinningMst;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AccountRepository {
    public DinningMst findUserByReserveId(int reserveId);
}
