#!/bin/bash
ssh -i ~/.ssh/key.pem ubuntu@52.89.211.197 '
	cd todo-app
    git pull origin master
    sudo npm install
    sudo npm run build
    sudo mv build/* /var/www/html
'
exit
