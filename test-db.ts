import mongoose from "mongoose";

const uri = "mongodb+srv://xiotwork_db_user:vHH7myKrdKifda5w@add-cluster.6mydxj5.mongodb.net/?appName=add-Cluster";

(async () => {
  try {
    console.log("🔄 Connecting to MongoDB...");
    const conn = await mongoose.connect(uri);
    console.log("✅ Connected successfully to:", conn.connection.host);
    await mongoose.disconnect();
    console.log("🔌 Disconnected cleanly.");
  } catch (err) {
    console.error("❌ Connection failed:", err);
  }
})();
