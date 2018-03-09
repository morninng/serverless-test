import { Handler, Context, Callback, CloudFrontResponseEvent } from 'aws-lambda';

export const append: Handler = (event: CloudFrontResponseEvent, context: Context, callback: Callback) => {
  const response = event.Records[0].cf.response;
  const headers = response.headers;

  console.log('test by typescript lambdaedge ggggg');

  headers['strict-transport-security'] = [
    {
      key: 'Strict-Transport-Security',
      value: 'max-age=31536000; includeSubDomains; preload',
    },
  ];

  headers['x-frame-options'] = [
    {
      key: 'X-Frame-Options',
      value: 'SAMEORIGIN',
    },
  ];

  headers['x-content-type-options'] = [
    {
      key: 'X-Content-Type-Options',
      value: 'nosniff',
    },
  ];

  headers['x-xss-protection'] = [
    {
      key: 'X-XSS-Protection',
      value: '1; mode=block',
    },
  ];



  callback(null, response);
};
