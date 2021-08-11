<template>
    <div>
        <div id="logout" v-show="logged" @click="logoutClick">Log Out</div>
        <div id="main">
            <div id="login" v-show="!logged">login</div>
            <div id="loginForm" ref="lform">
                <input
                    type="text"
                    name="username"
                    id="username"
                    class="input"
                    placeholder="username"
                    required
                    v-model="username"
                />
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    class="input"
                    required
                    v-model="password"
                />
                <input
                    type="submit"
                    id="loginButton"
                    value="Login"
                    @click="loginClick"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    name: "Popup",
    setup() {
        const logged = ref(false);
        const username = ref("");
        const password = ref("");

        return {
            username,
            password,
            logged,
        };
    },
    methods: {
        loginClick: async function (event) {
            event.preventDefault();

            var uname = this.username;
            var pass = this.password;
            console.log(uname, pass);
            chrome.runtime.sendMessage(
                {
                    message: "login",
                    payload: {
                        username: uname,
                        password: pass,
                    },
                },
                (response) => {
                    console.log(this.$refs);
                    console.log(this.logged);
                    switch (response.message) {
                        case "login":
                            this.$refs.lform.innerHTML =
                                "Successfully logged in!";
                            this.logged = true;
                            break;

                        case "error":
                            this.$refs.lform.innerHTML += `Error: ${response.error}.`;
                            break;

                        default:
                            this.$refs.lform.innerHTML +=
                                "Something went wrong, try again!";
                            break;
                    }
                }
            );
        },
        logoutClick: async function (event) {
            chrome.runtime.sendMessage(
                {
                    message: "logout",
                },
                (response) => {
                    switch (response.message) {
                        case "logout":
                            this.logged = false;

                            break;

                        case "error":
                            this.$refs.lform.innerHTML += `Error: ${response.error}.`;
                            break;
                    }

                    location.reload();
                }
            );
        },
    },
    mounted() {
        // Check the status of login, if a session is active modify the interface otherwise do nothing
        chrome.runtime.sendMessage(
            {
                message: "logged",
            },
            (response) => {
                switch (response.message) {
                    case "logged":
                        this.$refs.lform.innerHTML = "You are logged in!";
                        this.logged = true;
                        return;
                        break;

                    case "error":
                        this.$refs.lform.innerHTML += `Error: ${response.error}.`;
                        break;

                    default:
                        this.logged = false;
                        break;
                }
            }
        );
    },
};
</script>

<style>
body {
    color: #fff;
    text-transform: capitalize;
    background-color: rgb(26, 32, 64);
}

#main {
    background: rgba(0, 0, 0, 0.7);
    width: 300px;
    margin: 50px auto;
    padding: 10px;
    border-radius: 10px;
}

#login {
    width: calc(50% - (5px * 2));
    padding: 5px;
    text-align: left;
    display: inline-block;
    color: #fff;
    font-size: medium;
    font-weight: 700;
    cursor: pointer;
}

#logout {
    margin: 10px;
    padding: 5px;
    text-align: right;
    display: block;
    color: #fff;
    cursor: pointer;
    font-size: medium;
    font-weight: 700;
}

#loginForm {
    display: block;
    font-size: medium;
    font-weight: 700;
    margin: 20px;
}

.input {
    background: none;
    border-color: #888;
    border-width: 0 0 1px 0;
    width: 100%;
    color: #fff;
    padding: 5px;
    margin: 5px;
}

#loginButton {
    background-color: #18d992;
    border-radius: 8px;
    border: none;
    width: 50%;
    color: #fff;
    padding: 5px;
    margin: 0 auto;
    display: block;
    margin-top: 20px;
    justify-content: center;
}
</style>