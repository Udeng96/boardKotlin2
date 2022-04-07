package com.example.boardkotlin.controller

import com.example.boardkotlin.domain.BoardData
import com.example.boardkotlin.service.BoardService
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/board", produces = ["application/json; charset=utf8"])
class BoardController {

    @Autowired
    lateinit var boardService: BoardService

    var _logger = LoggerFactory.getLogger(BoardController::class.java)

    @CrossOrigin
    @PostMapping("/write")
    fun saveBoard(
        @RequestBody param: BoardData
    ): Boolean {

        _logger.info("body:{}",param)
        var result = boardService.saveBoard(param)

        return result
    }

    @CrossOrigin
    @GetMapping("/read/list")
    fun getBoardList(): ResponseEntity<List<BoardData>> {



        val result :List<BoardData> = boardService.getBoardList()

        return ResponseEntity.ok(result)
    }

    @CrossOrigin
    @GetMapping("/read/detail")
    fun getBoardDetail(
        @RequestParam(value = "postId",required = true, defaultValue="") postId:String
    ): ResponseEntity<List<BoardData>> {
        var result : List<BoardData> = boardService.getBoardDetail(postId)
        return ResponseEntity.ok(result)
    }

    @CrossOrigin
    @PostMapping("/modify")
    fun updateBoard(
        @RequestParam(value="postId",required =true, defaultValue="") postId:String,
        @RequestBody param:BoardData
    ):Boolean{
        return boardService.modifyBoard(param, postId)
    }

    @CrossOrigin
    @PostMapping("/delete")
    fun deleteBoard(
        @RequestParam(value="postId",required=true,defaultValue = "")postId: String
    ):Boolean{
        return boardService.deleteBoard(postId)
    }

}