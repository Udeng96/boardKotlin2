import {useDispatch} from "react-redux";
import {getBoardDelete} from "../../action/boardAction";
import "../../css/boardModal.css"
import {useNavigate} from "react-router-dom";

const BoardModal = (param) => {

    const history = useNavigate();

    const closePop = () => {
        param.close()
    }
    const toGoBack = ()=>{
        history("/");
    }


    return (
        <div className={param.isOpen ? "board_back_popup setOpen" : "board_back_popup"}>
            <section className="board_back_popup_section">
                <h1 className="board_back_title">Board Back Popup</h1>
                <div className="board_back_check">
                    <p>정말 뒤로가시겠습니까?</p>
                    <p>작성 중인 정보가 저장되지 않습니다.</p>
                    <div className="check_btn_area">
                        <button className="check_okay" onClick={toGoBack}> 뒤로가기</button>
                        <button className="check_no" onClick={closePop}> 취소하기</button>
                    </div>

                </div>
            </section>
        </div>
    )
}


export default BoardModal;