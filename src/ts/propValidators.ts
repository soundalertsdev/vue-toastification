/* eslint-disable @typescript-eslint/no-empty-function */
import type { ToastOptions } from "../types/toast"
import type { ToastContainerOptions } from "../types/toastContainer"

import { POSITION, VT_NAMESPACE, TYPE } from "./constants"
import { EventBus } from "./eventBus"

const defaultEventBus = new EventBus()
const emptyFunction = /* istanbul ignore next */ () => {}

export const TOAST_DEFAULTS: Required<Readonly<ToastOptions>> = {
  id: 0,
  accessibility: {
    toastRole: "alert",
    closeButtonLabel: "close",
  },
  bodyClassName: [],
  closeButton: "button",
  closeButtonClassName: [],
  closeOnClick: true,
  draggable: true,
  draggablePercent: 0.6,
  eventBus: defaultEventBus,
  hideProgressBar: false,
  icon: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  position: POSITION.TOP_RIGHT,
  rtl: false,
  showCloseButtonOnHover: false,
  timeout: 5000,
  toastClassName: [],
  onClick: emptyFunction,
  onClose: emptyFunction,
  type: TYPE.DEFAULT,
}

export const TOAST_CONTAINER_DEFAULTS: Required<
  Readonly<ToastContainerOptions>
> = {
  position: TOAST_DEFAULTS.position,
  container: document.body,
  containerClassName: [],
  eventBus: defaultEventBus,
  filterBeforeCreate: toast => toast,
  filterToasts: toasts => toasts,
  maxToasts: 20,
  newestOnTop: true,
  toastDefaults: {},
  transition: `${VT_NAMESPACE}__bounce`,
  defaultToastProps: /* istanbul ignore next */ {},
}
