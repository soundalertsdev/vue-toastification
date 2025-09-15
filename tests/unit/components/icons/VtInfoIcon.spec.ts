import { mount } from "@vue/test-utils"
import { describe, expect, it } from "vitest"

import VtInfoIcon from "../../../../src/components/icons/VtInfoIcon.vue"

describe("VtInfoIcon", () => {
  it("matches snapshot", () => {
    const wrapper = mount(VtInfoIcon)
    expect(wrapper.element).toMatchSnapshot()
  })
})
