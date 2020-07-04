import Validation from 'silk-way-validate/index'
export function VALIDATE_USER_DATA(machine, form) {
  console.log('VALIDATE_USER_DATA')
  machine.state = 'validate_user_data'
  form.forEach((item) => {
    item.error = !Validation.validate(item.validation, item.value, '').isValid
  })
  if (!form.some((item) => item.error)) {
    machine.run('SEND_USER_DATA')
    return
  }
  machine.run('VALIDATION_ERROR')
}
export function SEND_USER_DATA() {
  console.log('SEND_USER_DATA')
}

export function CARD_FORM() {
  console.log('CARD_FORM')
}

export function VALIDATION_ERROR(machine) {
  machine.state = 'idle'
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
