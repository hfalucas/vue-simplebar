<template>
  <div>
    <simplebar-vue ref="scroll" class="container">
      <p v-text="content"></p>
    </simplebar-vue>
  </div>
</template>

<script>
export default {
    data: () =>({
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
    })
}
</script>

<style>
.container {
    position: relative !important;
    width: 430px !important;
    max-height: 140px !important;
    margin: 40px auto 0 auto;
}
</style>
