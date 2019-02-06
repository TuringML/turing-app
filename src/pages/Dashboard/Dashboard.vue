<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item>YOU ARE HERE</b-breadcrumb-item>
      <b-breadcrumb-item active>Dashboard</b-breadcrumb-item>
    </b-breadcrumb>
    <h1 class="page-title">Dashboard</h1>
  </div>
</template>

<script>
  import $ from "jquery";
  /* eslint-disable */
  import "imports-loader?jQuery=jquery,this=>window!flot";
  import "imports-loader?jQuery=jquery,this=>window!flot/jquery.flot.pie";
  /* eslint-enable */
  import Widget from "@/components/Widget/Widget";

  export default {
    name: "Dashboard",
    components: { Widget },
    data() {
      return {};
    },
    methods: {},
    mounted() {
      window.addEventListener("resize", this.initChart);
    }
  };
</script>

<style src="./Dashboard.scss" lang="scss" scoped />
