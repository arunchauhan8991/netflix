import "dotenv/config";

export const ENV_VARS = {
    MONGODB_URL : process.env.MONGODB_URL,
    PORT: process.env.PORT || 5000,
}