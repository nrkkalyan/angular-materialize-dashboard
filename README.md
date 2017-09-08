# Basic dashboard for any purposes.

Based on *Angular*, *Materializecss*, *Angular CLI* latest versions.

## Demo
https://angular-cli-boilerplate.firebaseapp.com


### Important notes

* Any pull-request, which increases version of any dependencies is wellcomed;
* Any pull-request, which removes redundant code is welcomed;
* We are happily accepting any separation-of-concerns, refactoring in the code

* *We are not accepting extra features on this repository, such as calendar, whatsoever, this is only a base dashboard*
Please read our milestones or issues if you want to contribute, or fork repository and add your components there.

* Make sure you are following styleguides and code of conduct of repository, if you want to get latest updates of this branch.


## For people who want to develop features
If you are willing to develop a feature based on this dashboard make sure first you having a basic understanding of this materials:

* Angular CLI, by google. A cli for managing angular projects. This project is totally based on that and follows all rules coming from there.
* Sass, is a css preprocessor that let's you to write more scalable css
* Angular/TypeScript itself. Make sure you have a good understanding of angular ( not angular.js, angular 2 is totally a different thing)
* Materializecss, it's a framework for creating UI components, like bootstrap, but has more features and based on google material design.

## Starting with repository.

First of all make sure you have installed node.js, then try to clone this repository:

```
git clone https://github.com/torabian/angular-materialize-dashboard
cd angular-materialize-dashboard
npm install
```

After dependencies installed, you can check `package.json` file and see the npm scripts, but for running project:

If you want use hot reloading ( replaces elements without refresh )
```
npm run hmr
```
or normally:

```
npm start
```

## Building project

When you are done with your development, you have to build it in order to host it somewhere. as an example we host on firebase, but
it is feasible to host also in many possible other hosting, or you can use nginx config for that.

Before building, try to run tests. In fact, when you create a new component, you need to update it test file.
Take a look to exisitng components for testing, if you are having trouble with router testing or store, or other issues.

For unit tests:
```
npm test
```
for functional test:
```
npm run e2e
```
and for building the repository:
```
npm run build
```

When you want to open a pull request, make sure you run this first:
```
npm run production
```
it will run a sequence of tasks and checkes such as linting and testing and building, then lets you merge.


## Guide for creating new plugin ( component, ...)

This section is for people who want to develop a plugin, feature or an upgrade using this repository.

First of all this is an angular cli project so you have to create your components using cli:
```
ng g component mycomponent
```
and it will generate 4 files for you:

```
  create src/app/mycomponent/mycomponent.component.scss
  create src/app/mycomponent/mycomponent.component.html
  create src/app/mycomponent/mycomponent.component.spec.ts
  create src/app/mycomponent/mycomponent.component.ts
  update src/app/app.module.ts
```

Now, go and write your component inside of that html, scss, and ts files. You might update the spec.ts file according to the changes
and components you use inside of that component.

Now, you can use `<app-mycomponent>` inside another component.

### Add a component inside route

In many cases you need to add a new route to the application. For example you want to place a new link in sidebar or menu.
You can always update `app.routes.ts`

Make sure you are not removing core routes, otherwise you will lose login/signup and core features of the application.


## Todo: Update documentations

* Adding static files
* Adding fonts
* Using fontello
* Creating http requests
* Create socket integration
* Using store
* Explain about travis
* Explain about circleci
* Explain about firebase
* Explain about sass mixins we use
* Create a video to explain how to create a new module