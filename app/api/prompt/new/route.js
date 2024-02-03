import { connectToDB } from "@/utils/database";

async function POST(req) {
  const { userId, prompt, tag } = await req.json();
  try {
    if (connectToDB) {
    }
  } catch (error) {
    console.log("POST Route Error: ", error);
  }
}
