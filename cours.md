Typescrypt

tsc fichierTypescript => Configure un fichier js pour pouvoir lire ce qu'on a fait en ts

tsc --watch fichierTS => Permet de vérifier si le fichier a changé pour faire le js en conséquence

tsc --watch --target es2015 index.ts => " pour les versions 2015 qui sont à privilégier

interface => Règle pour les objets

tsconfig.json => Configurer TS pour ne pas avoir à préciser à chaque fois ce qu'on watch et il ne reste plus qu'à watch au démarrage (plus besoin du nom de fichier)