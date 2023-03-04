package com.koreait.restaurant.repository;

import com.koreait.restaurant.entity.DinningMst;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ReserveRepository {
    public int saveReserveCheck(DinningMst dinningMst);

    public int findUserByReserveId(DinningMst dinningMst);

}


