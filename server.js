import Fastify from 'fastify';
import FastifyVite from '@fastify/vite';
import { EyePopSdk } from "@eyepop.ai/eyepop";

const POP_UUID = process.env.EYEPOP_POP_ID || 'f10ac5dcb812495b9028332dc96922a7';
const POP_API_SECRET = process.env.EYEPOP_SECRET_KEY || 'AAE9GXNumME08CRcge0pANXVZ0FBQUFBQmx6OEdldUNhQ19rUHg5T0U2UHhZbHdlUUYwaGM2blJha2RtWnQ3d2dRSHN0a3ZJT1Utb0N1Yk50Z3UxUDBjaEVsMzhLODFXOEFNeTNGUGRBcjdsbVp0dXF5MTdOZ2JfYUhpcVBxMXNCcWlienZuMjA9';

const server = Fastify()

await server.register(FastifyVite, {
    root: import.meta.url,
    dev: process.argv.includes('--dev'),
    spa: true
})

server.get('/', (req, reply) =>
{
    return reply.html()
})

server.get('/eyepop/session', async (req, reply) =>
{
    console.log('Authenticating EyePop Session');
    // check if the request is from an authenticated user
    const isAuthenticated = req.headers.authorization;
    if (!isAuthenticated)
    {
        // console.log('Handle unauthorized request here');
    }

    try
    {

        const endpoint = await EyePopSdk.endpoint(
            {
                popId: POP_UUID,
                auth: { secretKey: POP_API_SECRET }
            }).connect();

        let session = await endpoint.session();

        session = JSON.stringify(session);

        console.log('New EyePop Session:', session)

        reply.send(session);

    } catch (error)
    {
        console.error('Error:', error);
        reply.send(error);
    }
});

server.setNotFoundHandler((req, reply) =>
{
    reply.code(404).send('Not Found')
})



await server.vite.ready()
await server.listen({ port: 3000 })
