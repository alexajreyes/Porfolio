import FieldText from 'component/FieldText'
import FieldTextArea from 'component/FieldArea'
import React from 'react'
import { Wrapper, ContainerForm, ConatinerImg } from './style'
import emailjs from '@emailjs/browser'
import Button from 'component/Button'
import ImageContact from 'assets/icons/People collaborating (1) 1.svg'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Typography } from 'component/Typography'

const Contact = () => {
  const sendEmail = event => {
    event.preventDefault()

    emailjs
      .sendForm(
        'service_k044dfq',
        'template_1wbutrf',
        event.target,
        'nWiU9d1ezIM9fSwXG'
      )
      .then(response => {
        if (response.status === 200) {
          toast.success('👍 Se envio correctamente tu mensaje', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        }
      })
      .catch(error => {
        if (error) {
          toast.error('☹️	!Ups, algo salio mal', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        }
      })
  }
  return (
    <Wrapper id="contact">
      <ContainerForm>
        <Typography mb="16px" variant="title4" value="¿Creamos algo Juntos?" />
        <Typography
          variant="Body"
          mb="32px"
          value="Trabajemos juntos y hagamos que todo sea súper lindo y súper útil."
        />

        <form onSubmit={sendEmail}>
          <FieldText placeholder="Nombre" name="user_name" />

          <FieldText placeholder="Correo" name="user_email" />
          <FieldTextArea placeholder="Mensaje" name="user_message" />
          <Button mt="16px" width="328px" variant="filled">
            Enviar
          </Button>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </form>
      </ContainerForm>
      <ConatinerImg>
        <img src={ImageContact} alt="image collaborating" />
      </ConatinerImg>
    </Wrapper>
  )
}
export default React.memo(Contact)
