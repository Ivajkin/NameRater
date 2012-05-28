#Этапы по настройке для работы с node.js+heroku.com

1. Установить git (если на Windows, то желательно "Github for Windows" на github.com, в справке github вся информация есть)

2. Залогиниться на heroku.com, официально, со своим email, именем, фамилией на английском

3. Установить heroku toolbelt для своей ОС ( https://toolbelt.heroku.com/ , в Dev Center есть подробная информация по настройкам)

4. Создаём репос на гитхабе, добавляем .gitignore (теперь автоматически)

5. Открываем консоль, заходим директорию, клонируем репозитарий себе на компьютер - git clone git@github.com:Ivajkin/NameRater.git

6. Заходим в директорию репозитария, который клонировали - cd NameRater

7. Набираем в консоли heroku login (описание здесь - https://toolbelt.heroku.com/ ), вводим email, пароль, выбираем или генерируем ключ SSH

8. Создаём приложение хероку из консоли - heroku create --stack cedar

9. Добавляем в репозитарий README.MARKDOWN

10. Procfile для запуска приложения на хероку, структура подобная: "web: node server/start.js"

11. Создаём package.js, описание этого файла и Procfile есть в heroku.com в Dev Center, а в этом репосе есть пример

12. Создаём собствено приложение на node.js в виде набора javascript файлов и, если требуется, клиентскую часть и дополнительные файлы

В дальнейшем работа проще некуда, просто пушим измененения:

* git add .
* git commit -am "Comment"
* git push heroku master

Но не забываем и в репос пушить

* git push