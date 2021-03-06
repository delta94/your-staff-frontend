import moment from "moment"
// eslint-disable-next-line no-unused-vars
const selectedDateReducer = ( state=null, action) => {
  switch (action.type) {
  case "CURRENT_DATE":
    return action.data
  default:
    return moment().toDate()
  }
}

export const selectingDateAction = (date) => {
  return async dispatch => {
    dispatch( {
      type: "CURRENT_DATE",
      data: date
    }
    )
  }
}

export default selectedDateReducer