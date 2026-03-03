import { headers } from 'next/headers'
import { createHash } from 'crypto'

export async function getClientIpHash(): Promise<string> {
    const headersList = await headers()
    const forwarded = headersList.get('x-forwarded-for')
    const realIp = headersList.get('x-real-ip')

    let ip = '127.0.0.1'

    if (forwarded) {
        ip = forwarded.split(',')[0].trim()
    } else if (realIp) {
        ip = realIp.trim()
    }

    return createHash('sha256').update(ip).digest('hex')
}
