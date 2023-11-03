# Tестовое задание приложение погоды

## Содержание

- [Техническое задание](#Техническое-задание)
- [API](#API)
- [Необходимый функционал](#Необходимый-функционал)
- [Пример графического представления](#Пример-графического-представления)
- [Используемые технологии](#Используемые-технологии)
- [Тестирование](#Тестирование)
- [Полезные ссылки](#Полезные-ссылки)

## Техническое задание

Реализовать приложение, отображающее погоду в городах с дополнительной визуализацией.

## API

Список API для использования(если представленные API не удовлетворяют каким-либо условиям задания, можно использовать любые
другие открытые API для погоды):
 - [openweather](https://openweathermap.org/current)
 - [stormglass](https://docs.stormglass.io/#/)
 - [openweather](https://home.openweathermap.org)

## Необходимый функционал:

- На первом этапе местоположение пользователя должно определиться автоматически (возможно использование 
навигатора в браузере или сервиса, который определяет геопозицию по IP адресу).
- Реализация elastic search введенного города.
- Интеграция должна быть сразу с двумя погодными сервисами(для того, чтобы была возможность 
увидеть погоду как по дням, так и по часам) и у пользователя должна быть возможность быстро переключаться между ними.
-  Дополнительная визуализация подразумевает собой смену фона и основного изображения 
погоды (серый фон в дождь и изображение дождя, яркий фон в ясную погоду и изображение солнечной погоды и так далее).
- Также должна быть реализована возможность подгрузки событий из гугл календаря и отображения их на UI(как это представлено на дизайне). Для этого будет необходимо осуществить интеграцию с гугл календарем(например, посредством следующий библиотеки - react-google-calendar-api. При желании, можно использовать любую другую). Данный функционал подразумевает реализацию логики входа/выхода из аккаунта.

### Дополнительные указания

- Дизайн не должен содержать селектор погодного сервиса и города. Это следует продумать самостоятельно.
- Реализацию иконок для отображения погоды следует продумать самостоятельно.
- На изображении с дизайном также присутствует блок событий, который необходимо наполнить данными из гугл календаря.
- Реализация Loader для отображения запасного UI  при подгрузке данных.
- Запросы на погодные сервисы должны кэшироваться для избежания блокировки на бесплатных и публичных провайдерах и снижения трафика.

## Пример графического представления:

Ссылка на макет: [Макет "Weather"](<https://www.figma.com/file/WYInme5fVlrXAqJGRldHk5/Untitled?node-id=0%3A1>). 


### Также проект предполагает:

- Организацию файловой структуры react приложения. Ссылка на структуру: [Cтруктура проекта](https://github.com/mkrivel/structure).
- Деплой приложения на платформу GitHub Pages или иные другие (Netlify, ...).
- Настроить конфигурации ***babel***, ***eslint***.
- Использование TypeScript для типизирования и уменьшения количества потенциальных багов.
- Обработку ошибок через паттерн ***Error Boundaries***.
- Использование алиасов для импортирования файлов.
- Оптимизацию дизайна под мобильные устройства.
- Покрытие тестами всего приложения (cypress, jest, ...).
- Обязательную анимацию при наведения, нажатии на кнопки, прокрутки карусели и слайдеров, появлении элементов на странице при рендере и скролле.

## Используемые технологии

### Для react

- ***node.js*** - программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код).
- ***babel*** - транспайлер, преобразующий код из одного стандарта в другой.
- ***eslint*** - линтер для JavaScript кода.
- ***yarn*** - менеджер пакетов.
- ***react*** - JavaScript-библиотека для создания пользовательских интерфейсов.
- ***typescript*** - строго типизированный язык для уменьшения количества потенциальных багов.
- ***redux-persist*** - библиотека для кеширования данных в локальное хранилище.
- ***redux-saga*** - библиотека для создания асинхронных действий.
- ***styled-components*** - система стилизации react компонентов.
- ***cypress*** — e2e тестирование для веб приложений.
- ***jest*** — интеграционное тестирование для веб приложений.

## Тестирование

Реализовать e2e тестирование c полным покрытием функционала приложения:
- Модуль поиска города.
- Модуль получения событий из google calendar.
- Модуль переключения API.
- Модуль отображения погоды.

### Для react native

Will be soon...


## Полезные ссылки

[React](https://reactjs.org/docs/getting-started.html)

[React hooks](https://reactjs.org/docs/hooks-intro.html)

[React router dom](https://reacttraining.com/react-router/web/guides/quick-start)

[Eslint](https://eslint.org/docs/user-guide/configuring)

[Babel](https://babeljs.io/docs/en/configuration)

[Тестирование Cypress](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)

[Тестирование Detox](https://github.com/wix/Detox/blob/master/docs/README.md)

[Styled-components](https://www.styled-components.com/docs)

[Redux-persist](https://github.com/rt2zz/redux-persist)

[Redux-saga](https://redux-saga.js.org/)

[GitHub Actions](https://github.com/features/actions)

[Heroku](https://devcenter.heroku.com/articles/heroku-cli)