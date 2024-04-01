import express from 'express';
import Hello from './Hello.js';
import Lab5 from './Lab5.js';
import cors from 'cors';
import CourseRoutes from './Kanbas/courses/routes.js';
import ModuleRoutes from './Kanbas/modules/routes.js';
import AssignmentRoutes from './Kanbas/assignments/routes.js';

const app = express();
app.use(express.json());
app.use(cors());
Hello(app);
AssignmentRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
app.listen(process.env.PORT || 4000)