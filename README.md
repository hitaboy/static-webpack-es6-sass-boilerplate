# Boilerplate for static web with webpack, es6 and sass

static-webpack-es6-sass-boilerplate

## Getting Started

This is a bloierplate meant to be used for simple webs or fast prototypes

### Prerequisites

Be able to execute php from the terminal to be able to start a local server.
Node.js and npm or yarn to be able to install the required node_modules

### Installing

Execute npm install or yarn to install required node_modules
```
sudo npm install
```

```
yarn
```

Start the local php server
```
php -S localhost:8000
```

Start webpack
```
sudo npm run start
```

## Configuring

Now you can configure browsersync in webpack.config.js to use the prefered domain or let it as localhost.

## Structure

File/Folder | language | utility
--- | --- | ---
*index.php* | `php` | **main template**
*templates/* | `folder` | **folder for template**
*templates/header.php* | `php` | **header template**
*templates/footer.php* | `php` | **footer template**
*static/* | `folder` | **folder for static content**
*static/fonts* | `folder` | **folder for fonts**
*static/img* | `folder` | **folder for images**
*src/* | `folder` | **folder for frontend sources**
*src/scss/* | `folder` | **folder for sass sources**
*src/js/* | `folder` | **folder for es6 javascript sources**
*dist/* | `folder` | **folder for css and js bundles**
*node_modules/* | `folder` | **folder for the required node modules **

## Authors

* **Pere Esteve** - *Concept and code* - [hitaboy](https://github.com/hitaboy)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
