const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const blogRoutes = ("./routes/blogRoutes");
const app = express();

const dbURI = "mongodb+srv://noder:noder@cluster0.xbadjti.mongodb.net/nodetuts?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(3333)
    console.log("Connected to MongoDb")
  }
  )
  .catch((err) => console.log(err))


app.set("view engine", "ejs");
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(blogRoutes);


app.get("/", (req, res) => {
  // const blogs = [
  //   { title: "Number 1 Crackhead Ninja", snippet: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat." },
  //   { title: "Number 1 legendary Sanin", snippet: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat." },
  //   { title: "The greatest Uchiha shinobi", snippet: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat." }
  // ];
  // // res.sendFile("./views/index.html", { root: __dirname });
  // res.render("index", { title: 'Home', blogs: blogs });
  res.redirect("./blogs");
});

app.get("/about", (req, res) => {
  // res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "About" });
})

app.get("/aboutus", (req, res) => {
  res.redirect("about");
})

app.use((req, res) => {
  // res.status(404).res.sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404", { title: "Page not Found" })
})


// // app.use((req, res, next) => {
//   console.log("New Request Made");
//   console.log('host:', req.hostname);
//   console.log("path:", req.path);
//   console.log("Method:", req.method);
//   next();
// });

// app.use((req, res, next) => {
//   console.log("New MiddleWare");
//   next();
// });

// app.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "New Blog 2",
//     snippet: "About the new blog",
//     body: "This is just the new blog",
//   });
//   blog.save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     })

// });

// app.get("/all-blogs", (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     })
// });

// app.get("/single-blog", (req, res) => {
//   Blog.findById("640e6533ade68c9d8cfcb53a")
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       consoloe.log(err);
//     })
// });


