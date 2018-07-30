'use strict';

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
    prompting() {
        // Have Yeoman greet the user.
        this.log(
            yosay(
                `Welcome to the smashing ${chalk.red(
                    'generator-custom-scaffold'
                )} generator!`
            )
        );

        const prompts = [
            {
                type: 'input',
                name: 'name',
                message: 'Your project name',
                // Defaults to the project's folder name if the input is skipped
                default: this.appname
            }
        ];

        return this.prompt(prompts).then(props => {
            // To access props later use this.props.someAnswer;
            this.props = props;
        });
    }

    writing() {
        this.fs.copyTpl(
            this.templatePath('_package.json'),
            this.destinationPath('package.json'),
            {
                name: this.props.name.includes(' ')
                    ? this.props.name.replace(' ', '-')
                    : this.props.name
            }
        );

        this.fs.copy(this.templatePath('_src'), this.destinationPath('src'));

        this.fs.copy(this.templatePath('.babelrc'), this.destinationPath('.babelrc'));

        this.fs.copy(
            this.templatePath('.editorconfig'),
            this.destinationPath('.editorconfig')
        );

        this.fs.copy(this.templatePath('.eslintrc'), this.destinationPath('.eslintrc'));

        this.fs.copy(this.templatePath('.gitignore'), this.destinationPath('.gitignore'));

        this.fs.copy(
            this.templatePath('webpack.config.js'),
            this.destinationPath('webpack.config.js')
        );

        this.fs.copy(
            this.templatePath('setupTests.js'),
            this.destinationPath('setupTests.js')
        );
    }

    install() {
        // This.installDependencies()
        this.installDependencies({
            // SkipInstall: options['skip-install'],
            bower: false
        });
    }
};
