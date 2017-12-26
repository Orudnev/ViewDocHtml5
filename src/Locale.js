import React, { Component } from 'react';

/*
function Locale(res)
{
    return localeEng()[res];
}
*/

var locale={
	"about":"About DWC mobile",
	"attachmentPaneTitle":"Attachments",
	"attachmentName":"Atachment name",
    "btnCancel": "Cancel",
    "btnOK": "OK",
	"clickForDetail":"detail description",	
    "constErrSessionExpired":"java.lang.Exception: Your session is expired.",
    "ddtree_DF":"Storage",
    "ddtree_WF":"Workflow",
    "ddtree_AllAreas": "Areas",
    "ddtree_AllVolumes": "Volumes",
    "ddtree_QST":"Questionnaires",
    "ddtree_loading":"loading...",
    "ddtree_menuCmd_Open":"Open",
    "ddtreeNodeType_Area": "Area",
    "ddtreeNodeType_Volume": "Volume",
    "ddtreeNodeTypePosition_Root": "Root",
    "ddtreeNodeTypePosition_Terminal": "Terminal",
    "ddtreeNodeTypePosition_NonTerminal": "Non-Terminal",
	"dgrid_menuCmd_AddDocument":"Add document",
	"dgrid_menuCmd_EditMetadata":"Edit volume fields",
	"dgrid_menuCmd_EmailSend":"Send via e-mail",
	"dgrid_menuCmd_AddAttachment":"Add attachment",
	"dgrid_menuCmd_DeleteDocument":"Delete selected documents",
	"dgrid_menuCmd_DeleteAttachment":"Delete selected attachments",
    "dgrid_menuCmd_ViewDocument":"View document",
	"dgrid_menuCmd_Forms":"Forms",
	"dgrid_menuCmd_ViewAttachment":"View attachment",
	"dgrid_menuCmd_ViewRelatedDocs":"View related documents",
	"dgrid_menuCmd_ViewSendingHistory":"View sending history",
	"dgrid_menuCmd_SaveSelected":"Save selected",
	"dgrid_menuCmd_Search":"Search",
	"dgrid_menuCmd_Autofilter":"Auto filter",
	"dgrid_menuCmd_ShowAttachments":"Show attachments",
	"disconnect":"Disconnect",
	"documentsFound":"Documents found",
	"downloading":"Downloading...",
	"errEmailRecipientAddressIsEmpty":"Recipient address is empty",
	"errInputError":"Input error",
    "errMesNoDsnForCurrUser":"There are no DSNs found for user {0} or server is down",
	"errMesDocumentWasNotSelected":"Document was not selected",
	"errFieldOrVariableIsNotFound":"Field {0} is not found",
	"errFormat_IsNotInteger":"Value '{0}' cannot be converted into integer",
	"errFormat_IsEmpty":"This field must not be empty",
	"srrSmtpSettingsEmpty":"Smtp settings are empty or incorrect, You should properly configure SMTP settings: Main menu->Settings->SMTP Settings",
	"email_selectSendingType":"Select sending type",
	"email_To":"To",
	"email_Type_Simple":"Simple sending",
	"email_Type_Massive":"Massive sending",
	"email_Type_PEC":"PEC sending",
	"email_Cc":"Cc",
	"email_Bcc":"Bcc",
	"email_Subject":"Subject",
	"email_MessageBody":"Message text",
	"email_placeHolder":"e-mail address",
	"email_attMode":"Attachment mode",
	"email_attMode_zip":"Attach as a single ZIP archive",
	"email_attMode_sepFiles":"Attach each file separately",
	"email_okResult":"Documents were sent to SMTP Server",
	"email_SelObjects":"Select the objects to send",
	"email_SelObjects_mainDoc":"Main document",
	"email_SelObjects_attachments":"Attachments",
	"email_NameGenerationRule":"Define names generation rule",
	"email_wzrdPage1_Title":"Preparing",
	"email_wzrdPage2_Title":"Send",
	"email_wzrdPage3_Title":"Result",
    "generalSettings":"General settings",
	"globalSearch":"Global search",
	"includeAttachments":"Include attachments",
    "lbldataGridPageSize":"Data grid page size",
    "loginPage_poweredBy": "powered by CompEd Software Design",
    "loginPage_Server": "Server:",
    "loginPage_Client": "Client:",
    "loginPage_ConnectToServer": "Connect to Server",
    "loginPage_UserName": "User name",
    "loginPage_Password": "Password",
    "loginPage_RememberCredentials": "Remember credentials",
	"massiveSnd_composeSubjectAndBody":"Compose the subject and body",
	"msgSmtpTestingMessageOK":"Testing message is sent successfully",
	"msgNofMDocumentsAreSent":"{0} of {1} documents are sent",
	"msgPecSendingBriefResult":"{0} of {1} documents are passed to sending queue",
	"Name":"Name",
	"hostAddress":"Host address",
	"port":"Port",
	"SaveSelectedAs_Zip":"as single ZIP archive",
	"SaveSelectedAs_Pdf":"in a single PDF",
	"searchResult":"Search result",
    "SelectDsn_Title": "Select DD",
    "SelectDsn_ColHeader": "Data Source Name",
	"selectDfmForm":"Select form",
	"selectHistoryType":"Select history type",
	"selectRelation":"Select relation",
	"sendingHistoryFPA":"FPA history",
	"sendingHistoryPEC":"PEC history",
	"settings":"Settings",
	"smtpSettings":"SMTP settings",
	"smtpSecurityLayer":"Security layer",
	"smtpSecurityLayer_None":"None",
	"smtpSecurityLayer_SSL":"SSL",
	"smtpSecurityLayer_TLS":"TLS",
	"smtpAuthentication":"Authentication",
	"smtpAuthentication_Default":"Default",
	"smtpAuthentication_Login":"Login",
	"smtpAuthentication_Plain":"Plain",
	"smtpAuthentication_DigestMD5":"Digest MD5",
	"smtpAuthentication_NTLM":"NTLM",
	"smtpAuthentication_Auto":"Auto",
	"smtpAuthentication_None":"None",
	"smtpSenderAddress":"Sender address",
	"smtpPersonal":"Personal",
	"smtpRecipientAddress":"Recipient address",
	"smtpUserName":"User Name (login)",
	"smtpPassword":"Password",
	"smtpSendTestingMessage":"Send a testing message",
	"smtpSendTestingMessageSubject":"DWCM testing message",
	"smtpPhold_HostAddress":"smtp server address",
	"smtpPhold_SenderAddress":"sender@domain.com",
	"smtpPhold_Personal":"Name of the message author",
	"smtpPhold_RecipientAddress":"recipient@domain.com",
	"timeout":"Timeout",
	"title":"Title",
	"view":"View",
	"viewXml":"View (XML)",
	"volumeName":"Volume Name",
    "volumeType_Standard":"Standard",
    "volumeType_StandardClosed":"Standard,Closed",
    "volumeType_StandardConserved":"Standard,Conserved",
    "volumeType_External":"External",
    "volumeType_ExternalClosed":"External,Closed",
    "volumeType_ExternalConserved":"External,Conserved",
    "volumeType_Virtual":"Virtual",
    "volumeTab_Summary":"Summary",
    "volumeTab_AllDocuments":"All Documents",
	"wait":"Wait ...",
	"wrnSomeOfSelectedDocsAreNotPDF":"At least one of the selected documents is not a PDF. Only PDF documents can be concatenated into a single document"

};       


export default locale;