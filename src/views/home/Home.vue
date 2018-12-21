<template>
  <div>
    <b-container>
      <b-col>
        <b-row class="p-3">
          <h1>Dashboards</h1>
        </b-row>
        <b-row>
          <b-card-group deck>
            <Tile
              v-for="dashboard in dashboards"
              v-bind:key="dashboard.id"
              v-bind:name="dashboard.name"
              v-bind:id="dashboard.id"
              v-bind:type="dashboard.type"
            ></Tile>
          </b-card-group>
        </b-row>
        <b-row class="p-3">
          <h1>Playgrounds</h1>
        </b-row>
        <b-row>
          <b-card-group deck>
            <Tile
              v-for="playground in playgrounds"
              v-bind:key="playground.id"
              v-bind:name="playground.name"
              v-bind:id="playground.id"
              v-bind:type="playground.type"
            ></Tile>
          </b-card-group>
        </b-row>
      </b-col>
    </b-container>
  </div>
</template>

<script lang="ts" src="./home.ts"></script>
<style lang="scss" src="./home.scss"></style>