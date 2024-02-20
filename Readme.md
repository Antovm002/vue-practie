## PHP 8.2

```sh
composer create-project symfony/skeleton:"7.0.*" aa
composer require webapp
composer require symfony/webpack-encore-bundle
composer require symfony/apache-pack
```

### src/Controller/VueController.php

```php
<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class VueController extends AbstractController
{
    #[Route("/{vueRouting}", requirements: ["vueRouting" => "^.+"], name: "vue_routing", defaults: ["vueRouting" => null])]
    public function index(): Response
    {
        return $this->render('vue/index.html.twig', [
            'controller_name' => 'VueController',
        ]);
    }
}
```

### templates/base.html.twig

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>
			{% block title %} Welcome! {% endblock %}
		</title>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
		<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 128 128%22><text y=%221.2em%22 font-size=%2296%22>⚫️</text></svg>">
		{% block stylesheets %}
			{# {{ encore_entry_link_tags('app') }} #}
		{% endblock %}

		{% block javascripts %}
			{{ encore_entry_script_tags('app') }}{# 
			{% block importmap %}
				{{ importmap('app') }}
			{% endblock %} #}
		{% endblock %}
	</head>
	<body>
		{% block body %}{% endblock %}
	</body>
</html>
```

### templates/vue/index.html.twig

```html
{% extends 'base.html.twig' %}

{% block title %}Hello VueController!{% endblock %}

{% block body %}

<div id="app"></div>
{% endblock %}
```

## Node 16

### package.json

```js
{
  "scripts": {
    "dev-server": "encore dev-server",
    "dev": "encore dev",
    "watch": "encore dev --watch",
    "build": "encore production"
  },
  "dependencies": {
    "@vue/compiler-sfc": "^3.4.15",
    "vue": "^3.4.15",
    "vue-router": "^4.2.5"
  },
  "devDependencies": {
    "@symfony/webpack-encore": "^4.5.0",
    "postcss-loader": "^7.3.4",
    "sass": "^1.70.0",
    "sass-loader": "^13.3.3",
    "vue-loader": "^17.4.2",
    "webpack": "^5.89.0",
    "webpack-notifier": "^1.15.0"
  }
}
```


## webpack.config.js

```js
const Encore = require('@symfony/webpack-encore');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    .addEntry('app', './assets/vue/app.js')
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .splitEntryChunks()

    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .enableSingleRuntimeChunk()

    // configure Babel
    // .configureBabel((config) => {
    //     config.plugins.push('@babel/a-babel-plugin');
    // })

    .enableSassLoader()
    .enableVueLoader()

    // uncomment if you use React
    //.enableReactPreset()

    // uncomment if you're having problems with a jQuery plugin
    //.autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();
```

## Vue

### assets/app.js

```js
import { createApp } from 'vue';
import App from './pages/App.vue';
import router from './router';

createApp(App).use(router).mount('#app');
```

### assets/pages/App.vue

```js
<template>
    <div>
        <router-view></router-view>
    </div>
</template>
  
<script>
    export default {
        name: 'App'
    };
</script>
```

### assets/pages/Home.vue

```js
<template>
    <div class="container">
        <h1>Home Page</h1>
        <p>Welcome to the Home Page!</p>
    </div>
</template>
  
<script>
    export default {
        name: 'Home'
    };
</script>
```

### assets/pages/About.vue

```js
<template>
    <div class="container">
        <h1>About Page</h1>
        <p>This is the About Page.</p>
    </div>
</template>

<script>
    export default {
        name: 'About'
    };
</script>
```

### assets/router/index.js

```js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
```