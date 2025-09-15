import { mount } from "@vue/test-utils"
import { describe, expect, it } from "vitest"

import VtErrorIcon from "../../../../src/components/icons/VtErrorIcon.vue"

describe("VtErrorIcon", () => {
  it("matches snapshot", () => {
    const wrapper = mount(VtErrorIcon)
    expect(wrapper.element).toMatchSnapshot()
  })
})
