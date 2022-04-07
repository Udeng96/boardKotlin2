package com.example.boardkotlin

import org.slf4j.LoggerFactory
import org.springframework.boot.Banner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.builder.SpringApplicationBuilder
import org.springframework.boot.context.properties.ConfigurationPropertiesScan
import org.springframework.boot.runApplication
import javax.annotation.PostConstruct

@SpringBootApplication
@ConfigurationPropertiesScan
class BoardKotlinApplication{
    var logger = LoggerFactory.getLogger(BoardKotlinApplication::class.java)

    @PostConstruct
    fun initialize(){
        logger.info("============================================")
        logger.info(" ---- System initialize Process Start")
        logger.info(" ---- System initialize Procsee End")
        logger.info("============================================")
    }
}

fun main(args: Array<String>) {
    val homePath = System.getenv("APP_HOME")
    var confFilePath = "spring.config.location=file:$homePath/application.yml"

    SpringApplicationBuilder(BoardKotlinApplication::class.java)
        .bannerMode(Banner.Mode.CONSOLE)
        .headless(false)
        .properties(
            confFilePath
        )
        .application().run(*args)
}
