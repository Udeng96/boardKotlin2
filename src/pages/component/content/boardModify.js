import {Link, useNavigate} from "react-router-dom";
import "../../css/boardModify.css"
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getBoardDetail, getBoardModify} from "../../action/boardAction";
import BoardDelete from "./boardDelete";
import BoardModal from "./boardModal";

const BoardModify = () => {

    let url = window.location.href;
    url = url.split("/");
    let postId = url[4]

    const dispatch = useDispatch();
    const history = useNavigate();

    let storeBoardDetail = useSelector((state => state.board.detail));
    let [cnt, setCnt] = useState(0);
    let [title, setTitle] = useState("");
    let [writer, setWriter] = useState("");
    let [pwd, setPwd] = useState("");
    let [contents, setContents] = useState("");

    useEffect(() => {
        dispatch(getBoardDetail(postId));

        if (storeBoardDetail === null) {
            if (cnt > 10) {
                alert("error")
                return;
            }
            setTimeout(() => {
                setCnt(cnt + 1);
                console.log("reload")
            }, 10)
        }else{
            setTitle(storeBoardDetail[0].title);
            setWriter(storeBoardDetail[0].writer);
            setPwd(storeBoardDetail[0].password);
            setContents(storeBoardDetail[0].contents);


            document.getElementById("titleInput").value = storeBoardDetail[0].title;
            document.getElementById("writerInput").value = storeBoardDetail[0].writer;
            document.getElementById("contentInput").value = storeBoardDetail[0].contents;
        }
    }, [cnt])


    const modifyPost = () => {
        let newTitle = document.getElementById("titleInput").value;
        let newWriter = document.getElementById("writerInput").value;
        let chkPwd = document.getElementById("passwordInput").value;
        let newContents = document.getElementById("contentInput").value;
        let id = postId;

        if (chkPwd == false) {
            alert("비밀번호를 입력해주세요.");
        } else {
            if (chkPwd !== pwd) {
                alert("비밀번호가 틀렸습니다.");
            } else {
                if (title === newTitle && newWriter === writer && newContents === contents) {
                    alert("수정 사항이 없습니다.");
                }
                let boardData = new Object();
                boardData.id = id;
                boardData.title = newTitle;
                boardData.writer = newWriter;
                boardData.password = pwd;
                boardData.contents = newContents;
                boardData.dtm = "";

                dispatch(getBoardModify(boardData));

                history(`/detail/${postId}`);
                window.location.reload();
            }
        }

    }


    let [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }


    return (
        <div className="board_modify_box">
            <h1 className="board_modify_title">Board Modify Page
                <div className="btn_area">
                    <button className="btn_save_post" onClick={modifyPost}>수정하기</button>
                    <button className="btn_back_list" onClick={openModal}>뒤로가기</button>


                </div>

            </h1>
            <BoardModal isOpen={isOpen} close={closeModal}/>
            <table>
                <tr>
                    <th className="post_title">제 목</th>
                    <td><input className="title_input" type="text" id="titleInput" required="required"/></td>
                </tr>
                <tr>
                    <th className="post_writer">작성자</th>
                    <td><input className="writer_input" id="writerInput" required="required"/></td>
                </tr>
                <tr>
                    <th className="post_password">비밀번호</th>
                    <td><input className="password_input" id="passwordInput" required="required"/></td>
                </tr>
                <tr>
                    <th className="post_content">내 용</th>
                    <td><textarea rows="15" cols="40" className="content_input" id="contentInput" required="required"/>
                    </td>
                </tr>
            </table>
        </div>
    )

}

export default BoardModify;

