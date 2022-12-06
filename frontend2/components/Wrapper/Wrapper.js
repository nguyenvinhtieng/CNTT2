import { useEffect } from "react";
import {  useDispatch } from "react-redux";
import { fetchDataUser } from "~/redux/actions/authActions";
import { fetchPostData } from "~/redux/actions/postActions";
import { fetchQuestionData } from "~/redux/actions/questionAction";
function Wrapper({children}) {
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(fetchDataUser());
        dispatch(fetchPostData({}));
        dispatch(fetchQuestionData({}));
    }, [])
    return (
        <>
            {children}
        </>
    )
}

export default Wrapper;