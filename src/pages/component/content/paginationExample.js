import {Navigate} from "react-router-dom";

const PaginationExample = ({total, limit, page, setPage}) =>{
    // 페이지 수 (나눠서 올림 한 값)
    const numPages = Math.ceil(total/limit);

    return(
        <>
            <Navigate>
                {/*setPage를 통해 page 상태가 변경*/}
                {/*이전 버튼 = 눌렀을 때 페이지가 현재 페이지에서 앞으로 한 장 이동 1일때 제외*/}
                <button onClick={()=> setPage(page-1)} disabled={page===1}>&lt;</button>
                {/*페이지 목록들.*/}
                {/*각각의 페이지 버튼들*/}
                {Array(numPages)
                    .fill()
                    .map((_, i) =>(
                        // ket는 index번호+1(0부터 시작하므로)
                        // 따라서 해당번호를 클릭하면 index+1
                        // button을 눌렀을 때 해당페이지에 맞는 화면 출력 (aria-current)
                        <button
                            key={i+1}
                            onClick={()=>setPage(i+1)}
                            aria-current = {page ===i+1? "page" : null}
                            >
                            {i+1}
                        </button>
                    ))}
                {/*다음버튼 = 눌렀을 때 현재 페이지에서 뒤로 한 장 이동 마지막 페이지일 때 제외*/}
                <button onClick={()=>setPage(page+1)} disabled={page===numPages}>
                    &gt;
                </button>
            </Navigate>
        </>
    )
}

export default PaginationExample