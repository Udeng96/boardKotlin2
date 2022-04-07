import {Link, useNavigate} from "react-router-dom";
import '../../css/boardDetail.css'
import BoardDelete from "./boardDelete";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBoardDelete, getBoardDetail} from "../../action/boardAction";
import isNull from "redux-actions/lib/utils/isNull";


const BoardDetail = () => {

    let id = window.location.href;
    id = id.split("/");
    let postId = id[4]


    // 게시물 정보 불러오기
    const dispatch = useDispatch();
    const history = useNavigate();
    let storeBoardDetail = useSelector((state=>state.board.detail));
    let [cnt, setCnt]  = useState(0);
    let [title, setTitle] = useState("");
    let [writer, setWriter] = useState("");
    let [dtm, setDtm] = useState("");
    let [content,setContent] = useState("");


    // 게시물 불러오기
    useEffect(()=>{
        dispatch(getBoardDetail(postId));
        if(storeBoardDetail === null){
            if(cnt>10){
                alert("detail error")
                return;
            }
            setTimeout(()=>{
                setCnt(cnt+1);
                console.log("detail reload")
            },10)
        }else{
            if(storeBoardDetail.length === 0){
                history("/*");
            }else{
                setTitle(storeBoardDetail[0].title);
                setWriter(storeBoardDetail[0].writer);
                setDtm(storeBoardDetail[0].dtm);
                setContent(storeBoardDetail[0].contents);
            }

        }

    },[cnt])


    let [isOpen, setIsOpen] = useState(false);

    const openModal=()=>{
        setIsOpen(true);
    }

    const closeModal=()=>{
        setIsOpen(false);
    }

    return (
    <div className="board_detail_box">
        <h1 className="board_detail_title">Board Detail Page
            <div className="btn_area">
                <button className="btn_delete_post"onClick={openModal}>삭제하기</button>
                <Link to = {`/modify/${postId}`} >
                    <button className="btn_modify_post">수정하기</button>
                </Link>
                <Link to = {`/`}>
                    <button className="btn_back_list">뒤로가기</button>
                </Link>

            </div>

        </h1>
        <BoardDelete isOpen={isOpen} close={closeModal} postId={postId}/>
        <table>
            <tr>
                <th className="post_title">제 목</th>
                {isNull(storeBoardDetail) ? <td> No Data </td>  : <td> {title} </td>}
             </tr>
            <tr>
                <th className="post_writer">작성자</th>
                {isNull(storeBoardDetail) ? <td>No Data</td> : <td> {writer} </td>}
            </tr>
            <tr>
                <th className="post_dtm">날 짜</th>
                {isNull(storeBoardDetail) ? <td>No Data</td> : <td> {dtm} </td>}
            </tr>
            <tr>
                <th className="post_content">내 용</th>
                {isNull(storeBoardDetail) ? <td>No Data</td> : <td> {content} </td>}
            </tr>
        </table>
    </div>
)

}

export default BoardDetail;