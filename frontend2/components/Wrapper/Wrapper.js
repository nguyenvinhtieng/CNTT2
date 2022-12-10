import { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { fetchDataUser } from "~/redux/actions/authActions";
import { fetchPostData } from "~/redux/actions/postActions";
import { fetchQuestionData } from "~/redux/actions/questionAction";
import { startSocket } from "~/redux/actions/socketAction";
function Wrapper({children, socket}) {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(fetchDataUser());
        dispatch(fetchPostData({}));
        dispatch(fetchQuestionData({}));
    }, [])
    useEffect(()=> {
        if(auth.user) {
            if(Object.keys(auth?.user).length > 0) {
                console.log("socket start")
                console.log("user: ", auth.user)
                dispatch(startSocket(socket))
                socket.emit("user-login", auth.user)
            }
        }
    }, [auth])
    return (
        <>
            {children}
        </>
    )
}

export default Wrapper;