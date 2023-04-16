<script setup>
import { ref } from 'vue'
import logo from '../assets/logo.png'
import aboutPage from '../views/AboutView.vue'
import inicon from '../components/icons/in.vue'
import servicePage from '../views/ServiceView.vue'
import contactPage from '../views/FooterView.vue'
import idealView from '../views/AboutIdealView.vue'
import menuIcon from '../components/icons/menu.vue'
import exitIcon from '../components/icons/exit.vue'
import arrowIcon from '../components/icons/arrow.vue'
import testimonyPage from '../views/TestimonyView.vue'
import feedbackPage from '../views/FeedbackView.vue'
import client from '../components/clientComponent.vue'
import service from '../components/serviceComponent.vue'
import twitterIcon from '../components/icons/twitter.vue'
import whatsappIcon from '../components/icons/whatsapp.vue'
import instagramIcon from '../components/icons/instagram.vue'
import facebookIcon from '../components/icons/facebook.vue'

const isOpen = ref(false)
const openWhatsapp = () => {
  window.open('https://wa.me/+254722928160?text=How can i help',
      '_blank')
}

const openFacebook = () => {
  window.location.href = ''
}

const openTwitter = () => {
  window.location.href = ''
}

const openInstagram = () => {
  window.location.href = ''
}

const openIn = () => {
  window.location.href = ''
}

const showMenu = () => {
  isOpen.value = !isOpen.value

  console.log(isOpen.value)
}
</script>
<template>
  <div class="home-container">
    <div class="nav-first">
      <div class="nav-social">
        <div class="social-wrapper" @click="openWhatsapp">
          <whatsappIcon class="social-icon" />
        </div>
        <div class="social-wrapper" @click="openTwitter">
          <twitterIcon class="social-icon" />
        </div>
        <div class="social-wrapper" @click="openFacebook">
          <instagramIcon class="social-icon" />
        </div>
        <div class="social-wrapper" @click="openInstagram">
          <facebookIcon class="social-icon" />
        </div>
        <div class="social-wrapper" @click="openIn">
          <inicon class="social-icon" />
        </div>
      </div>
      <div class="nav-contact">
        <div class="contact-nav">
          <h1>Phone number</h1>
          <span>+254 722 928160</span>
        </div>
        <div class="contact-nav">
          <h1>Free Consultancy / Enquiries:</h1>
          <span>ceoidealmarkconsultants@gmail.com</span>
        </div>
      </div>
    </div>
    <div class="nav-second">
      <div class="nav-logo">
        <img :src="logo" alt="logo" class="logo" />
      </div>
      <div class="nav-items">
        <a href="#Home" class="item-link">Home</a>
        <a href="#About" class="item-link">About us</a>
        <a href="#Services" class="item-link">Services</a>
        <a href="#Contact" class="item-link">Contact us</a>
      </div>
      <div class="menu">
        <menuIcon class="icon-menu" @click="showMenu()" />
        <div class="menu-items" :class="[isOpen != false ? 'open' : 'close']">
          <div class="exit-m">
            <exitIcon class="icon-exit" @click="showMenu()" />
          </div>
          <div class="menu-links">
            <a href="#Home" class="item-link">Home</a>
            <a href="#About" class="item-link">About us</a>
            <a href="#Services" class="item-link">Services</a>
            <a href="#Contact" class="item-link">Contact us</a>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-nav" id="Home">
      <div class="hero-img">
        <img :src="logo" alt="logo" class="hero-logo" />
        <span>Delivering Our Best</span>
      </div>
      <div class="hero-info">
        <h1>
          One stop business solutions for <span>Marketing</span> and <span>Consultancy</span> needs
        </h1>
      </div>
      <div class="hero-btn">
        <a class="btn btn-services" href="#Services">
          Our Services
          <arrowIcon class="arrow-i" />
        </a>
        <a class="btn btn-touch" href="#Contact">
          Get In Touch
          <arrowIcon class="arrow-i" />
        </a>
      </div>
    </div>
  </div>
  <div>
    <aboutPage id="About" />
  </div>
  <div>
    <client />
  </div>
  <div>
    <idealView />
  </div>
  <div>
    <servicePage id="Services" />
  </div>
  <div>
    <service />
  </div>
  <div>
    <testimonyPage />
  </div>
  <div>
    <feedbackPage/>
  </div>
  <div>
    <contactPage id="Contact" />
  </div>
</template>
<style>
@import '@/style/HomeView.css';
</style>
