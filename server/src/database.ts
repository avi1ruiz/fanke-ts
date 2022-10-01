import mongoose from "mongoose";
import envs from "./config";

mongoose.connect(envs.MONGODB_URI)
    .catch((err) => console.log(err));
