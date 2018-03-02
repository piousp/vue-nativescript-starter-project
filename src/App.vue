<template>
  <Page id="app">
    <ActionBar>
      <GridLayout>
        <StackLayout>
          <Label text="Home"></Label>
          <StackLayout class="hr"/>
          <Label text="Documentacion"></Label>
        </StackLayout>
      </GridLayout>
      <Image src="~/images/Ciris-color.png" height="50" verticalAlignment="center" />
    </ActionBar>

    <StackLayout class="fa">
        <Label text="Aplicación usando NativeScript-Vue y WebPack" />
    </StackLayout>
    <!--vue-progress-bar></vue-progress-bar>
    <router-view></router-view-->
  </Page>
</template>
<script src="./main.js"></script>
<style lang="scss">
#app {
  display: inline;
}
</style>
