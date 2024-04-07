import axios from 'axios';

const useEmail = () => {
  const sendEmail = (email: string) => {
    const options = {
      method: 'POST',
      url: 'https://sightquest.ru/api/subscribers/',
      headers: {
        'Content-Type': 'application/json',
      },
      data: { email },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return {
    sendEmail,
  };
};