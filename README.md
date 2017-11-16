# vscode-php-cs-fixer

This extension adds support for running `php-cs-fixer fix` on PHP files in Visual Studio Code.

## Requirements

[php-cs-fixer](https://github.com/FriendsOfPHP/PHP-CS-Fixer)

## Extension Settings

This extension contributes the following settings:

* `vscode-php-cs-fixer.toolPath`: The path to the php-cs-fixer tool
* `vscode-php-cs-fixer.useCache`: Use a cache file when fixing files (--using-cache)
* `vscode-php-cs-fixer.rules`: Rules to use when fixing files (--rules)
* `vscode-php-cs-fixer.fixOnSave`: Runs fix command on save
