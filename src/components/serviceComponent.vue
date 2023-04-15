<script setup>
import trustedIcon from '../components/icons/Trusted.vue'
import partnerIcon from '../components/icons/partnership.vue'
import experienceIcon from '../components/icons/experience.vue'
import clientIcon from '../components/icons/Clients.vue'
import affordableIcon from '../components/icons/affordable.vue'
</script>
<template>
  <div class="s-component">
    <div class="s-component-wrapper">
      <partnerIcon class="s-icon-comp" />
      <h1>Over 10 years</h1>
      <p>of partnership</p>
    </div>
    <div class="s-component-wrapper">
      <experienceIcon class="s-icon-comp" />
      <h1>Over 10 years</h1>
      <p>of experience</p>
    </div>
    <div class="s-component-wrapper">
      <trustedIcon class="s-icon-comp" />
      <h1>Trusted</h1>
      <p>by all our clients</p>
    </div>
    <div class="s-component-wrapper">
      <affordableIcon class="s-icon-comp" />
      <h1>Affordable</h1>
      <p>for both party convenience</p>
    </div>
    <div class="s-component-wrapper">
      <clientIcon class="s-icon-comp" />
      <h1>Clients</h1>
      <p>client linkage to all African countries with other continents</p>
    </div>
  </div>
</template>
<style>
@import '../style/serviceComponent.css';
</style>
