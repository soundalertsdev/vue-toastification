<template>
  <component
    :is="buttonComponent"
    :aria-label="ariaLabel"
    :class="classes"
    v-bind="$attrs"
  >
    &times;
  </component>
</template>

<script lang="ts" setup>
import { computed, PropType } from "vue"

import { VT_NAMESPACE } from "../ts/constants"
import { TOAST_DEFAULTS } from "../ts/propValidators"
import { getVueComponentFromObj } from "../ts/utils"

import type { ClassNames, Button } from "../types/common"

const props = defineProps({
  component: {
    type: [String, Object, Boolean] as PropType<Button>,
    default: TOAST_DEFAULTS.closeButton,
  },
  classNames: {
    type: [String, Array] as PropType<ClassNames>,
    default: TOAST_DEFAULTS.closeButtonClassName,
  },
  ariaLabel: {
    type: String,
    default: TOAST_DEFAULTS.accessibility["closeButtonLabel"],
  },
  showOnHover: {
    type: Boolean,
    default: TOAST_DEFAULTS.showCloseButtonOnHover,
  },
})

const buttonComponent = computed(() => {
  if (props.component !== false) {
    return getVueComponentFromObj(props.component)
  }
  return "button"
})
const classes = computed(() => {
  const classes = [`${VT_NAMESPACE}__close-button`]
  if (props.showOnHover) {
    classes.push("show-on-hover")
  }
  return classes.concat(props.classNames)
})
</script>
