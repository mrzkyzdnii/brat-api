import { bratVid } from 'brat-canvas/video'
import { getEmojiStyle, getText, handleError, setHeaders } from '../lib/options.js'

export default async function handler(req, res) {
  try {
    const buffer = await bratVid(getText(req), {
      outputFormat: 'gif',
      fast_progress: true,
      lyric: {
        frameDuration: 0.35,
        lastFrameDuration: 1.2
      },
      brat: {
        emojiStyle: getEmojiStyle(req)
      }
    })
    setHeaders(res, 'image/gif')
    res.statusCode = 200
    res.end(buffer)
  } catch (error) {
    handleError(res, error)
  }
}
