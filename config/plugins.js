//  path: config/plugins.js

module.exports = ({ env }) => ({
  'import-export-entries': {
    enabled: true,
  },
    upload: {
      config: {
        provider: 'strapi-provider-upload-azure-storage',
        providerOptions: {
          account: env('STORAGE_ACCOUNT'),
          accountKey: env('STORAGE_ACCOUNT_KEY'),
          serviceBaseURL: env('STORAGE_URL'),
          containerName: env('STORAGE_CONTAINER_NAME'),
          cdnBaseURL: env('STORAGE_CDN_URL'),
          defaultPath: 'assets',
          maxConcurrent: 10
        }
      }
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
    }
  });
  