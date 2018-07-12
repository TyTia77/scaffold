'use strict'

const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')

// module.exports = yeoman.generators.Base.extend({
//     prompting: function() {
//         var done = this.async()
//         this.prompt({
//             type: 'input',
//             name: 'name',
//             message: 'Your project name',
//             //Defaults to the project's folder name if the input is skipped
//             default: this.appname,
//         }, function(answers) {
//             this.props = answers
//             this.log(answers.name)
//             done()
//         }.bind(this))
//     },

//     writing: {
//       config: function () {
//               this.fs.copyTpl(
//                   this.templatePath('_package.json'),
//                   this.destinationPath('package.json'), {
//                       name: this.props.name
//                   }
//               )
//               // this.fs.copyTpl(
//               //     this.templatePath('_bower.json'),
//               //     this.destinationPath('bower.json'), {
//               //         name: this.props.name
//               //     }
//               // )
//               // this.fs.copy(
//               //   this.templatePath('bowerrc'),
//               //   this.destinationPath('.bowerrc')
//               // )
//         },

//         app: function() {
//           //Server file
//           this.fs.copy(
//             this.templatePath('_src'),
//             this.destinationPath('src'))
//         },

//     },

//     install: function(){
//       this.installDependencies();
//     }

// })

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the smashing ${chalk.red('generator-custom-scaffold')} generator!`)
    )

    const prompts = [
      {
        type: 'confirm',
        name: 'someAnswer',
        message: 'Would you like to enable this option?',
        default: true,
      },{
          type: 'input',
          name: 'name',
          message: 'Your project name',
          //Defaults to the project's folder name if the input is skipped
          default: this.appname,
      }
    ]

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    })
  }

  writing() {
    this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
    )

    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'), {
          name: this.props.name
      }
    )

    this.fs.copy(
      this.templatePath('_src'),
      this.destinationPath('src')
    )

  }

  install() {
    this.installDependencies()
  }
}
