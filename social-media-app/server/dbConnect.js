const mongoose = require("mongoose");

module.exports = async () => {
    const mongoUri =
        "mongodb+srv://priyuocta:priyuocta123@cluster0.aaq4d.mongodb.net/";

    try {
        const connect = await mongoose.connect(mongoUri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
