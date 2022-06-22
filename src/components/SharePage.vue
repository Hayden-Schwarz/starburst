<template>
  <teleport to="body">
    <transition
      enter-active-class="transition ease-out duration-200 transform"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200 transform"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0">
      <div
        ref="modal-backdrop"
        class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50"
        v-show="showModal">
        <div
          ref="modal-backdrop"
          class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50"
          v-if="showModal">
          <div
            class="flex items-start justify-center min-h-screen pt-24 text-center"
          >
            <div
              class="bg-white rounded-lg text-center overflow-hidden shadow-xl p-8 w-3/4"
              role="dialog"
              ref="modal"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div>
                <div class="share-header">
                  <p>Tell your friends and share the joy!</p>
                  <br>
                </div>
                <p class="btn strburst-share inline" style="background-color: #25d366">
                <s-whats-app :share-options="social.whatsapp">
                  <b-icon-whatsapp class="inline"></b-icon-whatsapp>&nbsp;WhatsApp
                </s-whats-app>
                </p>
                <br>
                <p class="btn strburst-share inline" style="background-color: lightgray">
                <s-sms :share-options="social.sms">
                  <b-icon-chat-dots class="inline"></b-icon-chat-dots>&nbsp;SMS
                </s-sms>
                </p>
                <br>
                <p class="btn strburst-share inline" style="background-color: antiquewhite">
                <s-email :share-options="social.email">
                  <b-icon-envelope class="inline"></b-icon-envelope>&nbsp;Email
                </s-email>
                </p>
                <br>
                <p class="btn strburst-share inline" style="background-color: #1877f2">
                <s-facebook :share-options="social.facebook">
                  <b-icon-facebook class="inline" />&nbsp;Facebook
                </s-facebook>
                </p>
                <!--                <s-pinterest></s-pinterest>-->

              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
import { ref, watch } from 'vue'
import useClickOutside from '@/composables/useClickOutside'

const props = {
  show: {
    type: Boolean,
    default: false,
  },
}

export default {
  name: 'SharePage',
  props,
  setup (props) {
    const showModal = ref(false)
    const modal = ref(null)
    const { onClickOutside } = useClickOutside()
    const sharing = {
      url: 'https://strburst.co.za',
      title: 'Find specials with StrBurst',
      description: 'Find specials with StrBurst',
      quote: 'Find specials with StrBurst',
      // hashtags: 'vuejs,vite,javascript',
      // twitterUser: 'youyuxi'
    }
    const social = {
      email: {
        'subject': 'Save with strBurst',
        'body': 'Visit ' + sharing.url
      },
      facebook: {
        url: sharing.url,
        quote: sharing.quote,
        color: '#1877f2'

      },
      messenger: {
        url: sharing.url,
//      redirectUri: 'https://www.domain.com/',
//      appId: 123456789,
        to: undefined,
      },
      pintrest: {
        url: sharing.url,
        media: '',
        description: sharing.description
      },
      whatsapp: {
        text: sharing.title + ' ' + sharing.url + ' ' + sharing.description
      },
      sms: {
        body: sharing.title + ' ' + sharing.url
      }
    }

    watch(
      () => props.show,
      show => {
        showModal.value = show
      },
    )
    onClickOutside(modal, () => {
      if (showModal.value === true) {
        closeModal()
      }
    })

    function closeModal () {
      showModal.value = false
    }

    return {
      showModal,
      closeModal,
      modal,
      social,
      sharing
    }
  },
  methods: {
    hide () {
      console.log('click registered')
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.strburst-share{
  padding: 2pt;
  border-style: none;
}
</style>
