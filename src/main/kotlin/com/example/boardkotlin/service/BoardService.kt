package com.example.boardkotlin.service

import com.example.boardkotlin.dao.BoardDao
import com.example.boardkotlin.domain.BoardData
import com.google.gson.Gson
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

@Service
class BoardService {

    var logger = LoggerFactory.getLogger(BoardService::class.java)
    var gson = Gson()

    @Autowired
    lateinit var boardDao: BoardDao


    fun saveBoard(body : BoardData):Boolean {

        var cnt : Int = boardDao.selectCntBoard()
        logger.info("cnt:{}",cnt)

        val id = body.writer + body.password

        cnt += 1
        body.postId = id+"$cnt"
        body.dtm = getTime()

        logger.info("body:{}",body)

        return boardDao.insertBoard(body)
    }

    fun getBoardList():List<BoardData>{

        return boardDao.selectBoardList()

    }

    fun getBoardDetail(id:String):List<BoardData>{

        return boardDao.selectBoardDetail(id)

    }

    fun modifyBoard(boardData:BoardData,postId:String): Boolean {

        boardData.dtm = getTime()
        return boardDao.modifyBoard(boardData, postId)

    }

    fun deleteBoard(postId:String): Boolean {

        return boardDao.deleteBoard(postId)

    }

    fun getTime(): String {

        val date = LocalDateTime.now()


        return date.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"))
    }
}

