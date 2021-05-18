(Erro H10) : Para rodar sem erro no Heroku foi necessário rodar o comando:

npm install serve --s

e alterar algumas coisas no package.json scripts:

"dev": "react-scripts start",
"start": "serve -s build",
"heroku-postbuild": "npm run build",
"build": "react-scripts build && gulp licenses",

Caso tenha problema em rodar a aplicação localmente:

Apague as linhas acime e insira novamente:

"start": "react-scripts start",
"build": "react-scripts build && gulp licenses",