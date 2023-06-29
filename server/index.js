const express=require("express")
const cors=require("cors")
const mongodb=require("./mongooseConnect")

const app=express()

mongodb();
app.use(cors());
app.use(express.json());

app.use("/api",require("./Routes/CreateBlog"));
app.use("/api",require("./Routes/GetBlogs"));
app.use("/api",require("./Routes/FullBlog"));
app.use("/api",require("./Routes/DeleteBlog"));
app.use("/api",require("./Routes/UpdateBlog"));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/client/build/index"));

app.use(express.static(path.join(__dirname, "../client/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);


app.listen(5000,()=>{
    console.log("server Started")
})