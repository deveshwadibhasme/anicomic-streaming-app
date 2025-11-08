export const getImage = (imagePath) => {
  const localUrl = "http://localhost:5173/";
  const vercelUrl = "https://anicomicstudio.vercel.app/";
  const hostedUrl = "https://anicomicstudio.com/";

    if(location.href === localUrl) {
      return `/src/assets/${imagePath}`;
    }

    if(location.href === vercelUrl || location.href === hostedUrl) {
      return `${hostedUrl}/image-assets/${imagePath}`;
    }
  
}