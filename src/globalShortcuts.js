exports.init = function (wv) {
    var ipcRenderer = require('electron').ipcRenderer;
    ipcRenderer.on('global-shortcut', function (e, data) {
        var accelerator = data.accelerator;

        switch (accelerator) {
            case ('Cmd+Shift+Left'):
                wv.send('changeTime', -5);
                break;
            case ('Cmd+Shift+Right'):
                wv.send('changeTime', 5);
                break;
            case ('Cmd+Shift+l'):
                wv.send('changeTime', 15);
                break;
            case ('Cmd+Shift+j'):
                wv.send('changeTime', -15);
                break;
            case ('Cmd+Shift+y'):
                ipcRenderer.send('toggleWindow');
                break;
        }
    });
};
