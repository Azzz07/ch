export default function CreateEntity(clientAPI) {
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