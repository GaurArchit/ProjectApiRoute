import { MongoClient } from "mongodb";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email adress" });

      return;
    }
  const client= await  MongoClient.connect(
      "mongodb+srv://admin:admin@practiceapi.05fedit.mongodb.net/?retryWrites=true&w=majority&appName=PracticeAPI"
    )
      const db = client.db("myDatabaseName"); //by this we create the database in mongodb
     await db.collection('emails').insertOne({email:userEmail})

    client.close();
    console.log(userEmail);
    res.status(200).json({ message: `Signed up ${userEmail}` });
  }
}
