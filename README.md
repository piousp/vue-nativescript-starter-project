# Proyecto base - Movil - NativeScript-Vue

## Cómo clonar el proyecto
Hay 2 opciones: la regular y luego pasos extra, o con bandera.

### Regular
Se clona como siempre:
``` bash
git clone git@gitlab.com:ciris-base/frontend-vuejs.git
```
Y luego de clonado, se deben ejecutar estos pasos dentro del repo:
``` bash
git submodule init
git submodule update
```

### Con bandera
Se clona como siempre pero se agrega una bandera al comando:
``` bash
git clone git@gitlab.com:ciris-base/frontend-vuejs.git --recurse-submodules
```

## Librerías globales

Antes de empezar asegurese de tener jdk1.8.0_161

Se instala Vue-CLI
```bash
npm install -g @vue/cli @vue/cli-init
```

Se instala TNS (Telerik's NativeScript)
```bash
npm install -g nativescript
```


## Scripts de ejecución
### Bump
Realiza un aumento de version (major, minor, patch) y hace un commit
``` bash
npm version major|minor|patch
```

### Lint
Verifica todos los archivos javascript dentro de `src` con las reglas definas en el linter.
``` bash
npm run lint
npm run lint:watch
```


### Tests (Unidad)
Ejecuta todos los tests que se encuentren dentro de `src`. Los archivos debe tener un nombre que cumpla con el siguiente regex: `\w+\.spec\.js`, o humanamente: `xxxx.spec.js`
``` bash
npm test
```

### Correr para desarrollo
Ejecuta el linter y reinicia el proceso al encontrar cambios en el código
``` bash
npm start
```

### Transpilar para producción
Compila y limpia todas las fuentes para usar en producción. El compilado queda en el directorio `dist`.
Tamibién reduce el código con envify y uglify.
``` bash
npm run build:<platform>
```

### Otros
``` bash
# Build, watch for changes and debug the application
npm run debug
npm run debug:<platform>

# Build, watch for changes and run the application
npm run watch
npm run watch:<platform>

# Clean the NativeScript application instance (i.e. rm -rf dist)
npm run clean
```

> When invoking the various npm scripts, omitting the platform will attempt to launch `tns` for both platforms, which will only work in a properly configured OSX environment.

For detailed instructions, see https://github.com/nativescript-vue/vue-cli-template (la rama 0.2.0)

## Instalar Plugins

Se instalan con node
``` bash
npm install nativescript-camera --save
```

Esto lo instala y lo mete al package.json de raiz. Cuando uno corre la compilación, el `prepare.js` agarra todos los plugins que instalamos y los pasa al telefono entonces no hay que hacer mucho

Si van a quitar un plugin:
``` bash
npm uninstall nativescript-camera --save
```

Además, tiene que quitar el plugin de `template/package.json` en dependencias.
