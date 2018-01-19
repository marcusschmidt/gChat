var nativefier = require('nativefier').default;

// possible options, defaults unless specified otherwise
var options = {
    name: 'gChat', // will be inferred if not specified
    targetUrl: 'https://chat.google.com', // required
    platform: 'darwin', // defaults to the current system
    arch: 'x64', // defaults to the current system
    // version: '0.36.4',
    electronVersion: '1.7.10', // electron-version
    out: './dist/',
    overwrite: true,
    asar: true, // see conceal
    conceal: true,
    icon: './resources/icon.icns',
    counter: false,
    width: 1280,
    height: 800,
    showMenuBar: false,
    fastQuit: false,
    // userAgent: 'Mozilla ...', // will infer a default for your current system
    ignoreCertificate: false,
    ignoreGpuBlacklist: false,
    enableEs3Apis: false,
    insecure: false,
    honest: false,
    zoom: 1.0,
    singleInstance: true,
    // processEnvs: {
    //     "GOOGLE_API_KEY": "<your-google-api-key>"
    // }
};

nativefier(options, function(error, appPath) {
    if (error) {
        console.error(error);
        return;
    }
    console.log('App has been nativefied to', appPath);
});