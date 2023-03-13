// const set = setTimeout(()=>{
  // console.log("iN THE TIMEOUT");
  // clearInterval(int);
// }, 3000);

// const int = setInterval(() => {
  // console.log("In the Interval");
// }, 1000);

// console.log(__dirname);
// console.log(__filename);

// const ages = [12, 13, 14, 15];
// const names = ["Naruto", "sasuke"]
// module.exports = {
  // ages:ages,
// names:names}

// const os = require("os");
// console.log(os.platform(), os.homedir());


const fs = require("fs");

// fs.readFile("./node/test.txt", (err, data) => {
  // if (err){
    // console.log(err);
  // }
  // console.log(data.toString());
// });

 // fs.writeFile("./node/test.txt", "Hello World!", ()=> {
  // console.log("File Written.")})

// if (!fs.existsSync('./node/assets')) {
  // fs.mkdir("./node/assets", (err) => {
    // if (err){
      // console.log(err);
    // }
    // console.log("Folder Created");
  // });
// } else {
  // fs.rmdir("./node/assets", (err) => {
    // if (err) {
      // console.log(err);
    // }
    // console.log("Folder Deleted");
  // })
// }


// if (fs.existsSync("./node/delete.txt")){
  // fs.unlink("./node/delete.txt", (err) => {
    // if (err) {
      // console.log(err);
    // }
    // console.log("File Deleted");
  // })
// }


 const rs = fs.createReadStream("./node/blog.txt", {encoding: "utf8"});
const ws = fs.createWriteStream("./node/blog2.txt");
// rs.on("data", (chunk) => {
  // console.log("------New Chunk-----");
  // console.log(chunk);
  // ws.write("\n NEW CHUNK \n");
  // ws.write(chunk);
// })

rs.pipe(ws);
