const preloadedImages = []

export const preloadImages = async (urls) => {
  await urls.forEach((element, i) => {
    const img = new Image()
    img.src = urls[i].content || ''
    img.style.width = '100%'
    img.style.height = '100%'
    img.style.objectFit = 'cover'
    img.style.borderRadius = 'inherit'
    preloadedImages.push({ ...element, content: img })
  })

  return preloadedImages
}
