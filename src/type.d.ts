export type CallbackALL =
  | CallbackMessageEvent
  | CallbackCloseEvent
  | CallbackEvent

export type CallbackMessageEvent = (event: MessageEvent) => any

export type CallbackCloseEvent = (event: CloseEvent) => any

export type CallbackEvent = (event: Event) => any
