(Erro H10) : Para rodar sem erro no Heroku foi necessário rodar o comando:

npm install serve --s

e alterar algumas coisas no package.json scripts:

"dev": "react-scripts start",
"start": "serve -s build",