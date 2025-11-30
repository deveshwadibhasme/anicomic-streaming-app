export const getImage = (imagePath) => {
  const localUrl = "http://localhost:5173/";
  const vercelUrl = "https://anicomic.vercel.app/";
  const hostedUrl = "https://anicomic.in/";

    if(location.origin === localUrl) {
      return `/src/assets/${imagePath}`;
    }

    if(location.origin === vercelUrl || location.origin === hostedUrl) {
      return `${hostedUrl}/image-assets/${imagePath}`;
    }
  
}