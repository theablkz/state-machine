
export function VALIDATE_USER_DATA(machine, form) {
  machine.state = 'validate_user_data'
  console.log('validate', machine.state, form)
  machine.run('SEND_USER_DATA')
}
export function SEND_USER_DATA(){
  console.log('SEND_USER_DATA')
}

export function VALIDATION_ERROR() {
  console.log('VALIDATION_ERROR')
}

export function FAIL_CONNECT_TO_SERVER() {
  console.log('FAIL_CONNECT_TO_SERVER')
}

export function USER_DATA_ERROR() {
  console.log('USER_DATA_ERROR')
}

export function VALIDATE_CARD_FORM() {
  console.log('VALIDATE_CARD_FORM')
}

export function VALIDATE_CARD_FORM_ERROR() {
  console.log('VALIDATE_CARD_FORM_ERROR')
}
export function SEND_CARD_FORM() {
  console.log('SEND_CARD_FORM')
}

export function SUCCESS() {
  console.log('SUCCESS')
}

export function CARD_FORM_ERROR() {
  console.log('CARD_FORM_ERROR')
}
