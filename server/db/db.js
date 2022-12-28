import mongoose from "mongoose";
mongoose.set('strictQuery', true);
export default mongoose.connect(
  "mongodb+srv://nitesh:niteshcointab@cluster0.i6pwrx9.mongodb.net/cointab?retryWrites=true&w=majority"
);
// niteshcointab
