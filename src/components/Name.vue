<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="6" class="justify-center">
        <v-card max-width="500" class="mx-auto">
          <v-toolbar color="green" dark>
            <v-toolbar-title>Names</v-toolbar-title>
          </v-toolbar>
          <v-list subheader two-line>
            <v-list-item v-for="name in names" :key="name">
              <v-list-item-avatar>
                <v-icon class="grey lighten-1" dark>mdi-account</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="pl-2">{{
                  name.name
                }}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="red" @click="removeName(name.name)"
                    >mdi-minus</v-icon
                  >
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";

export default Vue.extend({
  name: "Name",

  props: ["names"],

  data: () => ({}),

  methods: {
    ...mapActions(["deleteName"]),
    async removeName(name: string) {
      const responseName = await this.deleteName(name);
      alert(responseName);
      const namex = [{ name: responseName }];
      this.$data.names = namex;
    },
  },
});
</script>