<template>
  <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand>TuringML</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav></b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right no-caret>
          <template slot="button-content">
            <avatar :username="username"></avatar>
          </template>
          <b-dropdown-item href="#">Account</b-dropdown-item>
          <b-dropdown-item href="#">Logout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts" src="./header.ts"></script>
<style lang="scss" src="./header.scss"></style>