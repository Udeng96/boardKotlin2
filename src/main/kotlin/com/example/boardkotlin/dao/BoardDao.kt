package com.example.boardkotlin.dao

import com.example.boardkotlin.domain.BoardData
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.stereotype.Repository
import javax.persistence.EntityManager
import javax.persistence.EntityTransaction
import javax.persistence.PersistenceContext
import javax.persistence.PersistenceContextType
import javax.transaction.Transactional

@Repository("boardDao")
@Transactional
class BoardDao {

    var logger: Logger = LoggerFactory.getLogger(BoardDao::class.java)


//    @PersistenceContext(unitName = "EntityManager")
    @PersistenceContext(type = PersistenceContextType.EXTENDED)
    lateinit var em: EntityManager



    fun insertBoard(boardData: BoardData): Boolean {
        var result: Boolean = false

        try {
            em.clear()
            em.persist(boardData)
            result = true

        } catch (e: Exception) {
            logger.error(e.message, e)
        }

        logger.info("result:{}", result)
        return result
    }

    fun selectBoardList(): List<BoardData> {
        var list = mutableListOf<BoardData>()
        try {
            val queryStr = "SELECT e FROM BoardData e"
            val query = em.createQuery(queryStr)
            list = query.resultList as MutableList<BoardData>

        } catch (e: Exception) {
            logger.error(e.message, e)
        }

        return list
    }

    fun selectBoardDetail(id: String): List<BoardData> {
        var list = mutableListOf<BoardData>()
        try {
            val queryStr = "SELECT e FROM BoardData e WHERE e.postId = $id"
            val query = em.createQuery(queryStr)
            list = query.resultList as MutableList<BoardData>
        } catch (e: Exception) {
            logger.error(e.message, e)
        }
        logger.info("list:{}", list)

        return list
    }

    fun modifyBoard(boardData: BoardData, postId:String) : Boolean {

        var result = false
        try{
            val found : BoardData = em.find(BoardData::class.java,postId)
            found.compareAndChangeData(boardData)
            em.merge(found)
            result = true
        }catch(e:Exception){
            logger.error(e.message,e)
        }

        return result

    }

    fun deleteBoard(postId:String) : Boolean{

        var result = false
        logger.info("postId:{}",postId)
        try{
            val found : BoardData = em.find(BoardData::class.java,postId)
            logger.info("found:{}",found)
            em.remove(found)
            result = true
        }catch(e:Exception){
            logger.error(e.message,e)
        }
        return result
    }



    fun selectCntBoard(): Int {


        val queryStr = "SELECT COUNT(e) FROM BoardData e"
        val query = em.createQuery(queryStr)
        var count = Integer.parseInt(query.singleResult.toString())
        logger.info("query cnt:{}", count)

        logger.info("dao cnt:{}", count)
        return count
    }


}

