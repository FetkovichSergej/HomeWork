window.onload = () => {
    const primer = new ContactsApp();
};
class Users {
    constructor(data) {
        this.data = {
            id: data.id,
            name: data.name,
            email: data.email,
            address: data.address,
            phone: data.phone,
        };
    }

    edit(obj) {
        if (obj) {
            this.data = {
                ...this.data,
                ...obj,
            };
        }
    }

    get() {
        return this.data;
    }
}

class Contacts {
    constructor() {
        this.data = [];
    }

    add(obj) {
        let user = new Users(obj);
        this.data.push(user);
        console.log(this.data);
    }
    edit(id, obj) {
        let user = this.data.find((item) => item.id == id);
        if (user !== undefined) {
            user.edit(obj);
        }
    }
    remove(id) {
        let user = this.data.findIndex((item) => item.id == id);
        if (user !== -1) {
            this.data.splice(user, 1);
        }
    }
    get() {
        return this.data;
    }
}

class ContactsApp extends Contacts {
    constructor() {
        super();
        this.app = document.createElement("div");
        this.app.classList.add("contacts");
        this.createUserForm();
        document.body.appendChild(this.app);
    }
    createUserForm() {
        this.app.append(
            this.createUserFormInput("id", "text", "Введите айди"),
            this.createUserFormInput("name", "text", "Введите Имя"),
            this.createUserFormInput("email", "email", "Введите email"),
            this.createUserFormInput("address", "text", "Введите адрес"),
            this.createUserFormInput("phone", "tel", "Введите номер телефона"),
            this.createButton(this.onAdd.bind(this), "Добавить")
        );
    }

    createUserFormInput(id, type, name) {
        const inputElement = document.createElement("input");
        inputElement.setAttribute("type", type);
        inputElement.setAttribute("placeholder", name);
        inputElement.id = id;
        return inputElement;
    }

    createButton(methodName, buttonName) {
        const button = document.createElement("button");
        button.onclick = methodName;
        button.innerText = buttonName;
        return button;
    }

    onAdd() {
        const userData = {
            id: document.getElementById("id").value,
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            address: document.getElementById("address").value,
            phone: document.getElementById("phone").value,
        };
        this.add(userData);
    }
}
