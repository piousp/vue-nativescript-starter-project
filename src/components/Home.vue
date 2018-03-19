<template>
  <Page>
    <ActionBar title="Home"/>
    <StackLayout class="home">
      <Button @tap="cerrarSesion" text="Cerrar Sesión"/>
    </StackLayout>
  </Page>
</template>
<script>

function cerrarSesion() {
  this.$auth.logout();
  this.$router.push({ name: "login" });
}

export default {
  methods: {
    cerrarSesion,
  },
};
</script>
