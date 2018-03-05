<template>
  <Page>
    <ActionBar title="Home"/>
    <StackLayout class="home">
      <Button @tap="$router.push('/counter')" text="Counter"/>
      <Button @tap="$router.push('/hello')" text="Hello"/>
    </StackLayout>
  </Page>
</template>
