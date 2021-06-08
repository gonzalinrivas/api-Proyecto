
/**
 * QUERYS PARA EMPLEADOS
 */
GET_EMPLOYEES = "select * from users";
GET_BY_USER_NAME = "select * from users where user_name = ? ";
GET_LOGIN = "select * from users where user_name = ? and password =  ? and leaving_date > ? " ;

/**
 * QUERYS PARA PLANNING
 */
GET_PENDING_PLANNING_BY_USER = "select * from jobs j join planning p using ( id_job ) where p.id_user = ? and p.end_time is null";

GET_FINISHED_PLANNING_BY_USER = "select * from jobs j join planning p using ( id_job ) where p.id_user = ? and p.end_time is not null"
