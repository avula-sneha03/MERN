const express=reuire('express');
const app=express();
const port=process.env.PORT || 5000;
const AuthRouter=reuire('./Routes/AuthRouter');

app.use(express.json());
app.use(cors);

app.use('/api',AuthRouter);

app.listen(port,()=>{
    console.log(`backend is running on ${port}`);
})
