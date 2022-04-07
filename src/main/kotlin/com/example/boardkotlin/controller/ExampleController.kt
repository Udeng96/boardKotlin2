package com.example.boardkotlin.controller

import org.slf4j.LoggerFactory
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.time.LocalDate

@RestController
@RequestMapping("/api",produces = ["application/json; charset=utf8"])
class ExampleController {

    var logger = LoggerFactory.getLogger(ExampleController::class.java);
    val date: LocalDate = LocalDate.now();

    @GetMapping("/hello")
    fun getHello(): String {
        logger.info("say hello");
        return "Hi Today is $date";
    }

}