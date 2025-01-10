<template>
    <Form @submit="onSubmit">
        <Field name="username" :rules="fieldRequired" v-model="username" />
        <Field name="password" :rules="fieldRequired" as="input" type="password" v-model="password" />
        <button type="submit">Sign In</button>
    </Form>
</template>
<script setup>
import { Field, Form } from 'vee-validate';
import { ref } from 'vue';
const password = ref('');
const username = ref('');
const fieldRequired = (value) => {
    if (!value) {
        return 'This field is required';
    }
    return true;
};
const onSubmit = (values) => {
    console.log(JSON.stringify(values, null, 4));
};
</script>
