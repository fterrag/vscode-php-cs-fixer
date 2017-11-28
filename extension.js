const vscode = require('vscode');
const path = require('path');
const cp = require('child_process');

function fixDocument(document) {
    if (document.languageId !== 'php') {
        return;
    }

    let toolPath = getConfig('toolPath');
    let filename = document.fileName;
    let args = ['fix'];
    let opts = { cwd: path.dirname(filename) };

    if (!toolPath) {
        toolPath = vscode.extensions.getExtension("fterrag.vscode-php-cs-fixer").extensionPath + '/php-cs-fixer';
    }

    if (!getConfig('useCache')) {
        args.push('--using-cache=no');
    }

    let config = getConfig('config');
    if (config) {
        args.push('--config=' + config)
    } else {
        let rules = getConfig('rules');
        if (rules) {
            args.push('--rules=' + rules);
        }
    }

    cp.execFile(toolPath, [...args, filename], opts, function (err) {
        if (err && err.code === 'ENOENT') {
            vscode.window.showErrorMessage('Unable to find the php-cs-fixer tool.');
            return;
        }

        if (err) {
            vscode.window.showErrorMessage('There was an error while running php-cs-fixer. Check the Developer Tools console for more information.');

            console.log(err);
            return;
        }

        document.save();
    });
}

function getConfig(key) {
    return vscode.workspace.getConfiguration('vscode-php-cs-fixer').get(key);
}

function activate(context) {
    context.subscriptions.push(vscode.commands.registerTextEditorCommand('vscode-php-cs-fixer.fix', function (textEditor) {
        fixDocument(textEditor.document);
    }));

    vscode.workspace.onDidSaveTextDocument(function (document) {
        if (!getConfig('fixOnSave')) {
            return;
        }

        fixDocument(document);
    });
}
exports.activate = activate;

function deactivate() {
}
exports.deactivate = deactivate;
