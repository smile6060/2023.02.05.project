package com.koreait.restaurant.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/check")
public class ReserveController {

    @GetMapping("")
    public String loadcheck() {
        return "/check";
    }
    @GetMapping("/page")
    public String loadcheckPage() {
        return "check_page";
    }
}


