# "Cinema-booker"

Pet-проект. Промо-лендинг iPhone13

## О приложениии

[Демо](https://iphone-promo.web.app/)

- Приложение написано с нуля на ReactJS по реальному дизайн-макету.
- Имитация загрузки базы данных фильмов с сервера.
- Прелоадер загрузки, оповещение при ошибке сервера.

## Стек и технологии

- ReactJS, Redux, Redux/Toolkit, React Hooks, Styled Components, Context Provider, [React Spring](https://react-spring.io), [react-media](https://www.npmjs.com/package/react-media), [react-scroll](https://www.npmjs.com/package/react-scroll), [seamless-scroll-polyfill](https://www.npmjs.com/package/seamless-scroll-polyfill) для поддержки скролла на Safari, Grid/Flex, RestAPI.
- Настройки приложения в файле `env.json`: стилевое оформление (цвета и шрифты), навигация.
- Конфигурация позволяет получать полный объем данных о сеансах с сервера с минимальной доработкой приложения.
- В приложении имитируется загрузка базы данных фильмов c сервера (фактически БД находится JSON-файлах в `public/db`).
- Сборка с помощью [Create React App](https://github.com/facebook/create-react-app).
- Поддержка браузеров Сhrome, Firefox, Safari (1 последняя версия).
- Деплой демо готовой сборки на [Firebase Hosting](https://firebase.google.com).

## Как установить?

- Скопировать содержимое репозитория в рабочую папку
- В терминале выполнить команду `npm install`
- В случае создания проекта с помощью Create React App дополнительно установить пакеты из `add_packages.txt`.
- Запустить development mode командой `npm start`.
- Открыть `http://localhost:3000` для просмотра в браузере.
- Для поддержки IE9/11 использовать [Полифиллы](https://github.com/facebook/create-react-app/blob/main/packages/react-app-polyfill).
- Для сборки приложения команда `npm run build`. Готовый проект будет в папке `build` рабочей директории.
