import fs from 'fs/promises'
import path from 'path'

const emailDir = path.join(process.cwd(), 'server', 'logs', 'emails')

export async function sendSimulatedEmail(type, to, subject, content) {
  await fs.mkdir(emailDir, { recursive: true })
  const safeType = type.replace(/[^a-z0-9_-]/gi, '-')
  const fileName = `${Date.now()}-${safeType}.txt`
  const body = [
    `Type: ${type}`,
    `Destinataire: ${to}`,
    `Sujet: ${subject}`,
    '',
    content
  ].join('\n')

  await fs.writeFile(path.join(emailDir, fileName), body, 'utf8')
  console.log(`[EMAIL SIMULE] ${subject} -> ${to}`)
}
