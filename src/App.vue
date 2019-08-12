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
        <v-list-item @click="viewMode='profile'" :class="viewMode==='profile'?'purple lighten-3':''">
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="viewMode='resume'" :class="viewMode==='resume'?'purple lighten-3':''">
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
      <profile v-if="viewMode === 'profile'" />
      <resume v-if="viewMode === 'resume'" />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Profile from '@/views/Profile.vue';
import Resume from '@/views/Resume.vue';

@Component<App>({
  components: {
    Profile,
    Resume,
  },
})
export default class App extends Vue {
  private drawer: boolean = true;
  private viewMode: string = 'profile';
}
</script>
