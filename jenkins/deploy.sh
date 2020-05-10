#!/usr/bin/env sh
ssh -i ~/.ssh/key.pem ubuntu@52.89.211.197 '
	cd todo-app
    sudo git pull origin master
    sudo npm install
    sudo npm run build
    sudo rm -rf /var/www/html/static
    sudo mv build/* /var/www/html
'
