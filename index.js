import express from 'express';
import aiRoutes from './routes/aiRoutes.js';
import 'dotenv/config';

const app = express();
app.use(express.json());
app.use('/api/ai', aiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
