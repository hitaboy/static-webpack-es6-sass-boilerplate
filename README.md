# Boilerplate for static web with webpack, es6 and sass

static-webpack-es6-sass-ejs-boilerplate

## Getting Started

This is a bloierplate meant to be used for simple webs or fast prototypes. It uses (ejs)[https://ejs.co/] (Embedded JavaScript templates) to be able to have partials and reuse templates. As a static boilerplate all ejs pages have to be declared in teh webpack.config.js. In the future I'm going to improve that to take al the ejs under app/views/pages/ folder.

### Prerequisites

Node.js and npm or yarn to be able to install the required node_modules

### Installing

Execute npm install or yarn to install required node_modules
```
sudo npm install
```
or
```
yarn
```

#### Start webpack for development
```
sudo npm run dev
```
Visit http://0.0.0.0:8080/ with browser reloading

#### Build the project
```
sudo npm run build
```
Upload all dist files to the production server


## Configuring

Now you can configure browsersync in webpack.config.js to use the prefered domain or let it as localhost.

## Structure

File/Folder | language | utility
--- | --- | ---
*index.php* | `php` | **main template**
*app/* | `folder` | **folder for frontend sources**
*app/styles/* | `folder` | **folder for sass sources**
*app/js/* | `folder` | **folder for es6 javascript sources**
*app/views/* | `folder` | **folder for template**
*app/views/partials/header.ejs* | `ejs` | **header template**
*app/views/partials/footer.ejs* | `ejs` | **footer template**
*assets/* | `folder` | **folder for static content**
*assets/fonts* | `folder` | **folder for fonts**
*assets/img* | `folder` | **folder for images**
*dist/* | `folder` | **folder for css and js bundles**
*node_modules/* | `folder` | **folder for the required node modules **

## Authors

* **Pere Esteve** - *Concept and code* - [hitaboy](https://github.com/hitaboy)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
