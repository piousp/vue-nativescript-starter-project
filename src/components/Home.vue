<template>
  <Page>
    <ActionBar title="Home"/>
    <StackLayout class="home">
      <Button @tap="$router.push('/counter')" text="Counter"></Button>
      <Button @tap="$router.push('/hello')" text="Hello World"></Button>
    </StackLayout>
  </Page>
</template>
<script>
</script>
