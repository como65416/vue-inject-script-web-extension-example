<template>
  <span style="width:100%;height:100%;">
    <el-drawer
      title="Demo Drawer"
      :visible.sync="drawer"
      direction="ltr">
    </el-drawer>
    <el-button
      class="fixed-postion"
      type="primary"
      icon="el-icon-more"
      @click="openDrawer"
      circle>
    </el-button>
  </span>
</template>

<style scoped>
  .fixed-postion {
    position: fixed;
    left: 20px;
    top: 20px;
  }
</style>

<script>
  export default {
    data() {
      return {
        drawer: false
      }
    },
    methods : {
      openDrawer: function () {
        this.drawer = true;
      }
    },
    components: {
    },
    mounted: function () {
    }
  };
</script>
