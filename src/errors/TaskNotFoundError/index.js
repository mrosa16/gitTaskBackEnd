class TaskNorFoundError extends Error{
    constructor(message, ...args){
        super(message, ...args);

        this.message = message
        this.name =  "TaskNorFoundError"
    }


}

module.exports =  TaskNorFoundError;