import "../../../css/boardList.css"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import type {RootState} from "../../../reducer/rootReducer";
import {getBoardList, successBoardList} from "../../../action/boardAction";
import $ from 'jquery'
import axios from "axios";
import {put} from "@redux-saga/core/effects";
import BoardPagination from "./boardPagination";


const BoardList = () => {

    let date = new Date();
    let lastUpdateTime = date.toTimeString().split(" ")[0];
    let lastUpdateDate = date.toLocaleDateString();
    lastUpdateDate = lastUpdateDate.replaceAll(".", "-");

    let [updateDate, setUpdateDate] = useState(lastUpdateDate + ' ' + lastUpdateTime)

    const toReload = () => {
        let now = new Date();
        let newUpdateTime = now.toTimeString().split(" ")[0];
        let newUpdateDate = now.toLocaleDateString();
        newUpdateDate = newUpdateDate.replaceAll(".", "-");

        setUpdateDate(newUpdateDate + ' ' + newUpdateTime);
    }

    const dispatch = useDispatch();
    let [cnt, setCnt] = useState(0);
    let storeBoardList = useSelector((state => state.board.list));
    let [storeLength, setStoreLength] = useState(0);

    // pagination
    //limit = 한 페이지당 게시물 수 , page = 현재 페이지 , offset = 페이지 시작 index
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;


    useEffect(() => {
        dispatch(getBoardList());

        console.log("storeBoardList", storeBoardList)
        if (storeBoardList === null) {
            if (cnt > 10) {
                alert("업데이트 버튼을 눌러주세요");
                return;
            }
            setTimeout(() => {
                setCnt(cnt + 1);
                console.log("cnt", cnt)

            }, 10);

        } else {
            setStoreLength = storeBoardList.length;
            let indexBoard = 0;
            let writer = "";
            let title = "";
            let dtm = "";
            let id = "";

            const table = $(".board_list_table")

            const th = `<tr className="board_list_th">
                    <th className="list_index">글번호</th>
                    <th className="list_writer">글쓴이</th>
                    <th className="list_title">제목</th>
                    <th className="list_date">날짜</th>
                </tr>`

            table.empty();
            table.append(th)

            storeBoardList.slice(offset, offset + limit).forEach(
                (item, index) => {
                    indexBoard = offset + index + 1;
                    writer = item.writer
                    title = item.title
                    dtm = item.dtm
                    id = item.postId;

                    let td = `<tr data-id="${id}">
                    <td>${indexBoard} </td>
                    <td>${writer}</td>
                    <td><a href = '/detail/${id}'>${title}</a></td>
                    <td>${dtm}</td>
                </tr>`

                    table.append(td);


                }
            )

        }

    }, [updateDate, cnt, storeLength, page])


    // db에 있는 정보를 받아와서 td를 통해 저장
    // 맨 처음에 table 초기화 시키고 그 후에 item 하나씩 추가

    return (
        <>
            <div className="board_list_box">
                <h1 className="board_list_title">Board List Page
                    <Link to="/post">
                        <button className="btn_add_post">글쓰기</button>
                    </Link>
                    <div className="update_date_area">
                        <button type="button" className="btn_reload" onClick={toReload}/>
                        <div className="update_date_text">업데이트 날짜 : {updateDate}</div>
                    </div>
                </h1>

                <table className="board_list_table"> </table>

                <div className="board_list_pagination">
                    <BoardPagination
                        total={storeBoardList === null ? 0 : storeBoardList.length}
                        limit={limit}
                        page={page}
                        setPage={setPage}/>
                </div>

            </div>


        </>
    )
}

export default BoardList;