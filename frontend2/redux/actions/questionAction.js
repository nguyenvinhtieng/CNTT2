import { push } from 'react-router-redux';
import API from "~/api";
import displayToast from "~/utils/displayToast";
import { getMethod, postMethod } from "~/utils/fetchData";
import { CREDENTIALS, GLOBAL_TYPES } from "../constants";

export const fetchQuestionData = ({page, filter}) => {
    return async (dispatch, getState) => {
        try {
            const state = getState();
            if(state.questions.isEnd || state.questions.loading) return;
            dispatch({
                type: GLOBAL_TYPES.QUESTION,
                payload: {
                    ...state.questions,
                    loading: true
                }
            })

            page = state.questions.page + 1;
            if(page) page = page <= 0 ? 0 : page
            const url = `question?page=${page <= 0 ? 0 : page}`;
            const res = await getMethod(url);
            const { data } = res;
            if(data.status) {
                dispatch({
                    type: GLOBAL_TYPES.QUESTION,
                    payload: {
                        ...state.questions,
                        data: [...state.questions.data, ...data.questions],
                        page: page,
                        isEnd: data.questions.length <= 10,
                        loading: false
                    }
                })
            }else {
                dispatch({
                    type: GLOBAL_TYPES.QUESTION,
                    payload: {
                        ...state.questions,
                        loading: false,
                        isEnd: true
                    }
                })
            }
        } catch (error) {
            console.log(error);
        }
    };
}


export const createQuestion = (formData, router) => {
    return async (dispatch, getState) => {
        try {
            const state = getState();
            dispatch({
                type: GLOBAL_TYPES.APP_STATE,
                payload: { ...state.appState, loading: true }
            })
            let res = await postMethod(`question`, formData);
            const { data } = res;
            if(data.status) {
                displayToast("success", data.message);
                dispatch({
                    type: GLOBAL_TYPES.QUESTION,
                    payload: {
                        ...state.questions,
                        data: [data.question, ...state.questions.data]
                    }
                })
                router.push('/')
            }
            dispatch({
                type: GLOBAL_TYPES.APP_STATE,
                payload: { ...state.appState, loading: false }
            })
        } catch (error) {
            console.log(error);
        }
    };
}

export const addAnswer = ({question_id, content, reply_id}) => {
    return async (dispatch, getState) => {
        const state = getState();
        try {
            let res = await postMethod(`answer`, {question_id, content, reply_id});
            const { data } = res;
            if(data.status) {
                displayToast("success", data.message);
                dispatch({
                    type: GLOBAL_TYPES.QUESTION,
                    payload: {
                        ...state.questions,
                        data: [...state.questions.data, data.question]
                    }
                })
            }
            
        } catch (error) {
            console.log(error);
        }
    }
}