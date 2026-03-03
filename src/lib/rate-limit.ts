// In-memory rate limiter for serverless chat messages
// Note: In serverless, each cold start gets a fresh Map. This is still
// effective at limiting rapid-fire requests within the same instance.

const rateLimitMap = new Map<string, number>()

const COOLDOWN_MS = 10_000 // 10 seconds between messages
const CLEANUP_INTERVAL = 60_000 // Clean stale entries every 60s

// Periodic cleanup to prevent memory leaks
let cleanupScheduled = false
function scheduleCleanup() {
    if (cleanupScheduled) return
    cleanupScheduled = true
    setInterval(() => {
        const now = Date.now()
        for (const [key, timestamp] of rateLimitMap) {
            if (now - timestamp > COOLDOWN_MS * 2) {
                rateLimitMap.delete(key)
            }
        }
    }, CLEANUP_INTERVAL)
}

export function checkRateLimit(ipHash: string): { allowed: boolean; retryAfterMs: number } {
    scheduleCleanup()

    const lastMessage = rateLimitMap.get(ipHash)
    const now = Date.now()

    if (lastMessage) {
        const elapsed = now - lastMessage
        if (elapsed < COOLDOWN_MS) {
            return {
                allowed: false,
                retryAfterMs: COOLDOWN_MS - elapsed,
            }
        }
    }

    rateLimitMap.set(ipHash, now)
    return { allowed: true, retryAfterMs: 0 }
}
