export class User {
    public name: string;
    public email: string;
    public password: string;
    public profilePicture: string;
    public description: string;
    public created;
    public updated;

    constructor(name: string, password: string, email: string) {
        this.name = name;
        this.password = password;
        this.email = email;
    }
}