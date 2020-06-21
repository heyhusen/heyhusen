<template>
    <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(submitForm)">
            <ValidationProvider name="E-Mail" rules="required|email" v-slot="{ errors, valid }">
                <b-field
                    label="E-Mail"
                    :type="{ 'is-danger': errors[0], 'is-success': valid }"
                    :message="errors"
                >
                    <b-input v-model="email" type="email" name="email"></b-input>
                </b-field>
            </ValidationProvider>

            <ValidationProvider name="Message" rules="required" v-slot="{ errors, valid }">
                <b-field
                    label="Message"
                    :type="{ 'is-danger': errors[0], 'is-success': valid }"
                    :message="errors"
                >
                    <b-input v-model="message" type="textarea" name="message"></b-input>
                </b-field>
            </ValidationProvider>
            <b-field>
                <b-button native-type="submit" type="is-primary">Submit</b-button>
            </b-field>
        </form>
    </ValidationObserver>
</template>

<script>
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
const axios = require('axios')

extend('required', required)
extend('email', email)

export default {
    name: 'ContactForm',
    components: {
        ValidationObserver,
        ValidationProvider
    },
    data () {
        return {
            email: '',
            message: '',
            endpoint: 'https://formspree.io/xqkylyoz'
        }
    },  
    methods: {
        async submitForm () {
            const data = {
                email: this.email,
                message: this.message
            }
            const response = await axios({
                method: 'post',
                url: this.endpoint,
                data: data
            })
            if (response.data.ok) {
                this.$buefy.toast.open({
                    duration: 5000,
                    message: 'Message delivered successfully.',
                    position: 'is-bottom',
                    type: 'is-success'
                })
                this.email = ''
                this.message = ''
            }
        }
    }
}
</script>