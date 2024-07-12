/**
 * Describe this function...
 * @param {IClientAPI} context
 */
export default function CheckForSyncError(context) {
    context.count('/ch/Services/myApp.service', 'ErrorArchive', '').then(errorCount => {
        if (errorCount > 0) {
            return context.getPageProxy().executeAction('/ch/Actions/ErrorArchive/ErrorArchive_SyncFailure.action').then(function() {
                return Promise.reject(false);
            });
        }
    });
}