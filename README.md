
<p align="center">
    <img src="logo.png" width="160">
</p><br><br>

# Supernova-2

Supernova-2 works as public informer meant to keep people safe wherever they go.

`Under heavy development`

# Index

1. [Introduction](#introduction)
    1. [Features](#feature)
2. [Usage](#usage)
3. [Pre Requisites](#pre-requisites)
4. [Development](#development)
    1. [File Structure](#file-structure)
    3. [Environment](#environment)
    2. [Build](#build)
5. [Contribution](#contribution)
    1. [Community](#community)
    2. [Workflow](#workflow)
    3. [Best Practice](#best-practice)
6. [Credit](#credit)
7. [License](#license)

## Introduction

Supernova-2 is meant to analyze and display data to improve public understanding of our home planet to be safe.

### Feature


#### What are the safety parameters Supernova will track?

- **Health Issues**<br>
    You can track possible health issues all over the world or in your area. Following are some things you can track under it.
    - Mosquito occurrence
    - Zika virus fever
    - AIDS/HIV areas.
    - Other Diseases

- **Environmental Issues**<br>
    Knowing about the environmental factors, which can affect your health can also be analyzed. Following are some things you can track under it.
    - UV Index
    - Weather
    - Cloudiness
    - Humidity
    - temperature
    - wind speed
    - wind angle

- **Natural disaster** <br>
    You can see the forecast of following:
    - Earthquake
    - Cyclone
    - Tsunami
    - Flood
    - Hurricanes/Tornadoes/
    - Thunderstorms
    - Volcanic eruptions
    - Droughts

- **Other Information** <br>
    - Crime Rate
    - Theft Rate
    - other usefull information

#### How will supernova help me in an emergency?

- **Alert Your Family** <br>
    Once click SMS/Email alert to your families. This alert will send your location and other detials, which will make it easy to help you.

- **Help Near Me** <br>
    You can look for following things near you:
    - Police Stations
    - Hospitals
    - Public Toilet
    - Medical Stores
    - Fire Station

#### What other features Supernova have?

- **Accident Detection** <br>
    Using information from gyroscope, accelerometer, linear acceleration, rotation vetor and other sensors, Supernova can detect accidents, and can automatically inform your emergency contact about it.

#### How is it different from other apps?

    Supernova use graphics/images/graphs etc to display the information, which makes it easy to absorb the information. It also use AI and ML for various features. Supernova also serves as a public informer, so you keep getting important feeds on your dashboard.


## Usage

To use this app, you can download the Android APK from [here]().

## Pre Requisites

You should also be familiar with following to get started.

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
- [TypeScript](https://www.typescriptlang.org/)
- [SCSS](http://sass-lang.com/)
- Java (Optional)


## Development

### File Structure

Basic understanding of the file structure is required to do development, here is a level 2 file structure of this project

> `Supernova-2` is the root folder, and `src` is where our app lives.

```

Supernova-2
|--.angular.json
|--config.xml
|--ionic.config.json
|--LICENSE
|--logo.png
|--package-lock.json
|--package.json
|--README.md
|--tsconfig.json
|--tslint.json
|--node_modules/...
|--platforms/...
|--plugins/...
|--resources/...
|--e2e
|   |--app.e2e-spec.ts
|   |--app.po.ts
|   |--tsconfig.e2e.json
|--src
    |--global.scss
    |--index.html
    |--karma.conf.js
    |--main.ts
    |--polyfills.ts
    |--test.ts
    |--tsconfig.app.json
    |--tsconfig.spec.json
    |--app
    |   |--hero-detail/...
    |   |--heroes/...
    |   |--messages/...
    |   |--top/...
    |   |
    |   |--app.component.css
    |   |--app.component.html
    |   |--app.component.spec.ts
    |   |--app.component.ts
    |   |--app.module.ts
    |
    |--assets
    |   |--gitkeep
    |
    |--environments
    |   |--environment.prod.ts
    |   |--environment.ts
    |
    |--lib
    |   |--config.inc.ts
    |   |--hero.ts
    |   |--mock-heroes.ts
    |
    |--module
    |   |--app-routing.module.spec.ts
    |   |--app-routing.module.ts
    |
    |--service
    |   |--hero.service.spec.ts
    |   |--hero.service.ts
    |   |--message.service.spec.ts
    |   |--message.service.ts
    |
    |--style
        |--_base.scss
        |--_config.scss



```

**`src` folder**

File | Purpose |
-----|---------|
app/app.component.{ts,html,css,spec.ts} | Root components of what will become a tree of nested components, as the app grow.
app/app.module.ts | `root module` tells angular how to assemble the application.
assets/* | Place to put assets like images, gifs etc.
environments/* | This folder contains one file for each of your destination environments
lib/* | User defined libraries will be stored here.
service/* | Services used by components are defined here.
style/* | User defined style libraries will be stored here.
index.html | Main HTML page, CLI automatically adds all the required file, like js, css etc while building your app.
main.ts | Main entry point for your app
polyfills.ts | Polyfills help normalize different levels of support of the web standards in different browsers.
global.scss | Global style file.
test.ts | Main entry point for units tests.
tsconfig.{app\|spec}.json | TypeScript compiler configuration for the Angular app `tsconfig.app.json` and for the unit tests `tsconfig.spec.json`.
karma.conf.js       | Unit test configuration for the [Karma test](https://karma-runner.github.io) runner, used when running `ng test`.

**`root` folder**

File                | Purpose |
--------------------|---------|
e2e/                | It holds end-to-end tests.
node_modules/       | Folder for third party modules listed in `package.json`.
.editorconfig       | Simple configuration for your editor to make sure everyone that uses your project has the same basic configuration. Most editors support an .editorconfig file. See [Editor-Config](http://editorconfig.org) for more information.
.gitignore          | Git configuration to make sure autogenerated files are not commited to source control.
package.json        | `npm` configuration listing the third party packages your project uses. You can also add your own [custom scripts](https://docs.npmjs.com/misc/scripts) here.
README.md           | Basic documentation for your project.
tsconfig.json       | TypeScript compiler configuration for your IDE to pick up and give you helpful tooling.
tslint.json         | Linting configuration for [TSLint](https://palantir.github.io/tslint/) together with [Codelyzer](http://codelyzer.com/), used when running `ng lint`. Linting helps keep your code style consistent.

### Environment

To work on this repository, you need setup the following environment.

- [Node](https://nodejs.org) & [NPM](https://www.npmjs.com)

**Mac**

```console
brew install node
```

***Linux**

- On Debian, Ubuntu, Linux Mint:
```console
$ sudo apt-get install nodejs npm
```

- On Arch Linux
```console
$ sudo pacman -S nodejs npm
```

- On RHEL, CentOS
```console
$ sudo yum install epel-release
```

- On Fedora
```console
$ sudo dnf install nodejs npm
```

- [Angular](https://angularjs.org)

```console
$ npm install -g @angular/cli
```

- [Ionic](https://ionicframework.com) & - [Cordova](cordova.apache.org)

```console
$ sudo npm install -g cordova ionic
```

- [Android Studio](https://developer.android.com/studio/)
- [Gradle](https://gradle.org/)
- [Java](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

### Build

1. Clone the repository.

```console
$ git clone https://github.com/yogdaan/Supernova-2
$ cd Supernova-2
```

2. Run in browser.

```console
$ ionic serve
```

3. Build for android.

```console
$ ionic cordova build android
```

*Note*: You might want to set ANDROID_HOME in `.bash_profile`.

```
export ANDROID_HOME=/<installation location>/android-sdk-macosx
export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
```

`ionic cordova build android`


## Contribution

Your contributions are always welcome and appreciated. To keep your experience good, we suggest you read all the guidelines thoroughly, also take some time to understand the workflow for this project. Each contribution is expected to follow best practices and community guidelines. Following are the things you can do to contribute to Meilix

1. **Report a bug** <br>
If you think you have encountered a bug, and we should know about it, feel free to report it [here](https://github.com/yogdaan/Supernova-2/issues/new) and our community will take care of it.

2. **Request a feature** <br>
You can also request for a feature [here](https://github.com/yogdaan/Supernova-2/issues/new), and if the community feels it's viable, it will be picked for development.

3. **Create a pull request** <br>
It can't get better then this, your pull request will be really appreciated by the community. You can get started by picking up any open issues from [here](https://github.com/yogdaan/Supernova-2/issues) and make a pull request.

> If you are new to open-source, make sure to check read more about it [here](https://www.digitalocean.com/community/tutorial_series/an-introduction-to-open-source) and learn more about creating a pull request [here](https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github).

### Community

Supernova is project under Yogdaan.org, and it's community is involved in the development. To get in touch with the community, you can use the following communications channels.

**Gitter**: [https://gitter.im/yogdaan/Lobby](https://gitter.im/yogdaan/Lobby) <br>
**Github**: [https://github.com/yogdaan](https://github.com/yogdaan)

### Workflow

Supernova uses the agile methodology, so the version is frequently updated and development is really fast. It follow somewhat modified Git Flow branching methodology.

1. **`Master`** is the equivalent to the git-flow `develop` branch. It should be fully ready to be shipped and should be stable.

2. **`Production`** is the equivalent to the git-flow `master` branch. It represents the latest stable version of Supernova available.

3. **`FEATURE/NAME`** is where we work on the new features and other parts of meilix.

**Steps to create a pull request**

1. Make a PR to `master` or any other feature branch only. *`PR to production won't be accepted`*
2. Your code must meet all the best practices and guidelines, other wise it won't be accepted.
3. It must pass all CI tests.

After this, you changes will be **Squash and Merge** in `master` with a conventional commit message.

**Production Deployment**

1. Create a PR from `master` to `production`.
2. Wait for CI tests to pass.
3. **Merge** the PR.

**Why 'Squash and Merge' against `Master`?**

All commits from the PR will be added as a single new commit to `master`.

- It keeps the `master` clean: only commits that represent a complete feature of bugfix will be part of the history.
- Adding `#PR_Number` to the commit message allows to check that PR and dive into all the commit history without bringing all the noise into master.

**Why 'Merge' against `production`?**

- It doesn't create a new commit with a different hash, thus it keeps `master` and `production` with the same commit history.
- It allows to check exactly what was deployed and when.

Learn more about it [here](https://blogs.msdn.microsoft.com/devops/2016/03/15/squash-a-whole-new-way-to-merge-pull-requests/)


### Best Practice

**Commits**

- Make sure your commit message is crisp and clear, read more about it [here](https://chris.beams.io/posts/git-commit/)
- When refering to a issue in PR, use [special words](https://help.github.com/articles/closing-issues-using-keywords/) to automatically close the related issue.
- Keep each PR very short, which will make it easy to review.

**General**

- **Comments** <br>
    Comments are what's make the communication possible between programmers and developers, they we created for a single main reason, to make the code readable.
    <br><br>
    We need to comment our logic, reason and flow for making a algoritham/function in a app. we don't have to comment everything, but everything we is based out of our logic.

- **Documentation** <br>
    Documentations are the gates between code base and programmer/humans, they are decrease the time of understanding the code base and make the development process fast.
    <br><br>
    Documentation grow, as our code grow, continous addition is a must for documentation to stay relevent.

**SCSS and CSS**

- **Use hyphen(-) Delimiter**<Br>
It makes sheet more readable.

```scss
    //This is wrong
    .blackCar{}
    //This is best
    .black-car{}
```

- **BEM Scheme** <br>
**B**ody **E**lement **M**odifier(BEM) gives sense to the names, which is globally accepted. let's say we have a paper-car class, here car is body, it's parts are element and any change in its part is modifier. Following should be the best way to name it in **Style Sheet**.

```scss
    //This is how we name the body
    .paper-car{}

    //This is how we name the elements
    .paper-car_seat{}
    .paper-car_glass{}

    //This is how we name the modifier
    .paper-car_seat--blue{}
    .paper-car_seat--black{}
```

- **Style Sheet with Script File** <br>
Using different class and id name for Style Sheet and Script file is best, it avoids the conflict between them and gives better flow. Using "js-" as a prefix for naming the object is prefered, also avoid using keywords for naming objets, like using 'data' for a naming a object will create a conflict, since it is also used by javascript and JSON.

```html
    <div class="paper-car js-paper-car"></div>
```

## Credit

**Logo**

- Atom <div>Icon made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>Feel free to contribute.

## License

This project is currently licensed under GNU Lesser General Public License v3.0 (LGPL-3.0).
