/* 
 * Application : CICD Integration
 * ClassName   : sys_ws_operation
 * Created On  : 2018-08-10 17:59:46
 * Created By  : b.moers
 * Updated On  : 2018-11-08 05:35:48
 * Updated By  : b.moers
 * URL         : /sys_ws_operation.do?sys_id=deb78ededb775f0076d6b94ffe961940
 */
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

    return new CiCdDeploy(request, response).processUpdateSetDeploySteps();

})(request, response);
