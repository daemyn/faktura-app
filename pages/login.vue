<template>
  <v-card class="elevation-12">
    <v-toolbar
      color="primary"
      dark
      flat
    >
      <v-toolbar-title>
        <v-icon>
          person
        </v-icon>
        Login form
      </v-toolbar-title>
      <v-spacer />
    </v-toolbar>
    <v-card-text>
      <v-form v-model="isValid">
        <v-text-field
          v-model="email"
          :rules="[v => !!v || 'Email is required']"
          label="Email"
          name="email"
          prepend-icon="email"
          type="text"
          required
        />

        <v-text-field
          id="password"
          v-model="password"
          :rules="[v => !!v || 'Password is required']"
          label="Password"
          name="password"
          prepend-icon="lock"
          type="password"
          required
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn
        :disabled="!isValid"
        color="primary"
      >
        Login
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  layout: 'centered',
  data: () => ({
    email: null,
    password: null,
    isValid: true
  })
}
</script>
