<template>
  <v-app>
    <v-container fill-height>
      <v-row align="center" justify="center">
        <v-col cols="12" class="justify-center">
          <v-row align="center" justify="center">
            <v-col cols="6" class="justify-center">
              <v-card width="500px">
                <v-card-title>
                  <h1>Name Finder</h1>
                </v-card-title>
                <v-card-text>
                  <v-form>
                    <v-text-field label="Name" outlined v-model="nameInput" />
                  </v-form>
                </v-card-text>
              </v-card>
              <v-card-actions>
                <v-btn color="success" @click="findName(nameInput)">Find</v-btn>
                <v-btn color="success" @click="addName(nameInput)">Add</v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
          <Name :names="names"></Name>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Name from "./components/Name.vue";
import { mapActions } from "vuex";
import axios from "axios";

export default Vue.extend({
  name: "App",

  components: {
    Name,
  },

  data: () => ({
    names: [],
  }),

  methods: {
    ...mapActions(["getName"]),
    async findName(name: string) {
      const responseName = await this.getName(name);
      const namex = [{ name: responseName.data.name }];
      this.$data.names = namex;
    },
    ...mapActions(["insertName"]),
    async addName(name: string) {
      const responseName = await this.insertName(name);
      alert(responseName);
      const namex = [{ name: responseName }];
      this.$data.names = namex;
    },
  },
});
</script>