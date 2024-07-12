(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/ch/i18n/i18n.properties":
/*!***************************************************!*\
  !*** ./build.definitions/ch/i18n/i18n.properties ***!
  \***************************************************/
/***/ ((module) => {

module.exports = ""

/***/ }),

/***/ "./build.definitions/application-index.js":
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let ch_actions_application_appupdate_action = __webpack_require__(/*! ./ch/Actions/Application/AppUpdate.action */ "./build.definitions/ch/Actions/Application/AppUpdate.action")
let ch_actions_application_appupdatefailuremessage_action = __webpack_require__(/*! ./ch/Actions/Application/AppUpdateFailureMessage.action */ "./build.definitions/ch/Actions/Application/AppUpdateFailureMessage.action")
let ch_actions_application_appupdateprogressbanner_action = __webpack_require__(/*! ./ch/Actions/Application/AppUpdateProgressBanner.action */ "./build.definitions/ch/Actions/Application/AppUpdateProgressBanner.action")
let ch_actions_application_appupdatesuccessmessage_action = __webpack_require__(/*! ./ch/Actions/Application/AppUpdateSuccessMessage.action */ "./build.definitions/ch/Actions/Application/AppUpdateSuccessMessage.action")
let ch_actions_application_logout_action = __webpack_require__(/*! ./ch/Actions/Application/Logout.action */ "./build.definitions/ch/Actions/Application/Logout.action")
let ch_actions_application_navtoabout_action = __webpack_require__(/*! ./ch/Actions/Application/NavToAbout.action */ "./build.definitions/ch/Actions/Application/NavToAbout.action")
let ch_actions_application_navtoactivitylog_action = __webpack_require__(/*! ./ch/Actions/Application/NavToActivityLog.action */ "./build.definitions/ch/Actions/Application/NavToActivityLog.action")
let ch_actions_application_navtosupport_action = __webpack_require__(/*! ./ch/Actions/Application/NavToSupport.action */ "./build.definitions/ch/Actions/Application/NavToSupport.action")
let ch_actions_application_onwillupdate_action = __webpack_require__(/*! ./ch/Actions/Application/OnWillUpdate.action */ "./build.definitions/ch/Actions/Application/OnWillUpdate.action")
let ch_actions_application_reset_action = __webpack_require__(/*! ./ch/Actions/Application/Reset.action */ "./build.definitions/ch/Actions/Application/Reset.action")
let ch_actions_application_resetmessage_action = __webpack_require__(/*! ./ch/Actions/Application/ResetMessage.action */ "./build.definitions/ch/Actions/Application/ResetMessage.action")
let ch_actions_application_usermenupopover_action = __webpack_require__(/*! ./ch/Actions/Application/UserMenuPopover.action */ "./build.definitions/ch/Actions/Application/UserMenuPopover.action")
let ch_actions_closemodalpage_cancel_action = __webpack_require__(/*! ./ch/Actions/CloseModalPage_Cancel.action */ "./build.definitions/ch/Actions/CloseModalPage_Cancel.action")
let ch_actions_closemodalpage_complete_action = __webpack_require__(/*! ./ch/Actions/CloseModalPage_Complete.action */ "./build.definitions/ch/Actions/CloseModalPage_Complete.action")
let ch_actions_closepage_action = __webpack_require__(/*! ./ch/Actions/ClosePage.action */ "./build.definitions/ch/Actions/ClosePage.action")
let ch_actions_createentityfailuremessage_action = __webpack_require__(/*! ./ch/Actions/CreateEntityFailureMessage.action */ "./build.definitions/ch/Actions/CreateEntityFailureMessage.action")
let ch_actions_createentitysuccessmessage_action = __webpack_require__(/*! ./ch/Actions/CreateEntitySuccessMessage.action */ "./build.definitions/ch/Actions/CreateEntitySuccessMessage.action")
let ch_actions_deleteconfirmation_action = __webpack_require__(/*! ./ch/Actions/DeleteConfirmation.action */ "./build.definitions/ch/Actions/DeleteConfirmation.action")
let ch_actions_deleteentityfailuremessage_action = __webpack_require__(/*! ./ch/Actions/DeleteEntityFailureMessage.action */ "./build.definitions/ch/Actions/DeleteEntityFailureMessage.action")
let ch_actions_deleteentitysuccessmessage_action = __webpack_require__(/*! ./ch/Actions/DeleteEntitySuccessMessage.action */ "./build.definitions/ch/Actions/DeleteEntitySuccessMessage.action")
let ch_actions_errorarchive_errorarchive_syncfailure_action = __webpack_require__(/*! ./ch/Actions/ErrorArchive/ErrorArchive_SyncFailure.action */ "./build.definitions/ch/Actions/ErrorArchive/ErrorArchive_SyncFailure.action")
let ch_actions_errorarchive_navtoerrorarchive_detail_action = __webpack_require__(/*! ./ch/Actions/ErrorArchive/NavToErrorArchive_Detail.action */ "./build.definitions/ch/Actions/ErrorArchive/NavToErrorArchive_Detail.action")
let ch_actions_errorarchive_navtoerrorarchive_list_action = __webpack_require__(/*! ./ch/Actions/ErrorArchive/NavToErrorArchive_List.action */ "./build.definitions/ch/Actions/ErrorArchive/NavToErrorArchive_List.action")
let ch_actions_genericbannermessage_action = __webpack_require__(/*! ./ch/Actions/GenericBannerMessage.action */ "./build.definitions/ch/Actions/GenericBannerMessage.action")
let ch_actions_genericmessagebox_action = __webpack_require__(/*! ./ch/Actions/GenericMessageBox.action */ "./build.definitions/ch/Actions/GenericMessageBox.action")
let ch_actions_genericnavigation_action = __webpack_require__(/*! ./ch/Actions/GenericNavigation.action */ "./build.definitions/ch/Actions/GenericNavigation.action")
let ch_actions_generictoastmessage_action = __webpack_require__(/*! ./ch/Actions/GenericToastMessage.action */ "./build.definitions/ch/Actions/GenericToastMessage.action")
let ch_actions_logging_loguploadfailure_action = __webpack_require__(/*! ./ch/Actions/Logging/LogUploadFailure.action */ "./build.definitions/ch/Actions/Logging/LogUploadFailure.action")
let ch_actions_logging_loguploadsuccessful_action = __webpack_require__(/*! ./ch/Actions/Logging/LogUploadSuccessful.action */ "./build.definitions/ch/Actions/Logging/LogUploadSuccessful.action")
let ch_actions_logging_uploadlog_action = __webpack_require__(/*! ./ch/Actions/Logging/UploadLog.action */ "./build.definitions/ch/Actions/Logging/UploadLog.action")
let ch_actions_logging_uploadlogprogress_action = __webpack_require__(/*! ./ch/Actions/Logging/UploadLogProgress.action */ "./build.definitions/ch/Actions/Logging/UploadLogProgress.action")
let ch_actions_myapp_attachments_table_attachments_table_createentity_action = __webpack_require__(/*! ./ch/Actions/myApp/Attachments_table/Attachments_table_CreateEntity.action */ "./build.definitions/ch/Actions/myApp/Attachments_table/Attachments_table_CreateEntity.action")
let ch_actions_myapp_attachments_table_attachments_table_deleteentity_action = __webpack_require__(/*! ./ch/Actions/myApp/Attachments_table/Attachments_table_DeleteEntity.action */ "./build.definitions/ch/Actions/myApp/Attachments_table/Attachments_table_DeleteEntity.action")
let ch_actions_myapp_attachments_table_attachments_table_detailpopover_action = __webpack_require__(/*! ./ch/Actions/myApp/Attachments_table/Attachments_table_DetailPopover.action */ "./build.definitions/ch/Actions/myApp/Attachments_table/Attachments_table_DetailPopover.action")
let ch_actions_myapp_attachments_table_attachments_table_opendocument_action = __webpack_require__(/*! ./ch/Actions/myApp/Attachments_table/Attachments_table_OpenDocument.action */ "./build.definitions/ch/Actions/myApp/Attachments_table/Attachments_table_OpenDocument.action")
let ch_actions_myapp_attachments_table_attachments_table_updateentity_action = __webpack_require__(/*! ./ch/Actions/myApp/Attachments_table/Attachments_table_UpdateEntity.action */ "./build.definitions/ch/Actions/myApp/Attachments_table/Attachments_table_UpdateEntity.action")
let ch_actions_myapp_attachments_table_attachments_table_uploadstream_action = __webpack_require__(/*! ./ch/Actions/myApp/Attachments_table/Attachments_table_UploadStream.action */ "./build.definitions/ch/Actions/myApp/Attachments_table/Attachments_table_UploadStream.action")
let ch_actions_myapp_attachments_table_navtoattachments_table_create_action = __webpack_require__(/*! ./ch/Actions/myApp/Attachments_table/NavToAttachments_table_Create.action */ "./build.definitions/ch/Actions/myApp/Attachments_table/NavToAttachments_table_Create.action")
let ch_actions_myapp_attachments_table_navtoattachments_table_detail_action = __webpack_require__(/*! ./ch/Actions/myApp/Attachments_table/NavToAttachments_table_Detail.action */ "./build.definitions/ch/Actions/myApp/Attachments_table/NavToAttachments_table_Detail.action")
let ch_actions_myapp_attachments_table_navtoattachments_table_edit_action = __webpack_require__(/*! ./ch/Actions/myApp/Attachments_table/NavToAttachments_table_Edit.action */ "./build.definitions/ch/Actions/myApp/Attachments_table/NavToAttachments_table_Edit.action")
let ch_actions_myapp_attachments_table_navtoattachments_table_list_action = __webpack_require__(/*! ./ch/Actions/myApp/Attachments_table/NavToAttachments_table_List.action */ "./build.definitions/ch/Actions/myApp/Attachments_table/NavToAttachments_table_List.action")
let ch_actions_myapp_service_closeoffline_action = __webpack_require__(/*! ./ch/Actions/myApp/Service/CloseOffline.action */ "./build.definitions/ch/Actions/myApp/Service/CloseOffline.action")
let ch_actions_myapp_service_closeofflinefailuremessage_action = __webpack_require__(/*! ./ch/Actions/myApp/Service/CloseOfflineFailureMessage.action */ "./build.definitions/ch/Actions/myApp/Service/CloseOfflineFailureMessage.action")
let ch_actions_myapp_service_closeofflinesuccessmessage_action = __webpack_require__(/*! ./ch/Actions/myApp/Service/CloseOfflineSuccessMessage.action */ "./build.definitions/ch/Actions/myApp/Service/CloseOfflineSuccessMessage.action")
let ch_actions_myapp_service_downloadoffline_action = __webpack_require__(/*! ./ch/Actions/myApp/Service/DownloadOffline.action */ "./build.definitions/ch/Actions/myApp/Service/DownloadOffline.action")
let ch_actions_myapp_service_downloadstartedmessage_action = __webpack_require__(/*! ./ch/Actions/myApp/Service/DownloadStartedMessage.action */ "./build.definitions/ch/Actions/myApp/Service/DownloadStartedMessage.action")
let ch_actions_myapp_service_initializeoffline_action = __webpack_require__(/*! ./ch/Actions/myApp/Service/InitializeOffline.action */ "./build.definitions/ch/Actions/myApp/Service/InitializeOffline.action")
let ch_actions_myapp_service_initializeofflinefailuremessage_action = __webpack_require__(/*! ./ch/Actions/myApp/Service/InitializeOfflineFailureMessage.action */ "./build.definitions/ch/Actions/myApp/Service/InitializeOfflineFailureMessage.action")
let ch_actions_myapp_service_syncfailuremessage_action = __webpack_require__(/*! ./ch/Actions/myApp/Service/SyncFailureMessage.action */ "./build.definitions/ch/Actions/myApp/Service/SyncFailureMessage.action")
let ch_actions_myapp_service_syncstartedmessage_action = __webpack_require__(/*! ./ch/Actions/myApp/Service/SyncStartedMessage.action */ "./build.definitions/ch/Actions/myApp/Service/SyncStartedMessage.action")
let ch_actions_myapp_service_uploadoffline_action = __webpack_require__(/*! ./ch/Actions/myApp/Service/UploadOffline.action */ "./build.definitions/ch/Actions/myApp/Service/UploadOffline.action")
let ch_actions_updateentityfailuremessage_action = __webpack_require__(/*! ./ch/Actions/UpdateEntityFailureMessage.action */ "./build.definitions/ch/Actions/UpdateEntityFailureMessage.action")
let ch_actions_updateentitysuccessmessage_action = __webpack_require__(/*! ./ch/Actions/UpdateEntitySuccessMessage.action */ "./build.definitions/ch/Actions/UpdateEntitySuccessMessage.action")
let ch_actions_uploadstreamfailuremessage_action = __webpack_require__(/*! ./ch/Actions/UploadStreamFailureMessage.action */ "./build.definitions/ch/Actions/UploadStreamFailureMessage.action")
let ch_actions_uploadstreamsuccessmessage_action = __webpack_require__(/*! ./ch/Actions/UploadStreamSuccessMessage.action */ "./build.definitions/ch/Actions/UploadStreamSuccessMessage.action")
let ch_globals_application_appdefinition_version_global = __webpack_require__(/*! ./ch/Globals/Application/AppDefinition_Version.global */ "./build.definitions/ch/Globals/Application/AppDefinition_Version.global")
let ch_globals_application_applicationname_global = __webpack_require__(/*! ./ch/Globals/Application/ApplicationName.global */ "./build.definitions/ch/Globals/Application/ApplicationName.global")
let ch_globals_application_supportemail_global = __webpack_require__(/*! ./ch/Globals/Application/SupportEmail.global */ "./build.definitions/ch/Globals/Application/SupportEmail.global")
let ch_globals_application_supportphone_global = __webpack_require__(/*! ./ch/Globals/Application/SupportPhone.global */ "./build.definitions/ch/Globals/Application/SupportPhone.global")
let ch_i18n_i18n_properties = __webpack_require__(/*! ./ch/i18n/i18n.properties */ "./build.definitions/ch/i18n/i18n.properties")
let ch_jsconfig_json = __webpack_require__(/*! ./ch/jsconfig.json */ "./build.definitions/ch/jsconfig.json")
let ch_pages_application_about_page = __webpack_require__(/*! ./ch/Pages/Application/About.page */ "./build.definitions/ch/Pages/Application/About.page")
let ch_pages_application_support_page = __webpack_require__(/*! ./ch/Pages/Application/Support.page */ "./build.definitions/ch/Pages/Application/Support.page")
let ch_pages_application_useractivitylog_page = __webpack_require__(/*! ./ch/Pages/Application/UserActivityLog.page */ "./build.definitions/ch/Pages/Application/UserActivityLog.page")
let ch_pages_errorarchive_errorarchive_detail_page = __webpack_require__(/*! ./ch/Pages/ErrorArchive/ErrorArchive_Detail.page */ "./build.definitions/ch/Pages/ErrorArchive/ErrorArchive_Detail.page")
let ch_pages_errorarchive_errorarchive_list_page = __webpack_require__(/*! ./ch/Pages/ErrorArchive/ErrorArchive_List.page */ "./build.definitions/ch/Pages/ErrorArchive/ErrorArchive_List.page")
let ch_pages_main_page = __webpack_require__(/*! ./ch/Pages/Main.page */ "./build.definitions/ch/Pages/Main.page")
let ch_pages_myapp_attachments_table_attachments_table_create_page = __webpack_require__(/*! ./ch/Pages/myApp_Attachments_table/Attachments_table_Create.page */ "./build.definitions/ch/Pages/myApp_Attachments_table/Attachments_table_Create.page")
let ch_pages_myapp_attachments_table_attachments_table_detail_page = __webpack_require__(/*! ./ch/Pages/myApp_Attachments_table/Attachments_table_Detail.page */ "./build.definitions/ch/Pages/myApp_Attachments_table/Attachments_table_Detail.page")
let ch_pages_myapp_attachments_table_attachments_table_edit_page = __webpack_require__(/*! ./ch/Pages/myApp_Attachments_table/Attachments_table_Edit.page */ "./build.definitions/ch/Pages/myApp_Attachments_table/Attachments_table_Edit.page")
let ch_pages_myapp_attachments_table_attachments_table_list_page = __webpack_require__(/*! ./ch/Pages/myApp_Attachments_table/Attachments_table_List.page */ "./build.definitions/ch/Pages/myApp_Attachments_table/Attachments_table_List.page")
let ch_rules_application_appupdatefailure_js = __webpack_require__(/*! ./ch/Rules/Application/AppUpdateFailure.js */ "./build.definitions/ch/Rules/Application/AppUpdateFailure.js")
let ch_rules_application_appupdatesuccess_js = __webpack_require__(/*! ./ch/Rules/Application/AppUpdateSuccess.js */ "./build.definitions/ch/Rules/Application/AppUpdateSuccess.js")
let ch_rules_application_clientismultiusermode_js = __webpack_require__(/*! ./ch/Rules/Application/ClientIsMultiUserMode.js */ "./build.definitions/ch/Rules/Application/ClientIsMultiUserMode.js")
let ch_rules_application_getclientsupportversions_js = __webpack_require__(/*! ./ch/Rules/Application/GetClientSupportVersions.js */ "./build.definitions/ch/Rules/Application/GetClientSupportVersions.js")
let ch_rules_application_getclientversion_js = __webpack_require__(/*! ./ch/Rules/Application/GetClientVersion.js */ "./build.definitions/ch/Rules/Application/GetClientVersion.js")
let ch_rules_application_onwillupdate_js = __webpack_require__(/*! ./ch/Rules/Application/OnWillUpdate.js */ "./build.definitions/ch/Rules/Application/OnWillUpdate.js")
let ch_rules_application_resetappsettingsandlogout_js = __webpack_require__(/*! ./ch/Rules/Application/ResetAppSettingsAndLogout.js */ "./build.definitions/ch/Rules/Application/ResetAppSettingsAndLogout.js")
let ch_rules_errorarchive_errorarchive_checkforsyncerror_js = __webpack_require__(/*! ./ch/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js */ "./build.definitions/ch/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js")
let ch_rules_logging_loglevels_js = __webpack_require__(/*! ./ch/Rules/Logging/LogLevels.js */ "./build.definitions/ch/Rules/Logging/LogLevels.js")
let ch_rules_logging_settracecategories_js = __webpack_require__(/*! ./ch/Rules/Logging/SetTraceCategories.js */ "./build.definitions/ch/Rules/Logging/SetTraceCategories.js")
let ch_rules_logging_setuserloglevel_js = __webpack_require__(/*! ./ch/Rules/Logging/SetUserLogLevel.js */ "./build.definitions/ch/Rules/Logging/SetUserLogLevel.js")
let ch_rules_logging_togglelogging_js = __webpack_require__(/*! ./ch/Rules/Logging/ToggleLogging.js */ "./build.definitions/ch/Rules/Logging/ToggleLogging.js")
let ch_rules_logging_tracecategories_js = __webpack_require__(/*! ./ch/Rules/Logging/TraceCategories.js */ "./build.definitions/ch/Rules/Logging/TraceCategories.js")
let ch_rules_logging_userlogsetting_js = __webpack_require__(/*! ./ch/Rules/Logging/UserLogSetting.js */ "./build.definitions/ch/Rules/Logging/UserLogSetting.js")
let ch_rules_myapp_attachments_table_attachments_table_createentity_js = __webpack_require__(/*! ./ch/Rules/myApp/Attachments_table/Attachments_table_CreateEntity.js */ "./build.definitions/ch/Rules/myApp/Attachments_table/Attachments_table_CreateEntity.js")
let ch_rules_myapp_attachments_table_attachments_table_deleteconfirmation_js = __webpack_require__(/*! ./ch/Rules/myApp/Attachments_table/Attachments_table_DeleteConfirmation.js */ "./build.definitions/ch/Rules/myApp/Attachments_table/Attachments_table_DeleteConfirmation.js")
let ch_rules_service_initialize_js = __webpack_require__(/*! ./ch/Rules/Service/Initialize.js */ "./build.definitions/ch/Rules/Service/Initialize.js")
let ch_services_myapp_service = __webpack_require__(/*! ./ch/Services/myApp.service */ "./build.definitions/ch/Services/myApp.service")
let ch_styles_styles_css = __webpack_require__(/*! ./ch/Styles/Styles.css */ "./build.definitions/ch/Styles/Styles.css")
let ch_styles_styles_json = __webpack_require__(/*! ./ch/Styles/Styles.json */ "./build.definitions/ch/Styles/Styles.json")
let ch_styles_styles_less = __webpack_require__(/*! ./ch/Styles/Styles.less */ "./build.definitions/ch/Styles/Styles.less")
let ch_styles_styles_nss = __webpack_require__(/*! ./ch/Styles/Styles.nss */ "./build.definitions/ch/Styles/Styles.nss")
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	ch_actions_application_appupdate_action : ch_actions_application_appupdate_action,
	ch_actions_application_appupdatefailuremessage_action : ch_actions_application_appupdatefailuremessage_action,
	ch_actions_application_appupdateprogressbanner_action : ch_actions_application_appupdateprogressbanner_action,
	ch_actions_application_appupdatesuccessmessage_action : ch_actions_application_appupdatesuccessmessage_action,
	ch_actions_application_logout_action : ch_actions_application_logout_action,
	ch_actions_application_navtoabout_action : ch_actions_application_navtoabout_action,
	ch_actions_application_navtoactivitylog_action : ch_actions_application_navtoactivitylog_action,
	ch_actions_application_navtosupport_action : ch_actions_application_navtosupport_action,
	ch_actions_application_onwillupdate_action : ch_actions_application_onwillupdate_action,
	ch_actions_application_reset_action : ch_actions_application_reset_action,
	ch_actions_application_resetmessage_action : ch_actions_application_resetmessage_action,
	ch_actions_application_usermenupopover_action : ch_actions_application_usermenupopover_action,
	ch_actions_closemodalpage_cancel_action : ch_actions_closemodalpage_cancel_action,
	ch_actions_closemodalpage_complete_action : ch_actions_closemodalpage_complete_action,
	ch_actions_closepage_action : ch_actions_closepage_action,
	ch_actions_createentityfailuremessage_action : ch_actions_createentityfailuremessage_action,
	ch_actions_createentitysuccessmessage_action : ch_actions_createentitysuccessmessage_action,
	ch_actions_deleteconfirmation_action : ch_actions_deleteconfirmation_action,
	ch_actions_deleteentityfailuremessage_action : ch_actions_deleteentityfailuremessage_action,
	ch_actions_deleteentitysuccessmessage_action : ch_actions_deleteentitysuccessmessage_action,
	ch_actions_errorarchive_errorarchive_syncfailure_action : ch_actions_errorarchive_errorarchive_syncfailure_action,
	ch_actions_errorarchive_navtoerrorarchive_detail_action : ch_actions_errorarchive_navtoerrorarchive_detail_action,
	ch_actions_errorarchive_navtoerrorarchive_list_action : ch_actions_errorarchive_navtoerrorarchive_list_action,
	ch_actions_genericbannermessage_action : ch_actions_genericbannermessage_action,
	ch_actions_genericmessagebox_action : ch_actions_genericmessagebox_action,
	ch_actions_genericnavigation_action : ch_actions_genericnavigation_action,
	ch_actions_generictoastmessage_action : ch_actions_generictoastmessage_action,
	ch_actions_logging_loguploadfailure_action : ch_actions_logging_loguploadfailure_action,
	ch_actions_logging_loguploadsuccessful_action : ch_actions_logging_loguploadsuccessful_action,
	ch_actions_logging_uploadlog_action : ch_actions_logging_uploadlog_action,
	ch_actions_logging_uploadlogprogress_action : ch_actions_logging_uploadlogprogress_action,
	ch_actions_myapp_attachments_table_attachments_table_createentity_action : ch_actions_myapp_attachments_table_attachments_table_createentity_action,
	ch_actions_myapp_attachments_table_attachments_table_deleteentity_action : ch_actions_myapp_attachments_table_attachments_table_deleteentity_action,
	ch_actions_myapp_attachments_table_attachments_table_detailpopover_action : ch_actions_myapp_attachments_table_attachments_table_detailpopover_action,
	ch_actions_myapp_attachments_table_attachments_table_opendocument_action : ch_actions_myapp_attachments_table_attachments_table_opendocument_action,
	ch_actions_myapp_attachments_table_attachments_table_updateentity_action : ch_actions_myapp_attachments_table_attachments_table_updateentity_action,
	ch_actions_myapp_attachments_table_attachments_table_uploadstream_action : ch_actions_myapp_attachments_table_attachments_table_uploadstream_action,
	ch_actions_myapp_attachments_table_navtoattachments_table_create_action : ch_actions_myapp_attachments_table_navtoattachments_table_create_action,
	ch_actions_myapp_attachments_table_navtoattachments_table_detail_action : ch_actions_myapp_attachments_table_navtoattachments_table_detail_action,
	ch_actions_myapp_attachments_table_navtoattachments_table_edit_action : ch_actions_myapp_attachments_table_navtoattachments_table_edit_action,
	ch_actions_myapp_attachments_table_navtoattachments_table_list_action : ch_actions_myapp_attachments_table_navtoattachments_table_list_action,
	ch_actions_myapp_service_closeoffline_action : ch_actions_myapp_service_closeoffline_action,
	ch_actions_myapp_service_closeofflinefailuremessage_action : ch_actions_myapp_service_closeofflinefailuremessage_action,
	ch_actions_myapp_service_closeofflinesuccessmessage_action : ch_actions_myapp_service_closeofflinesuccessmessage_action,
	ch_actions_myapp_service_downloadoffline_action : ch_actions_myapp_service_downloadoffline_action,
	ch_actions_myapp_service_downloadstartedmessage_action : ch_actions_myapp_service_downloadstartedmessage_action,
	ch_actions_myapp_service_initializeoffline_action : ch_actions_myapp_service_initializeoffline_action,
	ch_actions_myapp_service_initializeofflinefailuremessage_action : ch_actions_myapp_service_initializeofflinefailuremessage_action,
	ch_actions_myapp_service_syncfailuremessage_action : ch_actions_myapp_service_syncfailuremessage_action,
	ch_actions_myapp_service_syncstartedmessage_action : ch_actions_myapp_service_syncstartedmessage_action,
	ch_actions_myapp_service_uploadoffline_action : ch_actions_myapp_service_uploadoffline_action,
	ch_actions_updateentityfailuremessage_action : ch_actions_updateentityfailuremessage_action,
	ch_actions_updateentitysuccessmessage_action : ch_actions_updateentitysuccessmessage_action,
	ch_actions_uploadstreamfailuremessage_action : ch_actions_uploadstreamfailuremessage_action,
	ch_actions_uploadstreamsuccessmessage_action : ch_actions_uploadstreamsuccessmessage_action,
	ch_globals_application_appdefinition_version_global : ch_globals_application_appdefinition_version_global,
	ch_globals_application_applicationname_global : ch_globals_application_applicationname_global,
	ch_globals_application_supportemail_global : ch_globals_application_supportemail_global,
	ch_globals_application_supportphone_global : ch_globals_application_supportphone_global,
	ch_i18n_i18n_properties : ch_i18n_i18n_properties,
	ch_jsconfig_json : ch_jsconfig_json,
	ch_pages_application_about_page : ch_pages_application_about_page,
	ch_pages_application_support_page : ch_pages_application_support_page,
	ch_pages_application_useractivitylog_page : ch_pages_application_useractivitylog_page,
	ch_pages_errorarchive_errorarchive_detail_page : ch_pages_errorarchive_errorarchive_detail_page,
	ch_pages_errorarchive_errorarchive_list_page : ch_pages_errorarchive_errorarchive_list_page,
	ch_pages_main_page : ch_pages_main_page,
	ch_pages_myapp_attachments_table_attachments_table_create_page : ch_pages_myapp_attachments_table_attachments_table_create_page,
	ch_pages_myapp_attachments_table_attachments_table_detail_page : ch_pages_myapp_attachments_table_attachments_table_detail_page,
	ch_pages_myapp_attachments_table_attachments_table_edit_page : ch_pages_myapp_attachments_table_attachments_table_edit_page,
	ch_pages_myapp_attachments_table_attachments_table_list_page : ch_pages_myapp_attachments_table_attachments_table_list_page,
	ch_rules_application_appupdatefailure_js : ch_rules_application_appupdatefailure_js,
	ch_rules_application_appupdatesuccess_js : ch_rules_application_appupdatesuccess_js,
	ch_rules_application_clientismultiusermode_js : ch_rules_application_clientismultiusermode_js,
	ch_rules_application_getclientsupportversions_js : ch_rules_application_getclientsupportversions_js,
	ch_rules_application_getclientversion_js : ch_rules_application_getclientversion_js,
	ch_rules_application_onwillupdate_js : ch_rules_application_onwillupdate_js,
	ch_rules_application_resetappsettingsandlogout_js : ch_rules_application_resetappsettingsandlogout_js,
	ch_rules_errorarchive_errorarchive_checkforsyncerror_js : ch_rules_errorarchive_errorarchive_checkforsyncerror_js,
	ch_rules_logging_loglevels_js : ch_rules_logging_loglevels_js,
	ch_rules_logging_settracecategories_js : ch_rules_logging_settracecategories_js,
	ch_rules_logging_setuserloglevel_js : ch_rules_logging_setuserloglevel_js,
	ch_rules_logging_togglelogging_js : ch_rules_logging_togglelogging_js,
	ch_rules_logging_tracecategories_js : ch_rules_logging_tracecategories_js,
	ch_rules_logging_userlogsetting_js : ch_rules_logging_userlogsetting_js,
	ch_rules_myapp_attachments_table_attachments_table_createentity_js : ch_rules_myapp_attachments_table_attachments_table_createentity_js,
	ch_rules_myapp_attachments_table_attachments_table_deleteconfirmation_js : ch_rules_myapp_attachments_table_attachments_table_deleteconfirmation_js,
	ch_rules_service_initialize_js : ch_rules_service_initialize_js,
	ch_services_myapp_service : ch_services_myapp_service,
	ch_styles_styles_css : ch_styles_styles_css,
	ch_styles_styles_json : ch_styles_styles_json,
	ch_styles_styles_less : ch_styles_styles_less,
	ch_styles_styles_nss : ch_styles_styles_nss,
	tsconfig_json : tsconfig_json,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ }),

/***/ "./build.definitions/ch/Rules/Application/AppUpdateFailure.js":
/*!********************************************************************!*\
  !*** ./build.definitions/ch/Rules/Application/AppUpdateFailure.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateFailure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function AppUpdateFailure(clientAPI) {
    let result = clientAPI.actionResults.AppUpdate.error.toString();
    var message;
    console.log(result);
    if (result.startsWith('Error: Uncaught app extraction failure:')) {
        result = 'Error: Uncaught app extraction failure:';
    }
    if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body: 404 Not Found: Requested route')) {
        result = 'Application instance is not up or running';
    }
    if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body')) {
        result = 'Service instance not found.';
    }

    switch (result) {
        case 'Service instance not found.':
            message = 'Mobile App Update feature is not assigned or not running for your application. Please add the Mobile App Update feature, deploy your application, and try again.';
            break;
        case 'Error: LCMS GET Version Response Error Response Status: 404 | Body: Failed to find a matched endpoint':
            message = 'Mobile App Update feature is not assigned to your application. Please add the Mobile App Update feature, deploy your application, and try again.';
            break;
        case 'Error: LCMS GET Version Response failed: Error: Optional(OAuth2Error.tokenRejected: The newly acquired or refreshed token got rejected.)':
            message = 'The Mobile App Update feature is not assigned to your application or there is no Application metadata deployed. Please check your application in Mobile Services and try again.';
            break;
        case 'Error: Uncaught app extraction failure:':
            message = 'Error extracting metadata. Please redeploy and try again.';
            break;
        case 'Application instance is not up or running':
            message = 'Communication failure. Verify that the BindMobileApplicationRoutesToME Application route is running in your BTP space cockpit.';
            break;
        default:
            message = result;
            break;
    }
    return clientAPI.getPageProxy().executeAction({
        "Name": "/ch/Actions/Application/AppUpdateFailureMessage.action",
        "Properties": {
            "Duration": 0,
            "Message": message
        }
    });
}

/***/ }),

/***/ "./build.definitions/ch/Rules/Application/AppUpdateSuccess.js":
/*!********************************************************************!*\
  !*** ./build.definitions/ch/Rules/Application/AppUpdateSuccess.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateSuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function sleep(ms) {
    return (new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve();
        }, ms);
    }));
}
function AppUpdateSuccess(clientAPI) {
    var message;
    // Force a small pause to let the progress banner show in case there is no new version available
    return sleep(500).then(function() {
        let result = clientAPI.actionResults.AppUpdate.data;
        console.log(result);

        let versionNum = result.split(': ')[1];
        if (result.startsWith('Current version is already up to date')) {
            return clientAPI.getPageProxy().executeAction({
                "Name": "/ch/Actions/Application/AppUpdateSuccessMessage.action",
                "Properties": {
                    "Message": `You are already using the latest version: ${versionNum}`,
                    "NumberOfLines": 2
                }
            });
        } else if (result === 'AppUpdate feature is not enabled or no new revision found.') {
            message = 'No Application metadata found. Please deploy your application and try again.';
            return clientAPI.getPageProxy().executeAction({
                "Name": "/ch/Actions/Application/AppUpdateSuccessMessage.action",
                "Properties": {
                    "Duration": 5,
                    "Message": message,
                    "NumberOfLines": 2
                }
            });
        }
    });
}

/***/ }),

/***/ "./build.definitions/ch/Rules/Application/ClientIsMultiUserMode.js":
/*!*************************************************************************!*\
  !*** ./build.definitions/ch/Rules/Application/ClientIsMultiUserMode.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClientIsMultiUserMode)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ClientIsMultiUserMode(clientAPI) {
    return clientAPI.isAppInMultiUserMode();
}

/***/ }),

/***/ "./build.definitions/ch/Rules/Application/GetClientSupportVersions.js":
/*!****************************************************************************!*\
  !*** ./build.definitions/ch/Rules/Application/GetClientSupportVersions.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientSupportVersions)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientSupportVersions(clientAPI) {
    let versionInfo = clientAPI.getVersionInfo();
    let versionStr = '';
    Object.keys(versionInfo).forEach(function(key, index) {
        // key: the name of the object key
        // index: the ordinal position of the key within the object
        //console.log(`Key: ${key}   Index: ${index}`);
        if (key != 'Application Version') {
            versionStr += `${key}: ${versionInfo[key]}\n`;
        }
    });
    return versionStr;
}

/***/ }),

/***/ "./build.definitions/ch/Rules/Application/GetClientVersion.js":
/*!********************************************************************!*\
  !*** ./build.definitions/ch/Rules/Application/GetClientVersion.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientVersion)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientVersion(clientAPI) {
    let versionInfo = clientAPI.getVersionInfo();
    if (versionInfo.hasOwnProperty('Application Version')) {
        return versionInfo['Application Version'];
    }
}

/***/ }),

/***/ "./build.definitions/ch/Rules/Application/OnWillUpdate.js":
/*!****************************************************************!*\
  !*** ./build.definitions/ch/Rules/Application/OnWillUpdate.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnWillUpdate(clientAPI) {
    return clientAPI.executeAction('/ch/Actions/Application/OnWillUpdate.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/ch/Actions/myApp/Service/CloseOffline.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Offline Odata Close Failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/ch/Rules/Application/ResetAppSettingsAndLogout.js":
/*!*****************************************************************************!*\
  !*** ./build.definitions/ch/Rules/Application/ResetAppSettingsAndLogout.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetAppSettingsAndLogout)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ResetAppSettingsAndLogout(clientAPI) {
    let logger = clientAPI.getLogger();
    let platform = clientAPI.nativescript.platformModule;
    let appSettings = clientAPI.nativescript.appSettingsModule;
    var appId;
    if (platform && (platform.isIOS || platform.isAndroid)) {
        appId = clientAPI.evaluateTargetPath('#Application/#AppData/MobileServiceAppId');
    } else {
        appId = 'WindowsClient';
    }
    try {
        // Remove any other app specific settings
        appSettings.getAllKeys().forEach(key => {
            if (key.substring(0, appId.length) === appId) {
                appSettings.remove(key);
            }
        });
    } catch (err) {
        logger.log(`ERROR: AppSettings cleanup failure - ${err}`, 'ERROR');
    } finally {
        // Logout 
        return clientAPI.getPageProxy().executeAction('/ch/Actions/Application/Reset.action');
    }
}

/***/ }),

/***/ "./build.definitions/ch/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js":
/*!***********************************************************************************!*\
  !*** ./build.definitions/ch/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckForSyncError)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} context
 */
function CheckForSyncError(context) {
    context.count('/ch/Services/myApp.service', 'ErrorArchive', '').then(errorCount => {
        if (errorCount > 0) {
            return context.getPageProxy().executeAction('/ch/Actions/ErrorArchive/ErrorArchive_SyncFailure.action').then(function() {
                return Promise.reject(false);
            });
        }
    });
}

/***/ }),

/***/ "./build.definitions/ch/Rules/Logging/LogLevels.js":
/*!*********************************************************!*\
  !*** ./build.definitions/ch/Rules/Logging/LogLevels.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogLevels)
/* harmony export */ });
function LogLevels(clientAPI) {
    var levels = [];
    levels.push({
        'DisplayValue': 'Error',
        'ReturnValue': 'Error',
    });
    levels.push({
        'DisplayValue': 'Warning',
        'ReturnValue': 'Warn',
    });
    levels.push({
        'DisplayValue': 'Info',
        'ReturnValue': 'Info',
    });
    levels.push({
        'DisplayValue': 'Debug',
        'ReturnValue': 'Debug',
    });
    levels.push({
        'DisplayValue': 'Trace',
        'ReturnValue': 'Trace',
    });
    return levels;
}

/***/ }),

/***/ "./build.definitions/ch/Rules/Logging/SetTraceCategories.js":
/*!******************************************************************!*\
  !*** ./build.definitions/ch/Rules/Logging/SetTraceCategories.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetTraceCategories)
/* harmony export */ });
function SetTraceCategories(clientAPI) {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
    const odataTrace = fcsection.getControl('odataTrace');

    try {
        if (traceCategory.getValue()) {
            var values = traceCategory.getValue();
            var categories = [];

            if (values && values.length) {
                categories = values.map((value) => {
                    return 'mdk.trace.' + value.ReturnValue;
                });
            }
            clientAPI.setDebugSettings(odataTrace.getValue(), true, categories);
        }
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

/***/ }),

/***/ "./build.definitions/ch/Rules/Logging/SetUserLogLevel.js":
/*!***************************************************************!*\
  !*** ./build.definitions/ch/Rules/Logging/SetUserLogLevel.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetUserLogLevel)
/* harmony export */ });
function SetUserLogLevel(clientAPI) {
    try {
        if (clientAPI.getValue() && clientAPI.getValue()[0]) {
            var logger = clientAPI.getLogger();
            var listPickerValue = clientAPI.getValue()[0].ReturnValue;
            if (listPickerValue) {
                switch (listPickerValue) {
                    case 'Debug':
                        logger.setLevel('Debug');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Error':
                        logger.setLevel('Error');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Warn':
                        logger.setLevel('Warn');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Info':
                        logger.setLevel('Info');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Trace':
                        logger.setLevel('Trace');
                        ShowTraceOptions(clientAPI, true);
                        break;
                    default:
                        // eslint-disable-next-line no-console
                        console.log(`unrecognized key ${listPickerValue}`);
                }
                return listPickerValue;
            }
        }
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

function ShowTraceOptions(clientAPI, tracingEnabled) {
    let categories = clientAPI.getPageProxy().getControl('SectionedTable').getControl('TracingCategoriesListPicker');
    let odataTrace = clientAPI.getPageProxy().getControl('SectionedTable').getControl('odataTrace');

    categories.setVisible(tracingEnabled);
    odataTrace.setVisible(tracingEnabled);
}

/***/ }),

/***/ "./build.definitions/ch/Rules/Logging/ToggleLogging.js":
/*!*************************************************************!*\
  !*** ./build.definitions/ch/Rules/Logging/ToggleLogging.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleLogging)
/* harmony export */ });
function ToggleLogging(clientAPI) {
    try {
        var logger = clientAPI.getLogger();
        const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
        const fcsection = sectionedTable.getSection('FormCellSection0');
        const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
        const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
        let switchValue = enableLogSwitch.getValue();
        if (switchValue) {
            logger.on();
            logLevelListPicker.setVisible(true);
            logLevelListPicker.setEditable(true);
            logLevelListPicker.redraw();
        } else {
            logger.off();
            logLevelListPicker.setEditable(false);
            logLevelListPicker.setVisible(false);
            logLevelListPicker.redraw();
        }
        return switchValue;
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

/***/ }),

/***/ "./build.definitions/ch/Rules/Logging/TraceCategories.js":
/*!***************************************************************!*\
  !*** ./build.definitions/ch/Rules/Logging/TraceCategories.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TraceCategories)
/* harmony export */ });
function TraceCategories(clientAPI) {
    var categories = ['action', 'api', 'app', 'binding', 'branding',
        'core', 'i18n', 'lcms', 'logging', 'odata', 'onboarding', 'profiling', 'push',
        'restservice', 'settings', 'targetpath', 'ui'
    ];

    var values = [];
    categories.forEach((category) => {
        values.push({
            'DisplayValue': category,
            'ReturnValue': category,
        });
    });

    return values;
}

/***/ }),

/***/ "./build.definitions/ch/Rules/Logging/UserLogSetting.js":
/*!**************************************************************!*\
  !*** ./build.definitions/ch/Rules/Logging/UserLogSetting.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserLogSetting)
/* harmony export */ });
function UserLogSetting(clientAPI) {

    try {
        var logger = clientAPI.getLogger();

        const sectionedTable = clientAPI.getControl('SectionedTable');
        const fcsection = sectionedTable.getSection('FormCellSection0');
        const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
        const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
        const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
        const odataTrace = fcsection.getControl('odataTrace');


        //Persist the user logging preferences
        if (logger) {
            console.log("in logger state");
            if (logger.isTurnedOn()) {
                if (enableLogSwitch) {
                    enableLogSwitch.setValue(true);
                }
                if (logLevelListPicker) {
                    logLevelListPicker.setEditable(true);
                }
            } else {
                if (enableLogSwitch) {
                    enableLogSwitch.setValue(false);
                }
                if (logLevelListPicker) {
                    logLevelListPicker.setEditable(false);
                }
            }
            var logLevel = logger.getLevel();
            if (logLevel) {
                if (logLevelListPicker) {
                    logLevelListPicker.setValue([logLevel]);
                }
            }
            if (logLevel === 'Trace') {
                traceCategory.setVisible(true);
                odataTrace.setVisible(true);
            }

            //Upon selecting a value in the List picker and clicking the back button 
            //will enable the onload page rule. This will set the selected value
            //in the control
            if (logLevelListPicker.getValue()[0]) {
                var returnValue = logLevelListPicker.getValue()[0].ReturnValue;
                if (returnValue) {
                    logLevelListPicker.setValue([returnValue]);
                    logger.setLevel(returnValue);
                }
            }
        }
    } catch (exception) {
        // eslint-disable-next-line no-console
        console.log(String(exception), 'Error User Logger could not be set');
    }
}

/***/ }),

/***/ "./build.definitions/ch/Rules/Service/Initialize.js":
/*!**********************************************************!*\
  !*** ./build.definitions/ch/Rules/Service/Initialize.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Initialize)
/* harmony export */ });
function Initialize(context) {

    // Perform pre data initialization task

    // Initialize all your Data sources
    let _myApp = context.executeAction('/ch/Actions/myApp/Service/InitializeOffline.action');

    //You can add more service initialize actions here

    return Promise.all([_myApp]).then(() => {
        // After Initializing the DB connections

        // Display successful initialization  message to the user
        return context.executeAction({

            "Name": "/ch/Actions/GenericToastMessage.action",
            "Properties": {
                "Message": "Application Services Initialized",
                "Animated": true,
                "Duration": 1,
                "IsIconHidden": true,
                "NumberOfLines": 1
            }
        });
    }).catch(() => {
        return false;
    });
}

/***/ }),

/***/ "./build.definitions/ch/Rules/myApp/Attachments_table/Attachments_table_CreateEntity.js":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/ch/Rules/myApp/Attachments_table/Attachments_table_CreateEntity.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateEntity)
/* harmony export */ });
function CreateEntity(clientAPI) {
    return clientAPI.executeAction({
        'Name': '/ch/Actions/myApp/Attachments_table/Attachments_table_CreateEntity.action',
        'Properties': {
            'OnSuccess': ''
        }
    }).then((result) => {
        let newEntity = JSON.parse(result.data);
        return clientAPI.executeAction({
            'Name': '/ch/Actions/myApp/Attachments_table/Attachments_table_UploadStream.action',
            'Properties': {
                'Target': {
                    'ReadLink': newEntity['@odata.readLink']
                }
            }
        });
    });
}

/***/ }),

/***/ "./build.definitions/ch/Rules/myApp/Attachments_table/Attachments_table_DeleteConfirmation.js":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/ch/Rules/myApp/Attachments_table/Attachments_table_DeleteConfirmation.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/ch/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/ch/Actions/myApp/Attachments_table/Attachments_table_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/ch/Styles/Styles.css":
/*!************************************************!*\
  !*** ./build.definitions/ch/Styles/Styles.css ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
div.MDKPage

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/
`, "",{"version":3,"sources":["webpack://./build.definitions/ch/Styles/Styles.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\ndiv.MDKPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/ch/Styles/Styles.less":
/*!*************************************************!*\
  !*** ./build.definitions/ch/Styles/Styles.less ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/`, "",{"version":3,"sources":["webpack://./build.definitions/ch/Styles/Styles.less"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/ch/Styles/Styles.nss":
/*!************************************************!*\
  !*** ./build.definitions/ch/Styles/Styles.nss ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../../../../css-loader/dist/runtime/api.js":
/*!**************************************************!*\
  !*** ../../../../css-loader/dist/runtime/api.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../../../css-loader/dist/runtime/sourceMaps.js":
/*!*********************************************************!*\
  !*** ../../../../css-loader/dist/runtime/sourceMaps.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./build.definitions/ch/Pages/Application/About.page":
/*!***********************************************************!*\
  !*** ./build.definitions/ch/Pages/Application/About.page ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"KeyAndValues":[{"_Name":"KeyValue0","KeyName":"User ID","Value":"#Application/#AppData/UserId","Visible":true},{"Value":"#Application/#AppData/DeviceId","_Name":"KeyValue1","KeyName":"Device ID","Visible":true},{"Value":"/ch/Globals/Application/ApplicationName.global","_Name":"KeyValue2","KeyName":"Application","Visible":true},{"Value":"/ch/Globals/Application/AppDefinition_Version.global","_Name":"KeyValue3","KeyName":"Application Metadata Version","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}},{"KeyAndValues":[{"Value":"/ch/Rules/Application/GetClientVersion.js","_Name":"KeyValue4","KeyName":"Client Version","Visible":"$(PLT,true,true,false)"},{"Value":"/ch/Rules/Application/GetClientSupportVersions.js","_Name":"KeyValue5","KeyName":"Client Support Versions","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue1","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"About","Caption":"About","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/ch/Actions/CloseModalPage_Complete.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/ch/Pages/Application/Support.page":
/*!*************************************************************!*\
  !*** ./build.definitions/ch/Pages/Application/Support.page ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ContactCell","_Name":"SectionContactCellTable1","EmptySection":{"FooterVisible":false},"ContactCells":[{"ContactCell":{"_Name":"ContactCellItem0","Headline":"Contact Support","ActivityItems":[{"ActivityType":"Phone","ActivityValue":"/ch/Globals/Application/SupportPhone.global"},{"ActivityType":"Email","ActivityValue":"/ch/Globals/Application/SupportEmail.global"},{"ActivityType":"Message","ActivityValue":"/ch/Globals/Application/SupportPhone.global"}]}}]},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":false,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.SimplePropertyCollection","_Name":"SectionSimplePropertyCollection0","Visible":"$(PLT,true,true,false)","EmptySection":{"FooterVisible":false},"SimplePropertyCells":[{"SimplePropertyCell":{"_Name":"SectionSimplePropertyCell0","KeyName":"Activity Log","AccessoryType":"DisclosureIndicator","Visible":"$(PLT,true,true,false)","OnPress":"/ch/Actions/Application/NavToActivityLog.action"}}],"Layout":{"NumberOfColumns":1,"MinimumInteritemSpacing":66}}]}],"_Type":"Page","_Name":"Settings","Caption":"Settings","PrefersLargeCaption":false,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/ch/Actions/CloseModalPage_Complete.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/ch/Pages/Application/UserActivityLog.page":
/*!*********************************************************************!*\
  !*** ./build.definitions/ch/Pages/Application/UserActivityLog.page ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Controls":[{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"EnableLogSwitch","IsVisible":true,"Separator":true,"Caption":"Enable Logging","OnValueChange":"/ch/Rules/Logging/ToggleLogging.js","IsEditable":true},{"IsSearchEnabled":false,"_Type":"Control.Type.FormCell.ListPicker","_Name":"LogLevelListPicker","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Log Level","OnValueChange":"/ch/Rules/Logging/SetUserLogLevel.js","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":false,"PickerItems":"/ch/Rules/Logging/LogLevels.js"},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"TracingCategoriesListPicker","IsVisible":false,"Separator":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Tracing Categories","PickerPrompt":"Select Categories for Tracing","OnValueChange":"/ch/Rules/Logging/SetTraceCategories.js","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":"/ch/Rules/Logging/TraceCategories.js"},{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"odataTrace","IsVisible":false,"Separator":true,"Caption":"OData Tracing","OnValueChange":"/ch/Rules/Logging/SetTraceCategories.js","IsEditable":true}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection0"},{"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"Send","IsVisible":true,"Separator":true,"Title":"Send Activity Log","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","Enabled":true,"OnPress":"/ch/Actions/Logging/UploadLogProgress.action"}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection1"}]}],"_Type":"Page","_Name":"UserActivityLog","Caption":"Activity Log","PrefersLargeCaption":false,"OnLoaded":"/ch/Rules/Logging/UserLogSetting.js"}

/***/ }),

/***/ "./build.definitions/ch/Pages/ErrorArchive/ErrorArchive_Detail.page":
/*!**************************************************************************!*\
  !*** ./build.definitions/ch/Pages/ErrorArchive/ErrorArchive_Detail.page ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"KeyAndValues":[{"Value":"{Message}","_Name":"KeyValue0","KeyName":"Error","Visible":true},{"Value":"{RequestBody}","_Name":"KeyValue1","KeyName":"Request Body","Visible":true},{"Value":"{RequestURL}","_Name":"KeyValue2","KeyName":"Request URL","Visible":true},{"Value":"{HTTPStatusCode}","_Name":"KeyValue3","KeyName":"HTTP Status Code","Visible":true},{"Value":"{RequestMethod}","_Name":"KeyValue4","KeyName":"Request Method","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"ErrorArchive_Detail","Caption":"Details","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/ch/Pages/ErrorArchive/ErrorArchive_List.page":
/*!************************************************************************!*\
  !*** ./build.definitions/ch/Pages/ErrorArchive/ErrorArchive_List.page ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ObjectTable","Target":{"Service":"/ch/Services/myApp.service","EntitySet":"ErrorArchive"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false,"Caption":"No record found!"},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{HTTPStatusCode}","Subhead":"{RequestURL}","Footnote":"{Message}","StatusText":"{RequestMethod}","AvatarStack":{"ImageIsCircular":false},"PreserveIconStackSpacing":false,"AccessoryType":"None","OnPress":"/ch/Actions/ErrorArchive/NavToErrorArchive_Detail.action","Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"ErrorArchive_List","Caption":"Error List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/ch/Pages/Main.page":
/*!**********************************************!*\
  !*** ./build.definitions/ch/Pages/Main.page ***!
  \**********************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable","Sections":[{"Header":{"_Name":"SectionHeader_myApp","AccessoryType":"None","UseTopPadding":true,"Caption":"myApp"},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Buttons":[{"OnPress":"/ch/Actions/myApp/Attachments_table/NavToAttachments_table_List.action","Alignment":"Center","Title":"Attachments_table","ButtonType":"Text","Semantic":"Tint"}],"_Name":"SectionButtonTable_myApp","_Type":"Section.Type.ButtonTable"}]}],"_Name":"Main","_Type":"Page","Caption":"Main","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"User Menu","Icon":"sap-icon://customer","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/ch/Actions/Application/UserMenuPopover.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/ch/Pages/myApp_Attachments_table/Attachments_table_Create.page":
/*!******************************************************************************************!*\
  !*** ./build.definitions/ch/Pages/myApp_Attachments_table/Attachments_table_Create.page ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/ch/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/ch/Rules/myApp/Attachments_table/Attachments_table_CreateEntity.js","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Attachments_table Detail","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","_Name":"doc_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"invitationId","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{invitationId}","ReturnValue":"{invitationId}","Target":{"EntitySet":"Supplier_table","Service":"/ch/Services/myApp.service"}},"_Name":"invitationId","_Type":"Control.Type.FormCell.ListPicker"},{"AttachmentTitle":"content","AttachmentAddTitle":"Browse","AttachmentActionType":["AddPhoto","TakePhoto","SelectFile"],"AllowedFileTypes":["jpg","png","gif"],"_Name":"content","_Type":"Control.Type.FormCell.Attachment"},{"Caption":"mediaType","_Name":"mediaType","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"fileName","_Name":"fileName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"size","KeyboardType":"Number","_Name":"size","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"url","_Name":"url","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Attachments_table_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/ch/Pages/myApp_Attachments_table/Attachments_table_Detail.page":
/*!******************************************************************************************!*\
  !*** ./build.definitions/ch/Pages/myApp_Attachments_table/Attachments_table_Detail.page ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Attachments_table Detail","DesignTimeTarget":{"Service":"/ch/Services/myApp.service","EntitySet":"Attachments_table","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/ch/Actions/myApp/Attachments_table/NavToAttachments_table_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/ch/Actions/myApp/Attachments_table/Attachments_table_DetailPopover.action","Position":"Right","Caption":"More"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"/ch/Services/myApp.service/{@odata.readLink}/content","HeadlineText":"{fileName}","Subhead":"{doc_id}","BodyText":"","Footnote":"{mediaType}","Description":"{invitationId}","StatusText":"{size}","StatusImage":"","SubstatusImage":"","SubstatusText":"{url}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"doc_id","Value":"{doc_id}"},{"KeyName":"invitationId","Value":"{invitationId}"},{"KeyName":"mediaType","Value":"{mediaType}"},{"KeyName":"fileName","Value":"{fileName}"},{"KeyName":"size","Value":"{size}"},{"KeyName":"url","Value":"{url}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Attachments_table_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/ch/Pages/myApp_Attachments_table/Attachments_table_Edit.page":
/*!****************************************************************************************!*\
  !*** ./build.definitions/ch/Pages/myApp_Attachments_table/Attachments_table_Edit.page ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Update Attachments_table Detail","DesignTimeTarget":{"Service":"/ch/Services/myApp.service","EntitySet":"Attachments_table","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/ch/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/ch/Actions/myApp/Attachments_table/Attachments_table_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","_Name":"doc_id","Value":"{doc_id}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"invitationId","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{invitationId}","ReturnValue":"{invitationId}","Target":{"EntitySet":"Supplier_table","Service":"/ch/Services/myApp.service"}},"Value":"{invitationId}","_Name":"invitationId","_Type":"Control.Type.FormCell.ListPicker","IsEditable":false},{"Caption":"mediaType","_Name":"mediaType","Value":"{mediaType}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"fileName","_Name":"fileName","Value":"{fileName}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"size","_Name":"size","Value":"{size}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"url","_Name":"url","Value":"{url}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Attachments_table_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/ch/Pages/myApp_Attachments_table/Attachments_table_List.page":
/*!****************************************************************************************!*\
  !*** ./build.definitions/ch/Pages/myApp_Attachments_table/Attachments_table_List.page ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Header":{"_Name":"SectionHeader0","AccessoryType":"None","UseTopPadding":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/ch/Services/myApp.service","EntitySet":"Header_table"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"Caption":"No record found!","FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[]},"Title":"{doc_id}","Description":"{invitationId}","PreserveIconStackSpacing":false,"AccessoryType":"DisclosureIndicator","Tags":[],"AvatarStack":{"Avatars":[{"Image":"/ch/Services/myApp.service/{@odata.readLink}/content"}],"ImageIsCircular":false,"ImageHasBorder":false},"AvatarGrid":{"ImageIsCircular":true},"OnPress":"/ch/Actions/myApp/Attachments_table/NavToAttachments_table_Detail.action","Selected":false},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"HighlightSelectedItem":false}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."}}],"DesignTimeTarget":{"Service":"/ch/Services/myApp.service","EntitySet":"Header_table"},"_Type":"Page","_Name":"Attachments_table_List","Caption":"Attachments_table","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"","SystemItem":"Add","Position":"Right","IsIconCircular":false,"OnPress":"/ch/Actions/myApp/Attachments_table/NavToAttachments_table_Create.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/Application.app":
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
/***/ ((module) => {

module.exports = {"_Name":"ch","Version":"/ch/Globals/Application/AppDefinition_Version.global","MainPage":"/ch/Pages/Main.page","OnLaunch":"/ch/Rules/Service/Initialize.js","OnWillUpdate":"/ch/Rules/Application/OnWillUpdate.js","OnDidUpdate":"/ch/Rules/Service/Initialize.js","Styles":"/ch/Styles/Styles.less","Localization":"/ch/i18n/i18n.properties","_SchemaVersion":"24.4","StyleSheets":{"Styles":{"css":"/ch/Styles/Styles.css","ios":"/ch/Styles/Styles.nss","android":"/ch/Styles/Styles.json"}}}

/***/ }),

/***/ "./build.definitions/ch/Actions/Application/AppUpdate.action":
/*!*******************************************************************!*\
  !*** ./build.definitions/ch/Actions/Application/AppUpdate.action ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ApplicationUpdate","ActionResult":{"_Name":"AppUpdate"},"OnFailure":"/ch/Rules/Application/AppUpdateFailure.js","OnSuccess":"/ch/Rules/Application/AppUpdateSuccess.js"}

/***/ }),

/***/ "./build.definitions/ch/Actions/Application/AppUpdateFailureMessage.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/ch/Actions/Application/AppUpdateFailureMessage.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to update application - {#ActionResults:AppUpdate/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/ch/Actions/Application/AppUpdateProgressBanner.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/ch/Actions/Application/AppUpdateProgressBanner.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionTimeout":3,"Message":"Checking for Updates...","OnSuccess":"/ch/Actions/Application/AppUpdate.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/ch/Actions/Application/AppUpdateSuccessMessage.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/ch/Actions/Application/AppUpdateSuccessMessage.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Update application complete","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/ch/Actions/Application/Logout.action":
/*!****************************************************************!*\
  !*** ./build.definitions/ch/Actions/Application/Logout.action ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":true}

/***/ }),

/***/ "./build.definitions/ch/Actions/Application/NavToAbout.action":
/*!********************************************************************!*\
  !*** ./build.definitions/ch/Actions/Application/NavToAbout.action ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/ch/Pages/Application/About.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/ch/Actions/Application/NavToActivityLog.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/ch/Actions/Application/NavToActivityLog.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/ch/Pages/Application/UserActivityLog.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/ch/Actions/Application/NavToSupport.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/ch/Actions/Application/NavToSupport.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"NavigationType":"Cross","PageToOpen":"/ch/Pages/Application/Support.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/ch/Actions/Application/OnWillUpdate.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/ch/Actions/Application/OnWillUpdate.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"A new version of the application is now ready to apply. Do you want to update to this version?","Title":"New Version Available!","OKCaption":"Now","CancelCaption":"Later","ActionResult":{"_Name":"OnWillUpdate"}}

/***/ }),

/***/ "./build.definitions/ch/Actions/Application/Reset.action":
/*!***************************************************************!*\
  !*** ./build.definitions/ch/Actions/Application/Reset.action ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":false}

/***/ }),

/***/ "./build.definitions/ch/Actions/Application/ResetMessage.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/ch/Actions/Application/ResetMessage.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"This action will remove all data and return to the Welcome screen. Any local data will be lost. Are you sure you want to continue?","Title":"Reset","OKCaption":"Yes","OnOK":"/ch/Rules/Application/ResetAppSettingsAndLogout.js","CancelCaption":"No"}

/***/ }),

/***/ "./build.definitions/ch/Actions/Application/UserMenuPopover.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/ch/Actions/Application/UserMenuPopover.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Enabled":true,"Icon":"sap-icon://synchronize","OnPress":"/ch/Actions/myApp/Service/SyncStartedMessage.action","Title":"Sync Changes","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://headset","OnPress":"/ch/Actions/Application/NavToSupport.action","Title":"Support","Visible":true},{"Enabled":true,"Icon":"sap-icon://refresh","OnPress":"/ch/Actions/Application/AppUpdateProgressBanner.action","Title":"Check for Updates","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://hint","OnPress":"/ch/Actions/Application/NavToAbout.action","Title":"About","Visible":true},{"Enabled":true,"Icon":"sap-icon://reset","OnPress":"/ch/Actions/Application/ResetMessage.action","Title":"Reset","Visible":true},{"Enabled":true,"Icon":"sap-icon://log","OnPress":"/ch/Actions/Application/Logout.action","Title":"Logout","Visible":"/ch/Rules/Application/ClientIsMultiUserMode.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/ch/Actions/CloseModalPage_Cancel.action":
/*!*******************************************************************!*\
  !*** ./build.definitions/ch/Actions/CloseModalPage_Cancel.action ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/ch/Actions/CloseModalPage_Complete.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/ch/Actions/CloseModalPage_Complete.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/ch/Actions/ClosePage.action":
/*!*******************************************************!*\
  !*** ./build.definitions/ch/Actions/ClosePage.action ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/ch/Actions/CreateEntityFailureMessage.action":
/*!************************************************************************!*\
  !*** ./build.definitions/ch/Actions/CreateEntityFailureMessage.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Create entity failure - {#ActionResults:create/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/ch/Actions/CreateEntitySuccessMessage.action":
/*!************************************************************************!*\
  !*** ./build.definitions/ch/Actions/CreateEntitySuccessMessage.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity created","IsIconHidden":true,"OnSuccess":"/ch/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/ch/Actions/DeleteConfirmation.action":
/*!****************************************************************!*\
  !*** ./build.definitions/ch/Actions/DeleteConfirmation.action ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"Delete current entity?","Title":"Confirmation","OKCaption":"OK","CancelCaption":"Cancel","ActionResult":{"_Name":"DeleteConfirmation"}}

/***/ }),

/***/ "./build.definitions/ch/Actions/DeleteEntityFailureMessage.action":
/*!************************************************************************!*\
  !*** ./build.definitions/ch/Actions/DeleteEntityFailureMessage.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Delete entity failure - {#ActionResults:delete/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/ch/Actions/DeleteEntitySuccessMessage.action":
/*!************************************************************************!*\
  !*** ./build.definitions/ch/Actions/DeleteEntitySuccessMessage.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity deleted","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/ch/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/ch/Actions/ErrorArchive/ErrorArchive_SyncFailure.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/ch/Actions/ErrorArchive/ErrorArchive_SyncFailure.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","Message":"Upload failed!","Duration":0,"Animated":false,"OnActionLabelPress":"/ch/Actions/ErrorArchive/NavToErrorArchive_List.action","ActionLabel":"View Errors"}

/***/ }),

/***/ "./build.definitions/ch/Actions/ErrorArchive/NavToErrorArchive_Detail.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/ch/Actions/ErrorArchive/NavToErrorArchive_Detail.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/ch/Pages/ErrorArchive/ErrorArchive_Detail.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/ch/Actions/ErrorArchive/NavToErrorArchive_List.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/ch/Actions/ErrorArchive/NavToErrorArchive_List.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/ch/Pages/ErrorArchive/ErrorArchive_List.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/ch/Actions/GenericBannerMessage.action":
/*!******************************************************************!*\
  !*** ./build.definitions/ch/Actions/GenericBannerMessage.action ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","ActionResult":{"_Name":"GenericBannerMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/ch/Actions/GenericMessageBox.action":
/*!***************************************************************!*\
  !*** ./build.definitions/ch/Actions/GenericMessageBox.action ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"GenericMessageBox"},"Message":"Message","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/ch/Actions/GenericNavigation.action":
/*!***************************************************************!*\
  !*** ./build.definitions/ch/Actions/GenericNavigation.action ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"GenericNavigation"},"PageToOpen":"/ch/Pages/Main.page"}

/***/ }),

/***/ "./build.definitions/ch/Actions/GenericToastMessage.action":
/*!*****************************************************************!*\
  !*** ./build.definitions/ch/Actions/GenericToastMessage.action ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ToastMessage","ActionResult":{"_Name":"GenericToastMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/ch/Actions/Logging/LogUploadFailure.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/ch/Actions/Logging/LogUploadFailure.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Uploading log file failed with error: {#ActionResults:UploadLog/error}","OKCaption":"OK","Title":"Log Upload Failed","_Type":"Action.Type.Message"}

/***/ }),

/***/ "./build.definitions/ch/Actions/Logging/LogUploadSuccessful.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/ch/Actions/Logging/LogUploadSuccessful.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":3,"IsIconHidden":false,"MaxNumberOfLines":1,"Message":"Log File Uploaded","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/ch/Actions/Logging/UploadLog.action":
/*!***************************************************************!*\
  !*** ./build.definitions/ch/Actions/Logging/UploadLog.action ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = {"ActionResult":{"_Name":"UploadLog"},"ActivityIndicatorText":"Uploading...","OnFailure":"/ch/Actions/Logging/LogUploadFailure.action","OnSuccess":"/ch/Actions/Logging/LogUploadSuccessful.action","ShowActivityIndicator":false,"_Type":"Action.Type.Logger.Upload"}

/***/ }),

/***/ "./build.definitions/ch/Actions/Logging/UploadLogProgress.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/ch/Actions/Logging/UploadLogProgress.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionMessage":"Logs Uploaded","CompletionTimeout":2,"Message":"Uploading Log Files...","OnSuccess":"/ch/Actions/Logging/UploadLog.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/ch/Actions/UpdateEntityFailureMessage.action":
/*!************************************************************************!*\
  !*** ./build.definitions/ch/Actions/UpdateEntityFailureMessage.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Update entity failure - {#ActionResults:update/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/ch/Actions/UpdateEntitySuccessMessage.action":
/*!************************************************************************!*\
  !*** ./build.definitions/ch/Actions/UpdateEntitySuccessMessage.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity updated","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/ch/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/ch/Actions/UploadStreamFailureMessage.action":
/*!************************************************************************!*\
  !*** ./build.definitions/ch/Actions/UploadStreamFailureMessage.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Upload stream failure - {#ActionResults:uploadstream/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/ch/Actions/UploadStreamSuccessMessage.action":
/*!************************************************************************!*\
  !*** ./build.definitions/ch/Actions/UploadStreamSuccessMessage.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Stream uploaded","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/ch/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/ch/Actions/myApp/Attachments_table/Attachments_table_CreateEntity.action":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/ch/Actions/myApp/Attachments_table/Attachments_table_CreateEntity.action ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/ch/Actions/CreateEntityFailureMessage.action","OnSuccess":"/ch/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#Value","invitationId":"#Control:invitationId/#SelectedValue","mediaType":"#Control:mediaType/#Value","fileName":"#Control:fileName/#Value","size":"#Control:size/#Value","url":"#Control:url/#Value"},"Target":{"EntitySet":"Attachments_table","Service":"/ch/Services/myApp.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/ch/Actions/myApp/Attachments_table/Attachments_table_DeleteEntity.action":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/ch/Actions/myApp/Attachments_table/Attachments_table_DeleteEntity.action ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Attachments_table","Service":"/ch/Services/myApp.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/ch/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/ch/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/ch/Actions/myApp/Attachments_table/Attachments_table_DetailPopover.action":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/ch/Actions/myApp/Attachments_table/Attachments_table_DetailPopover.action ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Title":"Open Document","OnPress":"/ch/Actions/myApp/Attachments_table/Attachments_table_OpenDocument.action"},{"Title":"Delete","OnPress":"/ch/Rules/myApp/Attachments_table/Attachments_table_DeleteConfirmation.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/ch/Actions/myApp/Attachments_table/Attachments_table_OpenDocument.action":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/ch/Actions/myApp/Attachments_table/Attachments_table_OpenDocument.action ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.OpenDocument","Path":"/ch/Services/myApp.service/{@odata.readLink}/content","MimeType":"image/jpeg"}

/***/ }),

/***/ "./build.definitions/ch/Actions/myApp/Attachments_table/Attachments_table_UpdateEntity.action":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/ch/Actions/myApp/Attachments_table/Attachments_table_UpdateEntity.action ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Attachments_table","Service":"/ch/Services/myApp.service","ReadLink":"{@odata.readLink}"},"Properties":{"doc_id":"#Control:doc_id/#Value","invitationId":"#Control:invitationId/#SelectedValue","mediaType":"#Control:mediaType/#Value","fileName":"#Control:fileName/#Value","size":"#Control:size/#Value","url":"#Control:url/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/ch/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/ch/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/ch/Actions/myApp/Attachments_table/Attachments_table_UploadStream.action":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/ch/Actions/myApp/Attachments_table/Attachments_table_UploadStream.action ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UploadStream","Target":{"Service":"/ch/Services/myApp.service","EntitySet":"Attachments_table","ReadLink":"{@odata.readLink}"},"Properties":{"content":"#Control:content/#Value"},"ShowActivityIndicator":true,"ActionResult":{"_Name":"uploadstream"},"OnSuccess":"/ch/Actions/UploadStreamSuccessMessage.action","OnFailure":"/ch/Actions/UploadStreamFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/ch/Actions/myApp/Attachments_table/NavToAttachments_table_Create.action":
/*!***************************************************************************************************!*\
  !*** ./build.definitions/ch/Actions/myApp/Attachments_table/NavToAttachments_table_Create.action ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/ch/Pages/myApp_Attachments_table/Attachments_table_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/ch/Actions/myApp/Attachments_table/NavToAttachments_table_Detail.action":
/*!***************************************************************************************************!*\
  !*** ./build.definitions/ch/Actions/myApp/Attachments_table/NavToAttachments_table_Detail.action ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/ch/Pages/myApp_Attachments_table/Attachments_table_Detail.page"}

/***/ }),

/***/ "./build.definitions/ch/Actions/myApp/Attachments_table/NavToAttachments_table_Edit.action":
/*!*************************************************************************************************!*\
  !*** ./build.definitions/ch/Actions/myApp/Attachments_table/NavToAttachments_table_Edit.action ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/ch/Pages/myApp_Attachments_table/Attachments_table_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/ch/Actions/myApp/Attachments_table/NavToAttachments_table_List.action":
/*!*************************************************************************************************!*\
  !*** ./build.definitions/ch/Actions/myApp/Attachments_table/NavToAttachments_table_List.action ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/ch/Pages/myApp_Attachments_table/Attachments_table_List.page"}

/***/ }),

/***/ "./build.definitions/ch/Actions/myApp/Service/CloseOffline.action":
/*!************************************************************************!*\
  !*** ./build.definitions/ch/Actions/myApp/Service/CloseOffline.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.OfflineOData.Close","Service":"/ch/Services/myApp.service","Force":true,"ActionResult":{"_Name":"close"},"OnSuccess":"/ch/Actions/myApp/Service/CloseOfflineSuccessMessage.action","OnFailure":"/ch/Actions/myApp/Service/CloseOfflineFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/ch/Actions/myApp/Service/CloseOfflineFailureMessage.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/ch/Actions/myApp/Service/CloseOfflineFailureMessage.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failure closing data service - {#ActionResults:close/error}","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/ch/Actions/myApp/Service/CloseOfflineSuccessMessage.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/ch/Actions/myApp/Service/CloseOfflineSuccessMessage.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Data service closed successfully","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/ch/Actions/myApp/Service/DownloadOffline.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/ch/Actions/myApp/Service/DownloadOffline.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/ch/Services/myApp.service","DefiningRequests":[{"Name":"Attachments_table","Query":"Attachments_table"}],"_Type":"Action.Type.OfflineOData.Download","ActionResult":{"_Name":"sync"},"OnFailure":"/ch/Actions/myApp/Service/SyncFailureMessage.action","OnSuccess":"/ch/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js"}

/***/ }),

/***/ "./build.definitions/ch/Actions/myApp/Service/DownloadStartedMessage.action":
/*!**********************************************************************************!*\
  !*** ./build.definitions/ch/Actions/myApp/Service/DownloadStartedMessage.action ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Download in progress...","CompletionMessage":"Download Successful","CompletionTimeout":7,"OnSuccess":"/ch/Actions/myApp/Service/DownloadOffline.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/ch/Actions/myApp/Service/InitializeOffline.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/ch/Actions/myApp/Service/InitializeOffline.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/ch/Services/myApp.service","DefiningRequests":[{"Name":"Attachments_table","Query":"Attachments_table"}],"_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"ActivityIndicatorText":"Downloading...","ActionResult":{"_Name":"init"},"OnFailure":"/ch/Actions/myApp/Service/InitializeOfflineFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/ch/Actions/myApp/Service/InitializeOfflineFailureMessage.action":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/ch/Actions/myApp/Service/InitializeOfflineFailureMessage.action ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to initialize application data service - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/ch/Actions/myApp/Service/SyncFailureMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/ch/Actions/myApp/Service/SyncFailureMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Sync offline data service failure - {#ActionResults:sync/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/ch/Actions/myApp/Service/SyncStartedMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/ch/Actions/myApp/Service/SyncStartedMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Upload in progress...","CompletionMessage":"Sync completed","CompletionTimeout":7,"OnSuccess":"/ch/Actions/myApp/Service/UploadOffline.action","OnFailure":"/ch/Actions/myApp/Service/SyncFailureMessage.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/ch/Actions/myApp/Service/UploadOffline.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/ch/Actions/myApp/Service/UploadOffline.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/ch/Services/myApp.service","_Type":"Action.Type.OfflineOData.Upload","ActionResult":{"_Name":"sync"},"OnSuccess":"/ch/Actions/myApp/Service/DownloadStartedMessage.action","OnFailure":"/ch/Actions/myApp/Service/SyncFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/ch/Globals/Application/AppDefinition_Version.global":
/*!*******************************************************************************!*\
  !*** ./build.definitions/ch/Globals/Application/AppDefinition_Version.global ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ "./build.definitions/ch/Globals/Application/ApplicationName.global":
/*!*************************************************************************!*\
  !*** ./build.definitions/ch/Globals/Application/ApplicationName.global ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"MDK App","_Type":"String"}

/***/ }),

/***/ "./build.definitions/ch/Globals/Application/SupportEmail.global":
/*!**********************************************************************!*\
  !*** ./build.definitions/ch/Globals/Application/SupportEmail.global ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"Value":"support@mycompany.com","_Type":"String"}

/***/ }),

/***/ "./build.definitions/ch/Globals/Application/SupportPhone.global":
/*!**********************************************************************!*\
  !*** ./build.definitions/ch/Globals/Application/SupportPhone.global ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1-800-677-7271","_Type":"String"}

/***/ }),

/***/ "./build.definitions/ch/Services/myApp.service":
/*!*****************************************************!*\
  !*** ./build.definitions/ch/Services/myApp.service ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"myApp","OfflineEnabled":true,"LanguageURLParam":"","OnlineOptions":{},"OfflineOptions":{"StoreParameters":{}},"PathSuffix":"","SourceType":"Mobile","ServiceUrl":""}

/***/ }),

/***/ "./build.definitions/version.mdkbundlerversion":
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "1.1\n";

/***/ }),

/***/ "./build.definitions/ch/Styles/Styles.json":
/*!*************************************************!*\
  !*** ./build.definitions/ch/Styles/Styles.json ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "./build.definitions/ch/jsconfig.json":
/*!********************************************!*\
  !*** ./build.definitions/ch/jsconfig.json ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ }),

/***/ "./build.definitions/tsconfig.json":
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"compilerOptions":{"module":"esnext","target":"es2019","moduleResolution":"node","lib":["esnext","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":".","plugins":[{"transform":"@nativescript/webpack/dist/transformers/NativeClass","type":"raw"}]},"exclude":["node_modules"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./build.definitions/application-index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=bundle.js.map