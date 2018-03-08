import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';

export const getUser: Handler = (event: APIGatewayEvent, context: Context, cb: Callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      user_name: 'Yuta Moriyama'
    }),
  };

  cb(null, response);
}
