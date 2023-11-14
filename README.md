# Pasos para desplegar el repo
nota: Descargate la rama developer que es donde estan los cambios esperando el pullrequest...
1. Instalate las dependencias:
```bash
npm install
or
yarn
```
2. Arranca el metro server:

```bash
npm run start
or
yarn start
```

3. Abre la app en el emulador o el dispositivo fisico que quieras a travez del qr code que sale en consola o presionando a para android i para ios.


## Que se usó:
1. Para la gestion de estados se usó zustand por su fácil uso y rapides de implementación.
2. Para validar se uso zod.


OJO:
pude compilar la apk pero no cambia de estado al hacer fetch de los datos, al parecer es un error del sdk 49 de espo o algo parecido, pero si se ejecuta modo dev todo funciona ok.
