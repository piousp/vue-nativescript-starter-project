# vue-base
- Contruído con Node 8.9.4
- Contruído con NPM 5.6.0

``` bash
npm install
```

## Scripts de ejecución
### Bump
Hay que hacer el bump

### Lint
Hay que meterle linter

### Tests (Unidad)
Hay que meterle tests

### Correr para desarrollo y debug
Se ejecuta webpack
``` bash
npm run webpack-<plataforma>
Ej.
npm run webpack-android
```
Y en otra terminal hace:
``` bash
cd tns
```
Y corre debug o run
#### Debug
``` bash
tns debug <plataforma>
Ej.
tns debug android
```

#### Run
``` bash
tns run <plataforma>
Ej.
tns run android
```

### Info Extra:
 - Si se le jode el comando de tns porque jdk, borre la carpeta .gradle dentro de tns/platforms/android
 - Por alguna razon no reconoce estilos

###

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
