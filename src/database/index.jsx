import mongoose, { connect } from "mongoose";

const configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToDB = async () => {
  const connectionUrl =
    "mongodb+srv://devillawendel2731:Wendel1231@cluster0.ru6p8nx.mongodb.net/";

  mongoose
    .connect(connectionUrl, configOptions)
    .then(() => console.log("Capstone Database connected succesfully!"))
    .catch((err) =>
      console.log("Getting error from db connection ${err.message}")
    );
};

export default connectToDB;
