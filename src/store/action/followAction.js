import { SocialAPI } from "../../api/api";

export const GET_FOLLOW = "GET_FOLLOW";

const getFollowAC = (follow) => ({type : GET_FOLLOW, payload: follow});

export const setFollowThunk = (userId) => (dispatch) => {
    SocialAPI.setFollow(userId)
    .then((res) => {
        if(res?.data?.resultCode === 0) {
            SocialAPI.getFollow(userId)
            .then((res) => dispatch(getFollowAC(true)))
        }
    })
}