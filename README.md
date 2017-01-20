# WebScraper
Before any actions, run these commands on cmd.exe (You are required to have nodejs/npm installed): 
```
npm install
```
And
```
node index.js
```
If everything is good, you will have something like that as output: 
```
Charset: NULL
Title: Illuxat | Xat Outils & Mises à jour
Description: Illuxat est un site qui propose les mises à jour de xat et des tools
Keywords: xat, tool, tools, sloom, outil, outils, generators, generateurs, générateurs
Copyright: Illuxat inc.
Images: //illuxat.com/sitecss/logo.png | sitecss/assets/images/flags/gb.png | sitecss/assets/images/flags/fr.png | //xat.com/images/smw/mountain.png | //xat.com/images/smw/x2d.png | //xat.com/images/smw/kaoears.png | //illuxat.com/sitecss/footer2.jpg?cache=1484905539
Images count : 7
Links: //illuxat.com/index.php | //illuxat.com/stats | //illuxat.com/terms
Links count : 60
Links without 'alt' attribut : 60
Links with 'alt' attribut : 0
```
The url can be changed on the JS file and the line (the last one) : 
```
init('http://illuxat.com');
```
