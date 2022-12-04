import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchDataUser } from "~/redux/actions/authActions";
import { fetchPostData } from "~/redux/actions/postActions";
function Wrapper({children, fetchDataUser, fetchPostData}) {
    useEffect(()=> {
        fetchDataUser();
        fetchPostData({});
    }, [])
    return (
        <>
            {children}
        </>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchDataUser: () => dispatch(fetchDataUser()),
        fetchPostData: ({page, filter}) => dispatch(fetchPostData({page, filter})),
    };
};
export default connect(null, mapDispatchToProps)(Wrapper);