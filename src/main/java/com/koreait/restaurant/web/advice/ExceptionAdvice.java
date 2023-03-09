package com.koreait.restaurant.web.advice;

import com.koreait.restaurant.exception.CustomValidationException;
import com.koreait.restaurant.web.dto.CMRespDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;

public class ExceptionAdvice {
    @ExceptionHandler(CustomValidationException.class)
    public ResponseEntity<?> validationError(CustomValidationException e) {
        return ResponseEntity
                .badRequest()
                .body(new CMRespDto<>(HttpStatus.BAD_REQUEST.value(),
                        "Validation Error",
                        e.getErrorMap()));
    }

}
