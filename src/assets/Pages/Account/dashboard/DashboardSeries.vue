<template>
  <transition>
    <dashboard--panel></dashboard--panel>
    <div class="countiner"></div>
  </transition>
</template>

<script>
import DashboardPanel from "../../Shared/DashboardPanel.vue";
export default {
  components: {
    "dashboard--panel": DashboardPanel
  }
};
</script>

<style></style>
