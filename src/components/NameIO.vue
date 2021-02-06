<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="display-2 font-weight-bold mb-3">CRUD</h1>
        <form>
          <v-row class="text-center">
            <v-col cols="12">
              <label>Enter name: </label>
              <input class="border" type="text" />
            </v-col>
            <v-col cols="12">
              <button class="border">Enter</button>
            </v-col>
          </v-row>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",

  data: () => ({}),
});
</script>

<style lang="scss">
.border {
  border-style: solid;
}
</style>
