<template>
  <nav
    :class="{sidebar: true, sidebarStatic, sidebarOpened}"
    @mouseenter="sidebarMouseEnter"
    @mouseleave="sidebarMouseLeave"
  >
    <header class="logo">
      <router-link to="/app">
        <span class="text-warning">Sing</span> App
      </router-link>
    </header>
    <ul class="nav">
      <NavLink
        header="Dashboard"
        link="/app/dashboard"
        iconName="flaticon-home"
        index="dashboard"
        isHeader
      />
    </ul>
    <p></p>
  </nav>
</template>

<script>
  import { mapState, mapActions } from "vuex";
  import isScreen from "@/core/screenHelper";
  import NavLink from "./NavLink/NavLink";

  export default {
    name: "Sidebar",
    components: { NavLink },
    data() {
      return {};
    },
    methods: {
      ...mapActions("layout", ["changeSidebarActive", "switchSidebar"]),
      setActiveByRoute() {
        const paths = this.$route.fullPath.split("/");
        paths.pop();
        this.changeSidebarActive(paths.join("/"));
      },
      sidebarMouseEnter() {
        if (!this.sidebarStatic && (isScreen("lg") || isScreen("xl"))) {
          this.switchSidebar(false);
          this.setActiveByRoute();
        }
      },
      sidebarMouseLeave() {
        if (!this.sidebarStatic && (isScreen("lg") || isScreen("xl"))) {
          this.switchSidebar(true);
          this.changeSidebarActive(null);
        }
      }
    },
    created() {
      this.setActiveByRoute();
    },
    computed: {
      ...mapState("layout", {
        sidebarStatic: state => state.sidebarStatic,
        sidebarOpened: state => !state.sidebarClose,
        activeItem: state => state.sidebarActiveElement
      })
    }
  };
</script>

<!-- Sidebar styles should be scoped -->
<style src="./Sidebar.scss" lang="scss" scoped/>
