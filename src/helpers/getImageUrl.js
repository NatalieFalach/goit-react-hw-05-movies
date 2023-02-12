export default function getImageUrl(imageName) {
  return imageName
    ? `https://image.tmdb.org/t/p/w500${imageName}`
    : 'https://via.placeholder.com/150/d3d3d3/ffffff?text=No++photo';
}
