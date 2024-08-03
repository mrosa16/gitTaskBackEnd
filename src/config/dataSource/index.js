const GitHubService = require("../../service/GitHub.service");
const TasksRegisterService = require("../../service/TasksRegisterService");
const UserRegisterService = require("../../service/UserRegisterService");

module.exports = () =>({
        gitHubService: GitHubService,
        userRegisterService: UserRegisterService,
        tasksService: TasksRegisterService
})