import {useEffect, useState} from "react";

function PaginationExamples() {
    return null;
}

const PaginationPost = () => {

    const [posts, setPosts] = useState([]);
    // 한 페이지에 보여줄 게시물의 수
    const [limit, setLimit] = useState(10);
    //현재 화면이 뜨는 페이지
    const [page, setPage] = useState(1);
    // 첫 게시물의 위치 계산
    // 만약 페이지가 1이면 index 0부터 시작
    // 만약 페이지가 2이면 index 10부터 시작
    const offset = (page-1)*limit;

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then(r => r.json()).then((data)=>setPosts(data));
    },[])

    return(
        <>
            <header>
                <h1>게시물 목록</h1>
            </header>

            <select type="number" value={limit} onChange={({target:{value}})=>setLimit(Number(value))}>
                <option value="10">10</option>
                <option value="12">12</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>

            <main>
                {/*받아온 posts를 화면에 찍어주는 역할*/}
                {/*{posts.map(({id,title,body})=>(*/}
                {posts.slice(offset, offset+limit).map(({id,title,body})=>(
                    <article key ={id}>
                        <h3>
                            {id}. {title}
                        </h3>
                        <p>{body}</p>
                    </article>
                ))}
            </main>

            <footer>
                <PaginationExamples
                total={posts.length}
                limit={limit}
                page={page}
                setPage={setPage}/>
            </footer>

        </>
    )

}

export default PaginationPost;