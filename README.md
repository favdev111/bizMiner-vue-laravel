# app.bizminer.com

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Docker 

Go to root directory of the application

`docker build -t bizminer/app.bizminer.com .`

`docker run -it -p 8080:8080 --rm --name bizminer-webapp bizminer/app.bizminer.com`

Locate application on `http://localhost:8080`