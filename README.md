# GrootORM

##### This is a shared orm library built using Node.js and TypeORM. It encapsulates entity files, migrations, and database connection.
## Features:
- Entity files are managed in this library itself.
- Assuming Setting is mapped to User as one-to-one relation.
- Email column is implemented with unique constraint assuming no two users have same email.
- Indexing is implemented for email column as user is frequentry searched using email.
- Repository API is exposed from TypeORM for transaction implementation using `getRepository(entity)` function from GrootORM instance.

## Prerequisites:

### Install Node JS

Please refer https://nodejs.org/en/ to install nodejs.


## Installation:
Run below command to install

`npm install https://github.com/tapendra-joshi/groot-orm.git#master`


## Usage
##### Import `GrootORM` from grootorm in entry file of your project and create instance of `GrootORM` and initialize by providing config for database.

dbConfig
```JSON
{
    database : "MyAccount",
    username : "tappu",
    password : "tappu",
    host : "localhost",
    port : 5432,
    type : "postgres"
}
```

index.js
```Javascript
const GrootORM = require('grootorm/index.js');
const ormLib = new GrootORM();
(async () => {
    await ormLib.initialize(dbConfig);
})();
```

**Note: Due to limited knowledge of running migrations through commandline before starting application. We have run Migrations as we initialize the GrootORM.In future as per industry standards we will be implementing migrations through commandline.



