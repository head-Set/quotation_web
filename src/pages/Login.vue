<template>
  <q-page class="row items-center justify-evenly">
    <q-card bordered tag="form" class="loginform">
      <!-- <img src="https://cdn.quasar.dev/img/mountains.jpg"> -->
      <q-card-section>
        <div class="text-h6 text-weight-bold">Log in</div>
      </q-card-section>
      <q-card-section class="q-pa-md">
        <ValidationObserver v-slot="{ handleSubmit }">
          <ValidationProvider name="username" rules="required" v-slot="err">
            <q-input
              outlined
              v-model="username"
              type="text"
              label="Username"
              :error="err.errors.length > 0"
              :error-message="err.errors[0]"
              clearable
            >
              <template v-slot:prepend>
                <q-icon name="person" />
              </template>
            </q-input>
          </ValidationProvider>
          <ValidationProvider name="password" rules="required" v-slot="err">
            <q-input
              outlined
              v-model="password"
              :type="showPass ? 'password': 'text'"
              label="Password"
              :error="err.errors.length > 0"
              :error-message="err.errors[0]"
              
            >
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
              <template v-slot:append>
                <q-icon v-if="!showPass" @click="showPass = !showPass" name="visibility_off" />
                <q-icon v-if="showPass" @click="showPass = !showPass" name="visibility" />
              </template>
            </q-input>
          </ValidationProvider>
          <div align="center">
            <q-btn
              @click="handleSubmit(onSubmit)"
              label="Submit"
              type="submit"
              color="negative"
              outline
            />
          </div>
        </ValidationObserver>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      showPass:false
    };
  },
  methods: {
    onSubmit() {
      alert("nice");
    },
  },
};
</script>
