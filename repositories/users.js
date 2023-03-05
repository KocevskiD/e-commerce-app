const fs = require('fs')

class UsersReposotory{
    constructor(filename){
        if(!filename){
            throw new Error('Creating a repository requires a filename')
        }

        this.filename = filename;
        try{
            fs.accessSync(this.filename)
        }catch (err){
            fs.writeFileSync(this.filename, '[]');
        }
        
    }

    async checkForFile() {}
}

const repo = new UsersReposotory('users.json');
