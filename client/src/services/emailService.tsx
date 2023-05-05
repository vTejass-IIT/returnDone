export async function sendEmail(data:any) {
    try{
        const response = await fetch('/api/Email/SendEmail',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(data)
        })
        return await response.json;
    } catch(e){
        return 'Failed';
    }
}