export async function sendEmail(data:any) {
    try{
        const response = await fetch('/api/Email/SendEmail',{
            method: 'POST',
            // headers: {'Content-Type':'multipart/form-data'},
            body:data
        })
        return await response.json;
    } catch(e){
        return 'Failed';
    }
}