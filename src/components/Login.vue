<template>
  <Page>
    <ActionBar title="Login"/>
    <GridLayout>
      <ScrollView>
        <StackLayout class="login">
          <StackLayout class="form login-form">
            <StackLayout class="input-field">
              <Label text="Email" class="label font-weight-bold"/>
              <TextField class="input" v-model="email"/>
              <StackLayout class="hr-light"/>
            </StackLayout>
            <StackLayout class="input-field">
              <Label text="Password" class="label font-weight-bold"/>
              <TextField secure="true" class="input" v-model="password"/>
              <StackLayout class="hr-light"/>
            </StackLayout>
            <Button class="btn btn-primary w-full" text="Iniciar Sesión" @tap="login(email, password)"/>
          </StackLayout>
        </StackLayout>
      </ScrollView>
    </GridLayout>
  </Page>
</template>

<script>

function data() {
  return {
    email: null,
    password: null,
  };
}

function login(email, password) {
  this.$auth.login(email, password)
    .then(() => {
      this.$router.replace({ name: "home" });
    })
    .catch(err => err);
}

export default {
  data,
  methods: {
    login,
  },
};
</script>

<style lang="scss">
.login {
  margin: 10;
  vertical-align: center;
}
.login-form {
  padding: 15;
  background-color: #FFFFFF;
}
</style>
