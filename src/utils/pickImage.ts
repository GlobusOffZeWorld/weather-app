export const pickImage = (src: string): string => {
  if(!src) {
    return 'defaultImage'
  }
  let image = src.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join('').split('.')[0]
  image = image[0].toLowerCase() + image.slice(1)
  return image
}