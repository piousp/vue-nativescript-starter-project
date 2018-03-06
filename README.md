# Ciris

> A native application built with NativeScript-Vue

## Usage

Antes de empezar asegurese de tener jdk1.8.0_161

Construida con Node
```bash
nvm install 6.11.0
nvm use 6.11.0
```

Se instala Vue-CLI
```bash
npm install -g @vue/cli @vue/cli-init
```

Se instala TNS (Telerik's NativeScript)
```bash
npm install -g nativescript
```


``` bash
# Install dependencies
npm install

# Build for production
npm run build
npm run build:<platform>

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
