import { Query } from "appwrite";
import { databases, ID } from "../appwrite";

// import.meta.env.VITE_APPWRITE_SAT_COLLECTION_ID,

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;

const RESULT_COLLECTION_ID = import.meta.env.VITE_APPWRITE_SAT_COLLECTION_ID;

const COLLECTIONS={
    SAT: import.meta.env.VITE_APPWRITE_SAT_COLLECTION_ID,
    IELTS:import.meta.env.VITE_APPWRITE_IELTS_COLLECTION_ID,
}


/**
 * Save test results (Kaplan, Princeton, etc.) with all module data.
 * @param {string} userId - Appwrite user ID
 * @param {string} testName - "Kaplan" or "Princeton"
 * @param {object} scores - {
 *   readingModule1, readingModule2, mathModule1, mathModule2,
 *   readingScaled, mathScaled, readingPercent, mathPercent
 * }
 */

export const saveSatScore= async (userId, testName, scores)=>{

    try {
        const result = await databases.createDocument(DATABASE_ID,
             RESULT_COLLECTION_ID, 
            ID.unique(),
            {
                userId,
                testName,
                ...scores,
                

            })
                console.log("✅ Test result saved:", result);
                console.log("Database ID:", DATABASE_ID);
console.log("Collection ID:", RESULT_COLLECTION_ID);

    return result;
    } catch (error) { 
         console.error("❌ Error saving test result:", error);
    throw error;   
    }
}

export const getSatScore=async(userId)=>{

    try {
            const response = await databases.listDocuments(
                DATABASE_ID,RESULT_COLLECTION_ID,
                [Query.equal('userId', userId)]
            )
console.log("✅ Retrieved test results:", response.documents);
    return response.documents; // this is an array of all user results
  } catch (error) {
    console.error("❌ Error fetching test results:", error);
    throw error;
  }
};

export const getUserScore= async (userId)=>{
    const results ={}

    for(const[testName, collectionId] of Object.entries(COLLECTIONS)){
        try {
          
            const response = await databases.listDocuments(
                DATABASE_ID,collectionId,
                [Query.equal('userId', userId)])
                if(response.documents.length>0){
                    results[testName]= res.documents
                }
        } catch (error) {
            console.error(`Error fetching ${testName} scores:`, err);
        }
    }
    return results
}