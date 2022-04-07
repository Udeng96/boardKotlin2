package com.example.boardkotlin.domain

import com.example.boardkotlin.dao.BoardDao
import javax.persistence.*

@Entity
@Table(name="POST", schema = "BOARD")
class BoardData {

    @Id
    @Column(name="post_id")
    var postId = ""

    @Column(name="title")
    var title = ""

    @Column(name="password")
    var password = ""

    @Column(name="writer")
    var writer = ""

    @Column(name="contents")
    var contents= ""

    @Column(name="dtm")
    var dtm = ""


    fun compareAndChangeData( board : BoardData ) {
        if(this.title != board.title){
            this.title = board.title
        }
        if(this.writer != board.writer){
            this.writer = board.writer
        }
        if(this.contents != board.contents){
            this.contents = board.contents
        }
        if(this.dtm != board.dtm){
            this.dtm = board.dtm
        }
    }

    override fun toString(): String {
        return "BoardData(postId='$postId', title='$title', password='$password', writer='$writer', contents='$contents', dtm='$dtm')"
    }


}