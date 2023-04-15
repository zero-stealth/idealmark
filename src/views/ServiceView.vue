<script setup>
import { ref } from 'vue'
import m1 from '../assets/image/image7.jpg'
import m2 from '../assets/image/image10.jpg'
import r1 from '../assets/image/image3.jpg'
import s1 from '../assets/image/image2.jpg'
import s2 from '../assets/image/image16.jpg'
import I1 from '../assets/image/image18.png'
import I2 from '../assets/image/image9.jpg'
import rv1 from '../assets/image/image4.jpg'
import rv2 from '../assets/image/image6.jpg'
import g1 from '../assets/image/image5.jpg'
import g2 from '../assets/image/image1.jpg'
import g3 from '../assets/image/image1.jpg'

const defaultMarketing = ref(m1)
const defaulResearch = ref(r1)
const defaulSite = ref(s1)
const defaulInvestment = ref(I1)
const defaulResearchv = ref(rv1)
const defaulGuide = ref(g1)

let marketingImage = ref([])
let researchImage = ref([])
let siteImage = ref([])
let investmenImage = ref([])
let researchvImage = ref([])
let guideImage = ref([])

// change background image every 5 sec
marketingImage = [
  {
    image: m1
  },
  {
    image: m2
  }
]

setInterval(() => {
  defaultMarketing.value = marketingImage[Math.floor(Math.random() * marketingImage.length)].image
}, 100000)

researchImage = [
  {
    image: r1
  }
]

setInterval(() => {
  defaulResearch.value = researchImage[Math.floor(Math.random() * researchImage.length)].image
}, 100000)

siteImage = [
  {
    image: s1
  },
  {
    image: s2
  }
]

setInterval(() => {
  defaulSite.value = siteImage[Math.floor(Math.random() * siteImage.length)].image
}, 100000)

investmenImage = [
  {
    image: I1
  },
  {
    image: I2
  }
]

setInterval(() => {
  defaulInvestment.value = investmenImage[Math.floor(Math.random() * investmenImage.length)].image
}, 100000)

researchvImage = [
  {
    image: rv1
  },
  {
    image: rv2
  }
]

setInterval(() => {
  defaulResearchv.value = researchvImage[Math.floor(Math.random() * researchvImage.length)].image
}, 100000)

guideImage = [
  {
    image: g1
  },
  {
    image: g2
  },
  {
    image: g3
  }
]

setInterval(() => {
  defaulGuide.value = guideImage[Math.floor(Math.random() * guideImage.length)].image
}, 100000)
</script>

<template>
  <div class="service-container">
    <div class="service-h">
      <h1>Case Studies Services Earlier Offered</h1>
    </div>
    <div class="service-card-wrapper">
      <!-- end -->
      <div class="service-card">
        <div class="card-image" :style="{ backgroundImage: `url(${defaultMarketing})` }">
          <!-- image -->
          <div class="card-detail">Marketing</div>
        </div>
        <div class="card-info">
          <h1>Marketing services</h1>
          <p>
            For new and existing products, we market different products on behalf of our clients
            within Africa (East African Countries).
          </p>
        </div>
      </div>
      <!-- end -->
      <div class="service-card">
        <div class="card-image" :style="{ backgroundImage: `url(${defaulResearch})` }">
          <!-- image -->
          <div class="card-detail">Research</div>
        </div>
        <div class="card-info">
          <h1>Product and Market research</h1>
          <p>
            To enable our clients compete effectively, we carry initial market research to determine
            where to sell, whom to sell to and at what cost on behalf of our clients.
          </p>
        </div>
      </div>
      <!-- end -->
      <div class="service-card">
        <div class="card-image" :style="{ backgroundImage: `url(${defaulSite})` }">
          <!-- image -->
          <div class="card-detail">Site visit guide</div>
        </div>
        <div class="card-info">
          <h1>Turnkey project and Machinery projects</h1>
          <p>
            Some of our clients are in machinery manufacturing ranging from sugar industries,
            Distilleries, Water treatment Plants, Waste Management, Food processing, Boilers,
            Breweries, Beverage production and processing lines, Machine spare and spare parts etc
            <br />
            We link suppliers to customers/customer to suppliers and manufacturers.
          </p>
        </div>
      </div>
      <!-- end -->
      <div class="service-card">
        <div class="card-image" :style="{ backgroundImage: `url(${defaulInvestment})` }">
          <!-- image -->
          <div class="card-detail">Investment guidance</div>
        </div>
        <div class="card-info">
          <h1>Investment opportunity guidance</h1>
          <p></p>
        </div>
      </div>
      <!-- end -->
      <div class="service-card">
        <div class="card-image" :style="{ backgroundImage: `url(${defaulResearchv})` }">
          <!-- image -->
          <div class="card-detail">Site visit & research</div>
        </div>
        <div class="card-info">
          <h1>Business site visits, Product and Market Research</h1>
          <p></p>
        </div>
      </div>
      <!-- end -->
      <div class="service-card">
        <div class="card-image" :style="{ backgroundImage: `url(${defaulGuide})` }">
          <!-- image -->
          <div class="card-detail">site visit guide</div>
        </div>
        <div class="card-info">
          <h1>Guiding Services</h1>
          <p>
            For new and non Africans, who wish to visit Africa continent, we offer guiding services
            such as business tour or official visits to their respective industries.
          </p>
          <p>
            Apart from having the right documentation, we accompany them in all their scheduled
            visit within the respective African countries to ensure their safety movement to and fro
            new places and market. We book their itinerary.
          </p>
        </div>
      </div>
      <!-- end -->
    </div>
  </div>
</template>
<style>
@import '../style/ServiceView.css';
</style>
