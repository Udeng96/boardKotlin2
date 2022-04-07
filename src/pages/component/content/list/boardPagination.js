import '../../../css/boardPagination.css'


const BoardPagination = ({total, limit, page, setPage}) =>{

    //현재 페이지 수
    const numPages = Math.ceil(total/limit);

    return(
        <>
            <nav>
                <button onClick={()=>setPage(page-1)} disabled={page===1}>
                    ◀
                </button>
                {Array(numPages)
                    .fill()
                    .map((_,i)=>(
                        <button classname="bnt_page"
                            key={i+1}
                            onClick={()=>setPage(i+1)}
                            aria-current={page===i+1?"page":null}
                            className={page===i+1?"page active":"page"}
                            >
                            {i+1}
                        </button>
                    ))}
                <button onClick={()=>setPage(page+1)} disabled={page===numPages}>
                    ▶
                </button>
            </nav>
        </>
    )
}

export default BoardPagination;