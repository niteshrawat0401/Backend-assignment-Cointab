import { Router } from "express";
import fetch from "node-fetch";
import Users from "../model/user.js";

const usersRouter = Router();

// -----Get data
const appendData = async () => {
  const res = await fetch("https://randomuser.me/api?results=50");
  const data = await res.json();
  let allResult = data.results;
  //   console.log(allResult);
  let i;
  for (let i = 0; i < allResult.length; i++) {
    const user = new Users({
      picture: allResult[i].picture.large,
      first: allResult[i].name.first,
      last: allResult[i].name.last,
      gender: allResult[i].gender,
      email: allResult[i].email,
      location: allResult[i].location.street.name,
      pin: allResult[i].location.street.number,
    });
    user.save();
  }
};

usersRouter.get("/", (req, res) => {
  let getAllData = appendData();
  res.send(getAllData);
});

// -----Delete-----
usersRouter.delete("/delete", async (req, res) => {
    const deleteAlldata = await Users.deleteMany();
    try {
      if (deleteAlldata) {
        res.status(201).send({ message: "Delete Data" });
      }
    } catch (error) {
      res.send({ error });
    }
  });

// http://localhost:8080/user/page?page=1
// -----Pagenation-----
usersRouter.get("/page", async (req, res) => {
  let pageSize = 10;
  let page = parseInt(req.query.page || 0);
  let totalPage = await Users.countDocuments();
  let pageFind = await Users.find()
    .limit(pageSize).skip(pageSize * page);
  try {
    return res
      .status(201)
      .send({ allPages: Math.ceil(totalPage / pageSize), pageFind });
  } catch (error) {
    return res.status(500).send({ error });
  }
});

// -----Filter-----
usersRouter.get("/filter/:key", async(req, res)=>{
    let search= await Users.find({
        $or:[
            {
                gender: req.params.key
            }
            ]
    })
    try {
        if(search){
            res.status(201).send({message: "Filter data" ,search})
        }
    } catch (error) {
        res.send(error)
    }
})



export default usersRouter;
