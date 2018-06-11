# vscode-php-cs-fixer

This extension adds support for running `php-cs-fixer fix` on PHP files in Visual Studio Code.

![demo](demo.gif)

## Getting Started

As long as PHP 5.6+ is installed on your system and in your PATH, the extension should work out of the box.

If you don't want to use the `php-cs-fixer` that's included with the extension, set the `vscode-php-cs-fixer.toolPath` setting to the path of `php-cs-fixer`.

## Extension Settings

This extension contributes the following settings:

* `vscode-php-cs-fixer.toolPath`: The path to the php-cs-fixer tool (default: "")
* `vscode-php-cs-fixer.useCache`: Use a cache file when fixing files (--using-cache) (default: false)
* `vscode-php-cs-fixer.allowRisky`: Determines whether risky rules are allowed (--allow-risky) (default: false)
* `vscode-php-cs-fixer.config`: Path to a .php_cs file (--config) (default: "")
* `vscode-php-cs-fixer.rules`: Rules to use when fixing files (--rules) (default: "@PSR1,@PSR2,@Symfony,-yoda_style")
* `vscode-php-cs-fixer.fixOnSave`: Runs fix command on save (default: true)
