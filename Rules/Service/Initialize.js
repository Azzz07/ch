export default function Initialize(context) {

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