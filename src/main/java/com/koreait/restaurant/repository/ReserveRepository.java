package com.koreait.restaurant.repository;

import com.koreait.restaurant.entity.DinningMst;
import com.koreait.restaurant.web.dto.SearchReserveReqDto;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ReserveRepository {

    public int findUserByReserveCheck(SearchReserveReqDto searchReserveReqDto);

}


