<template>
  <v-app id="app">
    <v-navigation-drawer
      app width="200" permanent
      :expand-on-hover="$vuetify.breakpoint.smAndDown"
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="img/profile.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">이창영</v-list-item-title>
            <v-list-item-subtitle>chang0022@snu.ac.kr</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider />
      <v-list dense>
        <v-list-item @click="viewMode='resume'" :class="viewMode==='resume'?'purple lighten-3':''">
          <v-list-item-action>
            <v-icon>mdi-account-card-details</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Resume</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="viewMode='portfolio'" :class="viewMode==='portfolio'?'purple lighten-3':''">
          <v-list-item-action>
            <v-icon>mdi-file-document-box</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Portfolio</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <resume v-if="viewMode === 'resume'" />
      <portfolio v-if="viewMode === 'portfolio'" />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Resume from '@/views/Resume.vue';
import Portfolio from '@/views/Portfolio.vue';

@Component<App>({
  components: {
    Resume,
    Portfolio,
  },
})
export default class App extends Vue {
  private viewMode: string = 'resume';
}
</script>
