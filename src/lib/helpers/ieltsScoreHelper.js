import { Query } from "appwrite";
import { databases, ID } from "../appwrite";

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_IELTS_COLLECTION_ID
const WRITING_COLLECTION_ID= import.meta.env.VITE_APPWRITE_IELTS_WRITING__COLLECTION_ID
const IELTS_COMPLETE_TEST__COLLECTION_ID = import.meta.env.VITE_APPWRITE_IELTS_COMPLETE_TEST__COLLECTION_ID
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

export const saveIeltsWriting=async(userId, task1,task2,testName)=>{

  try {
    
    const response = await databases.createDocument(DATABASE_ID,WRITING_COLLECTION_ID,
      ID.unique(),
      {
        userId,task1,task2,testName
    })
    console.log("Test Saved Successfully")
    return response
    
  } catch (error) {
    console.error("Error saving IELTS Writing:", error);
    throw error;
  }

}

export const getIeltsWriting=async (userId) => {
try {
 const response = await databases.listDocuments(
  DATABASE_ID,WRITING_COLLECTION_ID,
  // [`userId=${userId}`]
  [Query.equal("userId",userId)]
 ) 
 console.log("result sucess")
 return response.documents
} catch (error) {
   console.error("Error fetching IELTS Writing:", error);
    throw error;
}  
}

export const saveIeltsTest = async ({
  userId,
  testName,
  listeningScore,
  readingScore,
  writingTask1,
  writingTask2,
  band
}) => {
  try {
    const totalscore = listeningScore + readingScore;

    const payload = {
      userId,
      testName,
      listeningScore,
      readingScore,
      writingTask1,
      writingTask2,
      band,
      totalscore // ✅ matches Appwrite column name
    };

    const result = await databases.createDocument(
      DATABASE_ID,
      IELTS_COMPLETE_TEST__COLLECTION_ID,
      ID.unique(),
      payload
    );

    console.log("✅ IELTS test saved:", result);
    return result;

  } catch (error) {
    console.error("❌ Error saving IELTS test:", error);
    throw error;
  }
};

export const getIeltsTest = async (userId) => {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      IELTS_COMPLETE_TEST__COLLECTION_ID,
      [Query.equal("userId", userId)]
    );

    console.log("✅ IELTS tests fetched successfully");
    return response.documents;

  } catch (error) {
    console.error("❌ Error fetching IELTS tests:", error);
    throw error;
  }
};
