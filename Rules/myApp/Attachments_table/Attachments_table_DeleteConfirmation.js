/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function DeleteConfirmation(clientAPI) {
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