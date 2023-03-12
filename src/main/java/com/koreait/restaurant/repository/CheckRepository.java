package com.koreait.restaurant.repository;

import com.koreait.restaurant.entity.DinningMst;
import com.koreait.restaurant.web.dto.CheckReqDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CheckRepository {


   public List<DinningMst> searchReserveIdAndNumber(CheckReqDto searchReqDto);

   public int saveReserveCheck(CheckReqDto searchReqDto);

   public int deleteReserve(int reserveId);

}
