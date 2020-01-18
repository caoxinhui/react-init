export const GET_USER_INFO_REQUEST = "userInfo/GET_USER_INFO_REQUEST";
export const GET_USER_INFO_SUCCESS = "userInfo/GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAIL = "userInfo/GET_USER_INFO_FAIL";

export function getUserInfoRequest() {
  return {
    type: GET_USER_INFO_REQUEST
  }
}

export function getUserInfoSuccess(userInfo) {
  return {
    type: GET_USER_INFO_SUCCESS,
    userInfo: userInfo
  }
}

export function getUserInfoFail() {
  return {
    type: GET_USER_INFO_FAIL
  }
}