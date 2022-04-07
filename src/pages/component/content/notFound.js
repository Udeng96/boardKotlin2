import {Link} from "react-router-dom";


const NotFound = () =>{

    return(
        <div>
            <h1>
                해당 게시글이 삭제되었습니다.
            </h1>
            <Link to={"/"}>
                <button>뒤로 가기</button>
            </Link>


        </div>
    )

}

export default NotFound;