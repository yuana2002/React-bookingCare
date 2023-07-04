import actionTypes from "./actionTypes";
import {
    getAllCodeService, createNewUserService,
    getAllUsers, deleteUserService, editUserService, getTopDoctorHomeService
} from "../../services/userService";
import { toast } from "react-toastify";

// export const addUserSuccess = () =>({
//     type: actionTypes.ADD_USER_SUCCESS
// })

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START })
            let res = await getAllCodeService("GENDER");
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data));
            } else {
                dispatch(fetchGenderFailed());
            }
        } catch (e) {
            dispatch(fetchGenderFailed());
            console.log('fetchGenderStart error', e)
        }
    }
}


export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})


export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("POSITION");
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data));
            } else {
                dispatch(fetchPositionFailed());
            }
        } catch (e) {
            dispatch(fetchPositionFailed());
            console.log('fetchPositionStart error', e)
        }
    }
}

export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})

export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED
})


export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("ROLE");
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data));
            } else {
                dispatch(fetchRoleFailed());
            }
        } catch (e) {
            dispatch(fetchRoleFailed());
            console.log('fetchRoleStart error', e)
        }
    }
}

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})

export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data);

            if (res && res.errCode === 0) {
                toast.success(" Create a new user success");
                dispatch(saveUserSuccess())
                dispatch(fetchAllUsersStart());
            } else {
                dispatch(saveUserFailed());
            }
        } catch (e) {
            dispatch(saveUserFailed());
            console.log('saveUserFailed error', e)
        }
    }
}

export const saveUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED
})

export const saveUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS
})

export const fetchAllUsersStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUsers("ALL");
            let res1 = await getTopDoctorHomeService(3);
            console.log('check top doctor', res1)
            if (res && res.errCode === 0) {
                dispatch(fetchAllUsersSuccess(res.users.reverse()))
            } else {
                toast.error("Fetch all error")
                dispatch(fetchAllUsersFailed());
            }
        } catch (e) {
            toast.error("Fetch all error")
            dispatch(fetchAllUsersFailed());
            console.log('fetchAllUsersFailed error', e)
        }
    }
}

export const fetchAllUsersFailed = () => ({
    type: actionTypes.FETCH_ALL_USERS_FAILED,
})

export const fetchAllUsersSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
    users: data
})

export const deleteAUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(userId);
            if (res && res.errCode === 0) {
                toast.success("delete the user success");
                dispatch(deleteUserSuccess())
                dispatch(fetchAllUsersStart());
            } else {
                toast.error("delete the user error")
                dispatch(deleteUserFailed());
            }
        } catch (e) {
            toast.error("delete the user error")
            dispatch(deleteUserFailed());
            console.log('deleteUserFailed error', e)
        }
    }
}

export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS
})

export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED
})


export const editAUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserService(data);
            if (res && res.errCode === 0) {
                toast.success("update the user success");
                dispatch(editUserSuccess())
                dispatch(fetchAllUsersStart());
            } else {
                toast.error("delete the user error")
                dispatch(editUserFailed());
            }
        } catch (e) {
            toast.error("update the user error")
            dispatch(editUserFailed());
            console.log('editUserFailed error', e)
        }
    }
}


export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS
})

export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILED
})

