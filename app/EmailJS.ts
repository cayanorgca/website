import emailjs from 'emailjs-com';

export const sendEmail = (e: Event | any, dispatch: Function): void => {
  e.preventDefault();
  console.log(e.target);

  emailjs
    .sendForm(
      "service_qhzzotf",
      'template_onq8quv',
      e.target,
      'NtmxQw6u3d-yKM6LL'
    )
    .then(
      (response) => {
        dispatch(true);
        setTimeout(function () {
          dispatch(false);
        }, 5500);
        console.log('SUCCESS!', response);
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
}
