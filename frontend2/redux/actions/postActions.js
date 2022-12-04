import { push } from 'react-router-redux';
import API from "~/api";
import displayToast from "~/utils/displayToast";
import { getMethod, postMethod, postMethodMultipart } from "~/utils/fetchData";
import { CREDENTIALS, GLOBAL_TYPES } from "../constants";

export const fetchPostData = ({page, filter}) => {
    return async (dispatch, getState) => {
        try {
            const state = getState();
            if(state.posts.isEnd || state.posts.loading) return;
            dispatch({
                type: GLOBAL_TYPES.POST,
                payload: {
                    ...state.posts,
                    loading: true
                }
            })

            page = state.posts.page + 1;
            if(page) page = page <= 0 ? 0 : page
            const url = `post?page=${page <= 0 ? 0 : page}`;
            const res = await getMethod(url);
            const { data } = res;
            if(data.status) {
                let oldPosts = state.posts.data;
                let newPosts = data.posts;
                let newData = [...oldPosts]
                newPosts.forEach(item => {
                    if(!oldPosts.find(i => i._id === item._id)) {
                        newData.push(item);
                    }
                })
                dispatch({
                    type: GLOBAL_TYPES.POST,
                    payload: {
                        ...state.posts,
                        data: newData,
                        loading: false,
                        page: page,
                        isEnd: newPosts.length < 10
                    }
                })
            }
        } catch (error) {
            console.log(error);
        }
    };
}

export const createPost = (formData) => {
    return async (dispatch, getState) => {
        const state = getState();
        try {
            dispatch({ 
                type: GLOBAL_TYPES.APP_STATE,
                payload: { ...state.appState, loading: true }
            });
            let res = await postMethod("post", formData);
            const { data } = res;
            if (data.status) {
                displayToast("success", data.message);
                dispatch(push("/"));
            }else {
                displayToast("error", data.message);
            }
            dispatch({ 
                type: GLOBAL_TYPES.APP_STATE,
                payload: { ...state.appState, loading: false }
            });
        } catch (error) {
            console.log(error);
            displayToast("error", error.message);
        }
    };
}
export const votePost = ({post_id, type}) => {
    return async (dispatch, getState) => {
        const state = getState();
        try {
            if(type !== "upvote" && type !== "downvote") return;
            const res = await postMethod("post/vote", {post_id, type});
            const { data } = res;
            if(data.status) {
                let newData = state.posts.data.map(item => {
                    if(item._id === post_id) {
                        return {...item, ...data.post}
                    }
                    return item;
                })
                dispatch({
                    type: GLOBAL_TYPES.POST,
                    payload: {
                        ...state.posts,
                        data: newData
                    }
                })
            }else {
                displayToast("error", data.message);
            }

        } catch (error) {
            console.log(error);
            displayToast("error", error.message);
        }
    };
}

export const commentPost = ({post_id, content, reply_id}) => {
    return async (dispatch, getState) => {
        const state = getState();
        try {
            const res = await postMethod("comment", {post_id, content, reply_id});
            const { data } = res;
            if(data.status) {
                let newData = state.posts.data.map(item => {
                    if(item._id === post_id) {
                        return {...item, comments: [...item.comments, data.comment]}
                    }
                    return item;
                })
                dispatch({
                    type: GLOBAL_TYPES.POST,
                    payload: {
                        ...state.posts,
                        data: newData
                    }
                })
                displayToast("success", data.message);
            }else {
                displayToast("error", data.message);
            }

        } catch (error) {
            console.log(error);
            displayToast("error", error.message);
        }
    };
}

