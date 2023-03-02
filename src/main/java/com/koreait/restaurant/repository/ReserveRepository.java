package com.koreait.restaurant.repository;

import com.koreait.restaurant.entity.DinningMst;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ReserveRepository {
    public int getUserSearchReserveCheck(DinningMst dinningMst);

    public int userSearchReserve(DinningMst dinningMst);

    public int saveReserve(DinningMst reserve);
}


