import express,{Application,Request,Response} from 'express'
import { notesRoutes } from './Controllers/notes.controller';
import { userRoutes } from './Controllers/user.controller';
const app:Application=express();

app.use(express.json())


app.use("/notes",notesRoutes)
app.use("/user",userRoutes)


app.get('/',(req:Request,res:Response)=>{
    res.send('Welcome to Note App');

})
export default app;