import type { RequestHandler } from "@sveltejs/kit";

const get: RequestHandler = async (event) => {
    // This function gets placed into a Netlify function called 'render'.
    // How do I access context.clientContext from 'event', when 'event' does
    // not have such a field?
    console.log("In Netlify Functions")
    return {
        status: 200,
        body: {isLoggedIn: false}
    }
}

export {get}