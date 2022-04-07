import "../../css/boardPost.css"
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getBoardPost} from "../../action/boardAction";

const BoardPost=()=>{

    let dispatch = useDispatch();

    const savePost = () =>{

        let title = document.getElementById("title_input").value;
        let password = document.getElementById("password_input").value;
        let writer = document.getElementById("writer_input").value;
        let content = document.getElementById("content_input").value;

        console.log("title:", title, "password:", password, "writer",writer,"content",content);

        let boardData = new Object();
        boardData.id = "";
        boardData.title =  title;
        boardData.password = password;
        boardData.writer = writer;
        boardData.contents = content;
        boardData.dtm="";

        dispatch(getBoardPost(boardData));
        console.log("boardData:",boardData);

    }

    const backList = () =>{
        window.history.back();
    }

    return(

        <div className="board_post_box">
            <h1 className="board_post_title">Board Post Page
                <div className="btn_area">
                    <Link to = "/">
                        <button className="btn_save_post" onClick={savePost}>저장하기</button>
                    </Link>
                        <button className="btn_back_list" onClick={backList}>뒤로가기</button>
                </div>

            </h1>

            <table>
                <tr>
                    <th className="post_title">제 목</th>
                    <td><input className="title_input" type="text" id="title_input" required="required"/></td>
                </tr>
                <tr>
                    <th className="post_writer">작성자</th>
                    <td><input className="writer_input" id="writer_input" required="required"/></td>
                </tr>
                <tr>
                    <th className="post_password">비밀번호</th>
                    <td><input className="password_input" id="password_input" required="required"/></td>
                </tr>
                <tr>
                    <th className="post_content">내 용</th>
                    <td><textarea rows="15" cols="40" className="content_input" id="content_input" required="required"/> </td>
                </tr>
            </table>
        </div>


    )

}

export default BoardPost;