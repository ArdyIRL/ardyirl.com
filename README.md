# ardyirl.com
The official portfolio of e-sports personality ArdyIRL.

## vods
located in the `src/data/vods.csv` file, there is a list of vods ordered from *oldest to newest* in the following format:
```csv
type,id,title,source
```
**type** is one of;
* `ytpl` (youtube playlist)
* `yt` (youtube video)
* `ttv` (twitch video)
* `ttvc` (twitch clip)

**id** is the same as the id at the end of the link url

**title** is self explainatory

**source** names the source. for twitch clips, this value with spaces removed must be the channel id. the `src/img/thumbs/` folder contains all current available source thumbnails
