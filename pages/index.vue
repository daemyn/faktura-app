<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          {{ $t('greeting') }}
        </v-card-title>
        <v-card-text>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ducimus quis ex voluptatibus nihil! Temporibus alias eius, expedita ducimus quas eos sequi veritatis obcaecati harum quis, aliquid nisi corrupti dolorem.</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            :to="localePath('inspire')"
            color="primary"
            nuxt
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
