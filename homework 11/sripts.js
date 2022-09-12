const selectors = {
    idInput: "user-id-input",
    nameInput: "user-name-input",
    emailInput: "user-email-input",
    addressInput: "user-address-input",
    phoneInput: "user-phone-input",
    confirmButton: "user-confirm-button",
    editButton: "user-edit-button",
};
let primer;
window.onload = () => {
    primer = new ContactsApp();
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
        let user = this.data.findIndex((item) => item.data.id === id);
        if (user !== -1) {
            this.data.splice(user, 1);
        }
    }
    get() {
        return this.data;
    }
}

class ContactsApp extends Contacts {
    get usersData() {
        const usersList = JSON.parse(localStorage.getItem("Users"));
        const arrayUsers = [];
        for (let index = 0; index < usersList.length; index++) {
            arrayUsers.push(new Users(usersList[index].data));
        }
        return arrayUsers;
    }

    set usersData(obj) {
        localStorage.setItem("Users", JSON.stringify(obj));
        let date = new Date(Date.now() + 8.64e8);
        date = date.toUTCString();
        document.cookie = "User=Alex;expires=" + date;
    }

    constructor() {
        super();
        this.app = document.createElement("div");
        this.app.classList.add("contacts");
        this.list = document.createElement("div");
        this.list.id = "UsersList";
        this.createUserForm();
        document.body.append(this.app, this.list);
        this.data = this.usersData;
        this.buildUserList();
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
        this.usersData = this.data;
    }

    addUserToList(user) {
        const data = user.get();
        const userContainer = document.createElement("div");
        userContainer.id = `user-${data.id}`;
        const userID = document.createElement("input");
        userID.classList.add(selectors.idInput);
        userID.disabled = true;
        userID.value = data.id;
        const userName = document.createElement("input");
        userName.classList.add(selectors.nameInput);
        userName.disabled = true;
        userName.value = data.name;
        const userEmail = document.createElement("input");
        userEmail.classList.add(selectors.emailInput);
        userEmail.disabled = true;
        userEmail.value = data.email;
        const userAddress = document.createElement("input");
        userAddress.classList.add(selectors.addressInput);
        userAddress.disabled = true;
        userAddress.value = data.address;
        const userPhone = document.createElement("input");
        userPhone.classList.add(selectors.phoneInput);
        userPhone.disabled = true;
        userPhone.value = data.phone;
        const removeButton = document.createElement("button");
        removeButton.onclick = this.onRemove.bind(this, data.id);
        removeButton.innerText = "Удалить";
        const editButton = document.createElement("button");
        editButton.onclick = this.startEdit.bind(this, `user-${data.id}`);
        editButton.innerText = "Изменить";
        editButton.classList.add(selectors.editButton);
        const confirmButton = document.createElement("button");
        confirmButton.innerText = "Подтвердить";
        confirmButton.disabled = true;
        confirmButton.classList.add(selectors.confirmButton);
        confirmButton.onclick = this.onEdit.bind(this, data.id);
        userContainer.append(
            userID,
            userName,
            userEmail,
            userAddress,
            userPhone,
            removeButton,
            editButton,
            confirmButton
        );
        this.list.append(userContainer);
    }
    buildUserList() {
        this.list.innerHTML = "";
        for (let index = 0; index < this.data.length; index++) {
            this.addUserToList(this.data[index]);
        }
    }

    onRemove(id) {
        this.remove(id);
        this.buildUserList();
        this.usersData = this.data;
    }
    startEdit(id) {
        document.querySelector(`#${id} .${selectors.idInput}`).disabled = false;
        document.querySelector(
            `#${id} .${selectors.nameInput}`
        ).disabled = false;
        document.querySelector(
            `#${id} .${selectors.phoneInput}`
        ).disabled = false;
        document.querySelector(
            `#${id} .${selectors.addressInput}`
        ).disabled = false;
        document.querySelector(
            `#${id} .${selectors.emailInput}`
        ).disabled = false;
        document.querySelector(
            `#${id} .${selectors.editButton}`
        ).disabled = true;
        document.querySelector(
            `#${id} .${selectors.confirmButton}`
        ).disabled = false;
    }
    onEdit(id) {
        const idInput = document.querySelector(
            `#user-${id} .${selectors.idInput}`
        );
        const nameInput = document.querySelector(
            `#user-${id} .${selectors.nameInput}`
        );
        const phoneInput = document.querySelector(
            `#user-${id} .${selectors.phoneInput}`
        );
        const addressInput = document.querySelector(
            `#user-${id} .${selectors.addressInput}`
        );
        const emailInput = document.querySelector(
            `#user-${id} .${selectors.emailInput}`
        );
        const userData = {
            id: idInput.value,
            name: nameInput.value,
            email: emailInput.value,
            address: addressInput.value,
            phone: phoneInput.value,
        };
        idInput.disabled = true;
        nameInput.disabled = true;
        emailInput.disabled = true;
        addressInput.disabled = true;
        phoneInput.disabled = true;
        this.edit(id, userData);
        document.querySelector(
            `#user-${id} .${selectors.editButton}`
        ).disabled = false;
        document.querySelector(
            `#user-${id} .${selectors.confirmButton}`
        ).disabled = true;
        this.usersData = this.data;
    }
}
