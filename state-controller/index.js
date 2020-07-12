import {
  VALIDATE_USER_DATA,
  SEND_USER_DATA,
  VALIDATION_ERROR,
  FAIL_CONNECT_TO_SERVER,
  USER_DATA_ERROR,
  CARD_FORM,
  VALIDATE_CARD_FORM,
  VALIDATE_CARD_FORM_ERROR,
  SEND_CARD_FORM,
  SUCCESS,
  CARD_FORM_ERROR,
  GO_BACK
} from './controller'

export const Transition = {
  idle: {
    VALIDATE_USER_DATA,
  },
  validate_user_data: {
    SEND_USER_DATA,
    VALIDATION_ERROR,
  },
  validate_user_data_error: {
    VALIDATE_USER_DATA
  },
  send_user_data: {
    FAIL_CONNECT_TO_SERVER,
    USER_DATA_ERROR,
    CARD_FORM,
  },
  fail_connect_to_server: {
    GO_BACK,
    SEND_USER_DATA
  },
  card_form: {
    VALIDATE_CARD_FORM,
  },
  validate_card_form: {
    SEND_CARD_FORM,
    VALIDATE_CARD_FORM_ERROR,
  },
  send_card_form: {
    SUCCESS,
    CARD_FORM_ERROR,
  },
  success: null,
}

const userForm = [
  { id: 'phone', value: '', validation: 'phone', error: false },
  { id: 'amount', value: '', validation: 'notNull', error: false },
]
const cardForm = [
  { id: 'card', value: '', validation: 'notNull', error: false },
]

export class Machine {
  userFormResponse = {}
  constructor(transitions) {
    this.state = 'idle'
    this.transitions = transitions
    this.component = () => import('~/components/userForm')
    this.userForm = userForm
    this.cardForm = cardForm
  }
  run(action, form) {
    const transitions = this.transitions[this.state]
    if (transitions && transitions.hasOwnProperty(action)) {
      transitions[action](this, form)
    }
  }
}
