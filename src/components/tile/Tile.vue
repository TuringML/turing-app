<template>
  <b-card id="tile" class="text-center" v-on:click="open()">
    <h4 class="card-text">{{ name }}</h4>
  </b-card>
</template>

<script lang="ts" src="./tile.ts"></script>
<style lang="scss" src="./tile.scss"></style>