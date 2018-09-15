# Посадочная страница для услуги "X"
## План реализациии проекта:

### Задача: 1.

Составить план реализациии проекта

### Задача: 2.

Ознакомится с дизайном страницы.

На основе дизайна составить список компонентов страницы:
- имена компонентов должны отражать функциональный смысл

### Задача: 3.

Настроить окружение для разработки:

Список используемых технологий:

- react
- scss
- ...

Список используемых методологий:

- [BEM](http://getbem.com/naming/)

#### Webpack

Установить пакеты.

HTML:

- npm i -D html-webpack-plugin

CSS/[SASS](https://github.com/webpack-contrib/sass-loader):

- npm i -D css-loader style-loader sass-loader node-sass postcss-loader autoprefixer extract-text-webpack-plugin


babel:

- npm i -D babel-core babel-loader babel-preset-env babel-preset-react


webpack:

- npm i -D webpack webpack-cli

react:

- npm i -s react react-dom redux react-redux

TEST:

- npm i -D jest enzyme enzyme-adapter-react-16

Настроить конфигурацию окружения:
- .babelrc
- webpack.config.js
- postcss.config.js

### Задача: 4.

В соответствии со списком компонентов написать HTML разметку.

### Задача: 5.

В соответствии с HTML разметкой описать стили:

5.1. для мобильного телефона

5.2. для планшета

5.3. для десктопа

### Задача: 6.

Создать основание для реакт приложения:

 - хранилище данных
 - обработку маршрутов

### Задача: 7.

В соответствии с:

 - HTML разметкой
 - CSS стилями
 - списком компонентов,

создать react компоненты.

Каждый компонент покрыть тестами.

