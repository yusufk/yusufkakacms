module.exports = ({ env }) => ({
    // ...
    'import-export-entries': {
      enabled: true,
    },
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_ACCESS_SECRET'),
          region: env('AWS_REGION'),
          params: {
            Bucket: env('AWS_BUCKET'),
          },
        },
      },
    },
    email: {
      config: {
        provider: 'sendmail',
        settings: {
          defaultFrom: 'yusuf@kaka.co.za',
          defaultReplyTo: 'yusuf@kaka.co.za',
        },
      },
    },
    'open-ai': {
      enabled: true,
      config: {
        API_TOKEN: env('OPENAPI_KEY'),
      },
    },
    // ...
  });