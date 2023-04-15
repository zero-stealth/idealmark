<script setup>
import { ref } from 'vue'

const feedback = ref(null)
const errMessage = ref()
const phoneNumber = ref('+254722928160')

const sendMsg = () => {
  if (feedback.value != null ) {
    window.open(
      `https://wa.me/${phoneNumber.value}?text=
      *Message*: ${feedback.value}`,
      '_blank'
    )
  } else {
    errMessage.value = 'write something'
  }

  reset()
}

const reset = () => {
  feedback.value = ''
}
</script>

<template>
  <div class="feed-component">
    <div class="feed-h">
        <h1>LEAVE YOUR FEEDBACK / ENQUIRY</h1>
    </div>
    <div class="feed-card">
      <div class="feed-info">
        <textarea v-model="feedback"  placeholder="Tell us your about experience" class="feedback-msg"></textarea>
        <span>{{ errMessage }}</span>
        <button class="btn-feed" @click="sendMsg">Send</button>
      </div>
      <div class="feed-img">
        <!-- img -->
      </div>
    </div>
  </div>
</template>
<style>
@import '../style/FeedbackView.css';
</style>
