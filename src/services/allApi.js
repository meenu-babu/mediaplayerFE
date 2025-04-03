import { serverurl} from "./serverUrl";
import {commonApi} from "./commonApi";
// api call for upload video
export const uploadvideo=async(reqBody)=>
{
    return await commonApi('POST',`${serverurl}/videos`,reqBody)
}

// get all videos
export const getAllVideos=async()=>
{
    return await commonApi('GET',`${serverurl}/videos`,"")
}

//delete video
export const deleteVideo=async(id)=>
{
    return await commonApi('DELETE',`${serverurl}/videos/${id}`,{})
}

// Add to history
export const addToHistory=async(data)=>
{
    return await commonApi('POST',`${serverurl}/history`,data)
}

// Get history
export const getHistory=async()=>
{
    return await commonApi('GET',`${serverurl}/history`,"")
}

// delete history
export const deleteWatchHistory=async(id)=>
{
    return await commonApi('DELETE',`${serverurl}/history/${id}`,"")
}

// add category
export const addCategory=async(data)=>
{
    return await commonApi('POST',`${serverurl}/categories`,data)
}

// get all categories
export const getAllCategories=async()=>
{
    return await commonApi('GET',`${serverurl}/categories`,"")
}

// delete category
export const deleteVideoCategory=async(data)=>
{
    return await commonApi('DELETE',`${serverurl}/categories/${data}`,{})
}