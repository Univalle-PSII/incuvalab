// src/utils/getYoutubeViews.js

const API_KEY = "AIzaSyD9bs5KLcZ3pecjAbv20p8ZXW6A99ZJbIQ";

export async function getYoutubeViews(videoUrl) {
  try {
    // Extraer ID del video
    const videoId = extractYoutubeVideoId(videoUrl);
    if (!videoId) return null;

    // Llamar API de YouTube
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=statistics`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Devolver vistas
    return data?.items?.[0]?.statistics?.viewCount || null;
  } catch (error) {
    console.error("Error al obtener vistas de YouTube:", error);
    return null;
  }
}

function extractYoutubeVideoId(url) {
  try {
    const regex = /(?:youtube\.com\/.*v=|youtu\.be\/)([^&?/]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  } catch {
    return null;
  }
}
