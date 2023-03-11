package com.koreait.restaurant.repository;

import com.koreait.restaurant.entity.DinningMst;
import com.koreait.restaurant.web.dto.SearchReqDto;
import com.koreait.restaurant.web.dto.SearchReserveReqDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface SearchRepository {


   public List<DinningMst> searchReserveIdAndNumber(SearchReqDto searchReqDto);

   public int saveReserveCheck(SearchReqDto searchReqDto);

   public int deleteReserve(int reserveId);

}
