# FxFrameWork

Pure CSS Flex-Layout based on javascript [Angular Flex-Layout](https://github.com/angular/flex-layout).
Idea is to use pure CSS solution in [Angular](https://angular.io) application where is not needed to use JavaScript version of Angular Flex-Layout or in place with big data to improve performance.

## Demo

Example of all available CSS Classes and how to use them, you can find on this [demo website](https://www.striky.sk/fx-framework).  

## Install

`npm i fx-framework --save`

## Usage

#### SCSS

If you are not using already package [sass-mq](https://github.com/sass-mq/sass-mq), then add to your `.scss` file:

`@import 'path_to_your_node_modules/fx-framework/src/fx-framework'`

If you already using package [sass-mq](https://github.com/sass-mq/sass-mq), then use FxFramework directly:

`@import 'path_to_your_node_modules/fx-framework/src/core/fx-framework`

#### CSS

For already compiled CSS you can find it in:

`path_to_your_node_modules/fx-framework/dist/fx-framework.css`;

## Setup

#### Breakpoints

Default breakpoints are defined as: 

```
$fx-breakpoints: (
  xs: 0,
  sm: 600px,
  md: 960px,
  lg: 1280px,
  xl: 1920px
) !default;
```

For override it, just redefine `$fx-breakpoints` variable with your own map of breakpoints before you imported `fx-framework` in your `scss` file.

#### Media-Queries

Fx-Framework using dependency of [sass-mq](https://github.com/sass-mq/sass-mq). For setup it, check documentation on their GitHub repository.

## Changelog

For more information check CHANGELOG.md on this repository. 

## Contributing

There are not any major rules how to be an contributor. If you think that your feature/bug fix/contribution might be worthwhile, describe what you did and don't hesitate to create Pull Request. 

#### Generate CSS File

After you did some changes on `scss` files, please, don't forget to re-generate CSS File. For that you can run simply Gulp task in your project path:

`gulp --production` 


## License

MIT

## Author

[striky](https://www.striky.sk)

