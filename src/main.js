import './style.css'
import QRCode from 'qrcode'

const urlInput = document.getElementById('url')
const generateBtn = document.getElementById('generate')
const qrcodeDiv = document.getElementById('qrcode')
const downloadLink = document.getElementById('download')

generateBtn.addEventListener('click', async ()=>{
  const url = urlInput.value
  if(!url) return
  try {
    const dataUrl = await QRCode.toDataURL(url,{
      width: 256,
      margin:2,
      color:{
        dark: '#000000',
        light: '#ffffff'
      }
    })/* dataUrl是base64编码的png字符串 */
    qrcodeDiv.innerHTML = `<img src="${dataUrl}" alt="QR Code" />`/* `${}`变量嵌入字符串，alt图片加载失败时显示的替代文字 */
    downloadLink.href = dataUrl
    downloadLink.style.display = 'inline'
  } catch (error) {
    console.error('生成失败', error)
  }
})