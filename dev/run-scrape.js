import { argv } from "node:process";
import getSongsFromEmbedUrl from "./fetch-apple-music-playlist.js";

function isEmbedUrl(embedUrl) {
  const url = new URL(embedUrl);
  return url.origin.includes('embed');
}

async function getSongs(url) {
  return await getSongsFromEmbedUrl(url);
}

// Script execution starts
const urlArgvIndex = 2;
const embedUrlToScrape = argv[urlArgvIndex];
if (!embedUrlToScrape) {
  throw Error("Apple Music URL for embedded playlist not found.");
}
if (!isEmbedUrl(embedUrlToScrape)) {
  throw Error("The Apple Music URL doesn't appear to be for an embedded playlist. The origin must be \"embed.music.apple.com\".");
}

const songs = await getSongs(embedUrlToScrape);
console.log(songs);
