// Simple profanity filter with word blocklist
// Add/remove words as needed

const BLOCKED_WORDS = [
    'fuck', 'shit', 'bitch', 'asshole', 'dick', 'pussy', 'cunt',
    'bastard', 'damn', 'nigger', 'nigga', 'faggot', 'retard',
    'whore', 'slut', 'cock', 'penis', 'vagina', 'boob', 'tits',
    // Add Nepali profanity
    'muji', 'randi', 'chikne', 'lado', 'puti', 'machikne',
]

export function filterProfanity(message: string): string {
    let filtered = message
    for (const word of BLOCKED_WORDS) {
        const regex = new RegExp(`\\b${escapeRegex(word)}\\b`, 'gi')
        filtered = filtered.replace(regex, '*'.repeat(word.length))
    }
    return filtered
}

export function containsProfanity(message: string): boolean {
    for (const word of BLOCKED_WORDS) {
        const regex = new RegExp(`\\b${escapeRegex(word)}\\b`, 'gi')
        if (regex.test(message)) return true
    }
    return false
}

function escapeRegex(str: string): string {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
