# Server Base - Proyecto ONG


## Envinroment setup

1) Create database
2) Copy .env.example to .env and fill with database credentials.

To install dependencies, run
``` bash
npm install
```

3) Migrations:
``` bash
npx sequelize-cli db:migrate
```

4) Seeders:
Running all seeders
``` bash
npx sequelize-cli db:seed:all
```
Populate with users only:
``` bash
npm run db:seed:standard-users
```
Or:
``` bash
npm run db:seed:admin-users
```
## Start local server

``` bash
npm start
```
