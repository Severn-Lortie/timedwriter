<template>
<div class="positioning">
    <text-field
        @text-updated="updateEmail"
        placeholder="Email"
    ></text-field>
    <text-field
        @text-updated="updatePassword"
        :hidden="true"
        placeholder="Password"
    ></text-field>
    <app-button
        @button-clicked="login()"
        class="spaced"
        text="Login"
    ></app-button>
    <div class="error-message">{{errorMsg}}</div>
</div>
</template>

<script>
import { auth } from '../main';

export default {
    data() {
        return {
            email: '',
            password: '',
            errorMsg: ''
        }
    },
    components: {
        appButton: () => import("../components/Button"),
        textField: () => import("../components/TextField")
    },
    methods: {
        updatePassword(password) {
            this.password = password;
        },
        updateEmail(email) {
            this.email = email;
        },
        async login() {
            try {
                await auth.signInWithEmailAndPassword(this.email, this.password);
                this.$router.push('/admin');
            } catch(e) {
                this.errorMsg = e.message;
                console.log(e);
            }
        }
    }
};
</script>

<style scoped>
.positioning {
    margin-top: 10vh;
    text-align: center;
}

.spaced {
    margin-top: 2vh;
}

.error-message {
    margin-top: 2vh;
    font-family: 'Roboto', 'Sans-serif';
    color: red;
    font-size: 18px;
}
</style>
