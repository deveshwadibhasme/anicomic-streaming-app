export const getImage = (imagePath) => {
  const localUrl = "http://localhost:5173/";
  const vercelUrl = "https://anicomic.vercel.app/";
  const hostedUrl = "https://internship.anicomic.in/";

    if(location.href === localUrl) {
      return `/src/assets/for-cloud/${imagePath}`;
    }

    if(location.href === vercelUrl || location.href === hostedUrl) {
      return `${hostedUrl}/images/${imagePath}`;
    }
  
}