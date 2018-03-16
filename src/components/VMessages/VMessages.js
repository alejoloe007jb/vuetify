// Styles
import '../../stylus/components/_messages.styl'

// Mixins
import Colorable from '../../mixins/colorable'

export default {
  name: 'v-messages',

  mixins: [Colorable],

  props: {
    messages: {
      type: Array,
      default: () => ([])
    },
    value: {
      default: true
    }
  },

  computed: {
    classes () {
      return this.addTextColorClassChecks()
    }
  },

  methods: {
    genChildren () {
      if (!this.value) return null

      const children = this.messages.map(m => this.genMessage(m))

      return this.$createElement('transition-group', {
        staticClass: 'v-messages__wrapper',
        props: {
          name: 'slide-y-transition',
          tag: 'div'
        }
      }, children)
    },
    genMessage (key) {
      return this.$createElement('div', {
        staticClass: 'v-messages__message',
        key
      }, key)
    }
  },

  render (h) {
    return h('div', {
      staticClass: 'v-messages',
      'class': this.classes
    }, [this.genChildren()])
  }
}
