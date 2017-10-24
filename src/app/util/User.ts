export class User {
    name: string;
    email: string;
    password: string;
    profilePicture: string;
    description: string;
    created;
    updated;

    constructor(name: string, password: string, email: string) {
        this.name = name;
        this.password = password;
        this.email = email;
    }
}