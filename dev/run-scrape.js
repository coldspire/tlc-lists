import { argv } from "node:process";
import getSongsFromEmbedUrl from "./fetch-apple-music-playlist.js";

async function getSongs(url) {
  return await getSongsFromEmbedUrl(url);
}

// Script execution starts
const urlArgvIndex = 2;
const embedUrlToScrape = argv[urlArgvIndex];
if (!embedUrlToScrape) {
  throw Error("Apple Music URL for embed playlist not included in script arguments");
}

const songs = await getSongs(embedUrlToScrape);
console.log(songs);
