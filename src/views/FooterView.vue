<script setup>
import { ref } from 'vue'
import phoneIcon from '../components/icons/phone.vue'
import emailIcon from '../components/icons/email.vue'
import locationIcon from '../components/icons/location.vue'
import twitterIcon from '../components/icons/twitter.vue'
import whatsappIcon from '../components/icons/whatsapp.vue'
import instagramIcon from '../components/icons/instagram.vue'
import facebookIcon from '../components/icons/facebook.vue'

const booknow = ref(null)
const errMessage = ref()
const phoneNumber = ref('+254722928160')

const book = () => {
  if (booknow.value != null) {
    window.open(
      `https://wa.me/${phoneNumber.value}?text=
      *Message*: ${booknow.value}`,
      '_blank'
    )
  } else {
    errMessage.value = 'write something'
  }

  reset()
}

const reset = () => {
  booknow.value = ''
}
</script>
<template>
  <div class="contact-contain">
    <div class="contact-wrapper">
      <div class="contact-d1">
        <h1>Contact information</h1>
        <p>If you have any questions or need help, feel free to contact with our team.</p>
        <div class="d1-contact">
          <div class="d1-icon">
            <phoneIcon class="icon-d1" />
            <span>+254722928160</span>
          </div>
          <div class="d1-icon">
            <emailIcon class="icon-d1" />
            <span>ceoidealmarkconsultants@gmail.com</span>
          </div>
        </div>
        <p>We are located in Busia, Amukura House 2nd floor room 3</p>
        <p>
          Address: P.O.Box 77 <br />
          Postal Code: 50400 <br />
          BUSIA (K)
        </p>
        <div class="d1-icon">
          <locationIcon class="icon-d1" />
          <span> GET DIRECTIONS</span>
        </div>
      </div>
      <div class="contact-d2">
        <h1>Ouick links</h1>
        <a href="#Home" class="item-link">Home</a>
        <a href="#About" class="item-link">About us</a>
        <a href="#Services" class="item-link">Services</a>
        <a href="#Contact" class="item-link">Contact us</a>
      </div>
      <div class="contact-d3">
        <h1>Book with us</h1>
        <p>Book our service or consultancy in advance</p>
        <form @submit.prevent="book()" class="book-f">
          <div class="book-con">
            <div class="con-s">
              <emailIcon class="book-icon" />
              <input v-model="booknow" class="input-book" placeholder="Company email" />
            </div>
            <button type="submit" class="book-btn">Book now</button>
          </div>
        </form>
        <div class="book-social">
          Social media:
          <facebookIcon class="bk-icon" />
          <twitterIcon class="bk-icon" />
          <whatsappIcon class="bk-icon" />
          <instagramIcon class="bk-icon" />
        </div>
      </div>
    </div>
    <div class="footer-x">
        <span>©Idealmarketconsultancy@2023</span>
        <span>Faq  Terms and Services Refund Policy</span>
    </div>
  </div>
</template>
<style>
@import '../style/FooterView.css';
</style>
