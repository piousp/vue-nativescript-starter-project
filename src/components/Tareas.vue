<template>
  <Page>
    <ActionBar title="Tareas"/>
    <ScrollView>
      <ListView for="item in lista" @itemTap="onItemTap" separator-color="#555555">
        <v-template>
          <StackLayout orientation="horizontal" class="tr">
            <Label horizontalAlignment="left" width="90%" :text="item.nombre" />
            <Label horizontalAlignment="right" width="10%" text="X" />
          </StackLayout>
        </v-template>
      </ListView>
    </ScrollView>
  </Page>
</template>
<script>
export default {
  data() {
    return {
      lista: [
        { nombre: "Mabelear los mabeles" },
        { nombre: "Tesalonizar los destesladizadores" },
        { nombre: "Hacer un PK Fire" },
        { nombre: "Derrotar a Hades" },
        { nombre: "Nada" },
      ],
    };
  },
  methods: {
    onItemTap,
  },
};

function onItemTap(evento) {
  console.log(evento.index);
  console.log(evento.item);
}
</script>
