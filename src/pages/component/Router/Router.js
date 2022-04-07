import {BrowserRouter, Redirect, Route, Routes, Switch,} from "react-router-dom";
import BoardList from "../content/list/boardList";
import BoardPost from "../content/boardPost";
import BoardDetail from "../content/boardDetail";
import BoardModify from "../content/boardModify";
import {useEffect} from "react";
import {getBoardList} from "../../action/boardAction";
import {useDispatch, useSelector} from "react-redux";
import NotFound from "../content/notFound";

const Router = () => {


    return(

        <BrowserRouter>
               <Routes>
                   <Route path="/" element = {<BoardList />}/>
                   <Route path="/post" element = {<BoardPost/>}/>
                   <Route path="/detail/:id" element={<BoardDetail/>}/>
                   <Route path="/modify/:id" element={<BoardModify/>}/>
                   <Route path="/*" element={<NotFound />}/>
               </Routes>
        </BrowserRouter>

        )

}


export default Router;
