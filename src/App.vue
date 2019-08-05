<template>
  <v-app id="app">
    <v-app-bar
      app clipped-left height="50"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="mr-3" />
      <span>이창영</span>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer" app clipped width="200"
    >
      <v-list dense>
        <v-list-item @click="$router.push('/profile')" :class="$router.currentRoute.path==='/profile'?'purple lighten-3':''">
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="$router.push('/resume')" :class="$router.currentRoute.path==='/resume'?'purple lighten-3':''">
          <v-list-item-action>
            <v-icon>mdi-file-document-box</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Resume</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component<App>({})
export default class App extends Vue {
  private drawer: boolean = true;
}
</script>
