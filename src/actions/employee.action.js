import staffService from "../services/staffs"
import { employeeConstants } from "../constants/employee.constants"
import alertAction from "../actions/alert.action"

const fetchEmployees = () => {
  return async dispatch => {
    dispatch({ type: employeeConstants.FETCH_REQUEST })
    try {
      const employees = await staffService.getAll()
      console.log(employees,"employees")
      dispatch({
        type:employeeConstants.FETCH_SUCCESS,
        employees
      })
    }catch(exception) {
      console.log(exception.error)
      dispatch({
        type: employeeConstants.FETCH_FAILURE,
        error: exception.error
      })
      dispatch(alertAction.error(exception.error))
    }
  }
}

const deactiveEmployee = (id) => {
  return async dispatch => {
    dispatch({ type: employeeConstants.DEACTIVE_REQUEST })
    try {
      const deactivedEmployee = await staffService.deactiveStaff(id)
      dispatch({
        type: employeeConstants.DEACTIVE_SUCCESS,
        deactivedEmployee
      })
      console.log(deactivedEmployee,"deactiveemployee")
    } catch (exception) {
      console.log(exception.error)
      dispatch({
        type: employeeConstants.DEACTIVE_FAILURE,
        error: exception.error
      })
      dispatch(alertAction.error(exception.error))
    }
  }
}

const activeEmployee = (id) => {
  return async dispatch => {
    dispatch({ type: employeeConstants.ACTIVE_REQUEST })
    try {
      const activedEmployee = await staffService.activeStaff(id)
      dispatch({
        type: employeeConstants.ACTIVE_SUCCESS,
        activedEmployee
      })
      console.log(activedEmployee,"activedEmployee")
    } catch (exception) {
      console.log(exception.error)
      dispatch({
        type: employeeConstants.ACTIVE_FAILURE,
        error: exception.error
      })
      dispatch(alertAction.error(exception.error))
    }
  }
}

export default { fetchEmployees,deactiveEmployee, activeEmployee }