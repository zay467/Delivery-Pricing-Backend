declare namespace NodeJS {
  interface ProcessEnv {
    MONGO_USERNAME: string;
    MONGO_PASSWORD: string;
    MONGO_HOST: string;
    SERVER_PORT: string;
    SERVER_TOKEN_EXPIRETIME: string;
    SERVER_TOKEN_SECRET: string;
  }
}