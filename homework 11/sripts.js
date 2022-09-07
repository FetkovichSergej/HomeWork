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
    }
    edit(id, obj) {
        let user = this.data.find((item) => item.data.id == id);
        if (user !== undefined) {
            user.edit(obj);
        }
    }
    remove(id) {
        console.log(id);
        let user = this.data.findIndex((item) => item.data.id === id);
        console.log(user);
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
        this.list = document.createElement("div");
        this.list.id = "UsersList";
        this.createUserForm();
        document.body.append(this.app, this.list);
    }
    createUserForm() {
        this.app.append(
            this.createUserFormInput("id", "text", "Введите айди"),
            this.createUserFormInput("name", "text", "Введите Имя"),
            this.createUserFormInput("email", "email", "Введите email"),
            this.createUserFormInput("address", "text", "Введите адрес"),
            this.createUserFormInput("phone", "tel", "Введите номер телефона"),
            document.createElement("br"),
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
        this.buildUserList();
    }

    addUserToList(user) {
        const data = user.get();
        const userContainer = document.createElement("div");
        const userID = document.createElement("span");
        userID.innerText = `ID:${data.id} `;
        const userName = document.createElement("span");
        userName.innerText = `Имя пользователя:${data.name} `;
        const userEmail = document.createElement("span");
        userEmail.innerText = `Email:${data.email} `;
        const userAddress = document.createElement("span");
        userAddress.innerText = `Адресс:${data.address} `;
        const userPhone = document.createElement("span");
        userPhone.innerText = `Телефон:${data.phone} `;
        const removeButton = document.createElement("button");
        removeButton.onclick = this.onRemove.bind(this, data.id);
        removeButton.innerText = "Удалить";
        userContainer.append(
            userID,
            userName,
            userEmail,
            userAddress,
            userPhone,
            removeButton
        );
        this.list.append(userContainer);
    }
    buildUserList() {
        this.list.innerHTML = "";
        for (let index = 0; index < this.data.length; index++) {
            this.addUserToList(this.data[index]);
        }
    }
    changeUser() {}

    onRemove(id) {
        console.log(id);
        this.remove(id);
        console.log(this.data[0]);
        this.buildUserList();
    }
}
