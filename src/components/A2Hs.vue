<template>
  <div>
    <br v-if="deferredPrompt">
    <div class="row">
      <div class="col-10 offset-1">
        <p class="strburst-info">To keep your card available offline and save on data, add strBurst to your home
          screen</p>

      <button
        ref="addBtn"
        class="strburst-btn strburst-btn-primary"
        @click="clickCallback">
        Add to Home Screen
      </button>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'AddToHomeScreen',
  data: () => ({
    deferredPrompt: null,
  }),
  mounted () {
    this.captureEvent()
  },
  methods: {
    captureEvent () {
      window.addEventListener('beforeinstallprompt', (e) => {
        // ! Prevent Chrome 67 and earlier from automatically showing the prompt
        e.preventDefault()
        // Stash the event so it can be triggered later.
        this.deferredPrompt = e
      })
    },
    clickCallback () {
      // Show the prompt
      this.deferredPrompt.prompt()
      // Wait for the user to respond to the prompt
      this.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          // Call another function?
        }
        this.deferredPrompt = null
      })
    },
  },
}
</script>
<style>
.strburst-btn {
  font-size: 8pt;
  text-decoration-line: unset;
  padding: 6pt 15pt 6pt 15pt;
  color: #411347;
  border-radius: 24pt;
  border-style: solid;
  border-width: 1pt;
  border-color: #EF4060;
}

.strburst-btn-primary {
  color: white;
  font-size: 14pt;
  border-style: none;
  text-decoration-line: unset;
  background: #EF4060;
  max-width: 100%;
}

.strburst-info {
  color: #893494;
  font-size: 12pt;
}
</style>
