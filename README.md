# Apartment Hunt Visualization

This project is a simple web application that will help visualize the pros and cons of various apartments, including distance to work, rent price per month, sq. ft., etc. It's built using [AngularJS](http://angularjs.org/), and took advantage of [simple angular seed](https://github.com/reinaldo13/simple-angular-seed), which is a basic skeleton for general AngularJS applications.

## Getting Started

Simply clone the ApartmentHunt repository

```
git clone https://github.com/justinkjchang/ApartmentHunt.git
cd ApartmentHunt
```

### Prerequisites

You need git to clone the repository. You can get it from
[http://git-scm.com/](http://git-scm.com/).

### Run the Application

You can either run your app locally or host it using [github pages](https://pages.github.com/)

### Todo

- Migrate from ngRoute to ui-router
- Show marker address/name on click
- Add favourites star

#### Note:

Some ajax calls are done with angular, and as a result, the project needs to be hosted on a web server.
One option would be to use [http-server](https://www.npmjs.com/package/http-server)
Install: npm install -g http-server
Run: http-server $dir

## Directory Layout

    app/                       --> all of the files to be used in production
      css/                       --> css files
        app.css                    --> default stylesheet
      img/                       --> image files
      index.html                 --> app layout file (the main html template file of the app)
      js/                        --> javascript files
        angular-google-maps.js     --> angular google maps directive
        angular-simple-logger.js   --> angular simple logger library
        app.js                     --> application
        controllers.js             --> application controllers
        directives.js              --> application directives
        factories.js               --> application factories
        filters.js                 --> custom angular filters
        lodash.min.js.js           --> lodash/underscore minified library
        services.js                --> custom angular services
      partials/                  --> angular view partials (partial html templates)
        partial1.html
        partial2.html
      templates/
        apartment_data_template    --> template for apartment list directive
    data/
      apartments.json              --> json data for apartments
    test/                        --> test config and source files (coming soon!)
    index.html                   --> redirects to app/index.html
    favicon.png                  --> favicon
    
## Testing

Coming Soon!

## Contact

For more information on AngularJS please check out http://angularjs.org/
