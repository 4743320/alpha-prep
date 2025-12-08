import { Query } from "appwrite";
import { databases, ID } from "../appwrite";

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_IELTS_COLLECTION_ID

export const saveIeltsResult = async ({ userId, score, totalScore, partScore, testType }) => {
  try {
    const payload = {
      userId,
      score,
      totalScore,
      testType,
    };

    if (partScore) {
      payload.partScore = JSON.stringify(partScore);
    }

    const result = await databases.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      ID.unique(),
      payload
    );

    console.log("✅ IELTS result saved:", result);
    return result;

  } catch (error) {
    console.error("❌ Error saving IELTS result:", error);
    throw error;
  }
};

export const getIeltsScore = async (userId) => {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID,
      [Query.equal("userId", userId)]
    );
    return response.documents;

  } catch (error) {
    console.error("❌ Error fetching IELTS scores:", error);
    throw error;
  }
};