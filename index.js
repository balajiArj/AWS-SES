const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");

const ses = new SESClient({
  region: 'ap-south-1',
  credentials: {
    accessKeyId: 'AKIA2CP27**********',
    secretAccessKey: '9KqBCH31JQ76BA7NQoiJ********************'
  }
});

const params = {
  Destination: {
    ToAddresses: ['xyz@gmail.com']
  },
  Message: {
    Body: {
      Text: {
        Data: 'Hello there! Test...'
      }
    },
    Subject: {
      Data: 'Test Email'
    }
  },
  Source: 'abc@gmail.com'
};

const sendEmailCommand = new SendEmailCommand(params);

ses.send(sendEmailCommand).then(
  (data) => console.log('Email sent:', data),
  (error) => console.error(error)
);