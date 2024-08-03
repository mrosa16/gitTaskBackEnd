const NoPermissionError = require("../../errors/NoPermissionError/Index")
const TaskNorFoundError = require("../../errors/TaskNotFoundError")

module.exports = (error) =>{
    if(error.originalError instanceof NoPermissionError){
      return new Error(error.message)
    }
    if(error.originalError instanceof TaskNorFoundError){
      return new Error(error.message)
    }
    return error
  }