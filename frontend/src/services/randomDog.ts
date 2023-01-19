export const getDogImgUrl = async () => {
  // https://github.com/adenflorian/random.dog
  const response = await fetch('https://random.dog/woof.json');
  const data = await response.json();
  
  return data.url;
}