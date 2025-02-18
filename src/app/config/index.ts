import dotenv from 'dotenv';
import path from 'path';

// Corrected .env file path
dotenv.config({ path: path.join(process.cwd(), '.env') });

console.log('PORT:', process.env.PORT); // Debugging
console.log('DATABASE_URL:', process.env.DATABASE_URL); // Debugging

export default {
  port: process.env.PORT || 5000, // Default to 5000 if undefined
  database_url: process.env.DATABASE_URL || '', // Ensure a fallback value
};
