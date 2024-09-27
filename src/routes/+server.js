import { json } from '@sveltejs/kit';
import webpush from 'web-push';
const PublicKey = 'BEEzgTtA-_x6AYisDhdhywoFOqRaS3HhQ8r82f3eZcWgbqHoD55ivSb4tRzknhConEsE6veFUpdtGf-72qteBiM'
const PrivateKey = 'xsbSYM_PZSCvn50L9EwAIZcHJ9NMo1vOsCTDmQWHrPk'

webpush.setVapidDetails('mailto:caalpar2@gmail.com',PublicKey,PrivateKey)

// @ts-ignore
let sub = null;


setInterval(() => {
    // @ts-ignore
    

    
    // @ts-ignore
    if(sub !=  null){
        const payLoad = JSON.stringify({
            title:"RUA test notification title",
            message:"RUA test notification message"
        })
    
        try {
                // @ts-ignore
            webpush.sendNotification(sub,payLoad)
        } catch (error) {
            console.log(error)
        }
    }
}, 1000 * 10);
// @ts-ignore
export async function POST({request}) {
    const data = await request.json();
    
    console.log(data)

    sub = data;

    const payLoad = JSON.stringify({
        title:"My custom Notification",
        message:"Hello Word"
    })

    try {
        webpush.sendNotification(data,payLoad)
    } catch (error) {
        console.log(error)
    }
    
    return json({data}, { status: 201 });


}


