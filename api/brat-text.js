import { bratGen } from 'brat-canvas'
import { getEmojiStyle, getText, handleError, setHeaders } from '../lib/options.js'

export default async function handler(req, res) {
  try {
    const buffer = await bratGen(getText(req), { emojiStyle: getEmojiStyle(req) })
    setHeaders(res, 'image/png')
    res.statusCode = 200
    res.end(buffer)
  } catch (error) {
    handleError(res, error)
  }
}
