// map tells the System loader where to look for things
let map: any = {
  "app": "",
  "rxjs": "../node_modules/rxjs",
  "angular2-in-memory-web-api": "../node_modules/angular2-in-memory-web-api",
  "@angular": "../node_modules/@angular",
  "reflect-metadata": "../node_modules/reflect-metadata/Reflect.js",
  "crypto": "../node_modules/crypto-js/crypto-js.js",
  "lodash": "../node_modules/lodash/lodash.js"
};


// packages tells the System loader how to load when no filename and/or no extension
let packages: any = {
  "app": { main: "main.js", defaultExtension: "js" },
  "rxjs": { defaultExtension: "js" },
  "angular2-in-memory-web-api": { defaultExtension: "js" },
};

let packageNames: any = [
  "@angular/common",
  "@angular/compiler",
  "@angular/core",
  "@angular/http",
  "@angular/platform-browser",
  "@angular/platform-browser-dynamic",
  "@angular/router",
  "@angular/router-deprecated",
  "@angular/testing",
  "@angular/upgrade"
];

// add package entries for angular packages in the form "@angular/common": { main: "index.js", defaultExtension: "js" }
packageNames.forEach(function (pkgName: any): void {
  packages[pkgName] = { main: "index.js", defaultExtension: "js" };
});

let config: any = {
  map: map,
  packages: packages
};

// filterSystemConfig - index.html"s chance to modify config before we register it.
// if (global.filterSystemConfig) { global.filterSystemConfig(config); }

System.config(config);

