<template>
  <div id="app">
    <router-view></router-view>
    <divider>Horizontal</divider>
    <flexbox style="height:40px;">
      <flexbox-item><div class="flex-demo">1</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2</div></flexbox-item>
    </flexbox>
    <divider>Vertical</divider>
    <flexbox orient="vertical" :margin-left=0>
      <flexbox-item><div class="flex-demo" style="margin-left:0">1</div></flexbox-item>
      <flexbox-item><div class="flex-demo" style="margin-left:0">2</div></flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import Group from 'vux/src/components/group'
import Cell from 'vux/src/components/cell'
import Divider from 'vux/src/components/divider'
import {Flexbox, FlexboxItem} from 'vux/src/components/flexbox'

export default {
  data () {
     return {

     }
   },
  components: {
    Group,
    Cell,
    Flexbox,
    FlexboxItem,
    Divider
  }
}
</script>

<style>
@import '~vux/dist/vux.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.flex-demo {
  text-align: center;
  color: #fff;
  background-color: #20b907;
  margin-bottom: 8px;
  border-radius: 4px;
  -webkit-background-clip: padding-box;
}
</style>
