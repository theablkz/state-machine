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
} from './controller'

export const Transition = {
  idle: {
    VALIDATE_USER_DATA,
  },
  validate_user_data: {
    SEND_USER_DATA,
    VALIDATION_ERROR,
  },
  send_user_data: {
    FAIL_CONNECT_TO_SERVER,
    USER_DATA_ERROR,
    CARD_FORM,
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

export class Machine {
  constructor(transitions) {
    this.state = 'idle'
    this.transitions = transitions
    this.component = () => import('~/components/userForm')
    this.userForm = userForm
  }
  run(action, form) {
    const transitions = this.transitions[this.state]
    if (transitions && transitions.hasOwnProperty(action)) {
      transitions[action](this, form)
    }
  }
}
