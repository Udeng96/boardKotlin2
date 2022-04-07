import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getBoardDelete} from "../../action/boardAction";
import '../../css/boardDelete.css'
import {useNavigate} from "react-router-dom";

const BoardDelete = (param) => {

    console.log("param", param);

    const history = useNavigate();

    //화면을 불러오고 처음에 isOpen에 true를 대입해주기.

    let dispatch = useDispatch();
    let postId = param.postId;
    const closePop = () => {
        param.close()
    }


    const toDelete = () => {
        dispatch(getBoardDelete(postId));
        closePop();
        alert("삭제가 완료되었습니다.");
        history("/");
    }


    return (
        <div className={param.isOpen ? "board_delete_popup setOpen" : "board_delete_popup"}>
            <section className="board_delete_popup_section">
                <h1 className="board_delete_title">Board Delete Popup</h1>
                <div className="board_delete_check">
                    <p>정말 삭제하시겠습니까?</p>
                    <div className="check_btn_area">
                        <button className="check_okay" onClick={toDelete}> 삭제하기</button>
                        <button className="check_no" onClick={closePop}> 취소하기</button>
                    </div>

                </div>
            </section>
        </div>
    )
}


export default BoardDelete;