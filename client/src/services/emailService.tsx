const API_URL = "https://emailsapi.azurewebsites.net"
export async function sendEmail(data:any) {
    try{
        const response = await fetch(`${API_URL}/api/Email/SendEmail`,{
            method: 'POST',
            // headers: {'Content-Type':'multipart/form-data'},
            body:data
        })
        return await response.json;
    } catch(e){
        return 'Failed';
    }
}