export {}
declare global{
    namespace NodeJS{
        interface ProcessEnv {
          NODE_ENV: string;
          SQL_DB: string;
          SQL_USER: string;
          SQL_PASSWORD: string;
          DEV_PORT: number;
          SQL_HOST: string;
          JWT_SECRET: string;
          IMAGEKIT_ENDPOINT: string;
          IMAGEKIT_PRIVATE_KEY: string;
          IMAGEKIT_PUBLIC_KEY: string;
          BACKEND_URL: string;
          FRONTEND_URL: string;

          GOOGLE_CLIENT_ID:string;
          SESSION_SECRET:string
          GOOGLE_CLIENT_SECRET:string;
        }
    }
}