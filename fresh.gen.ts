// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_id_ from "./routes/api/data/[employee].ts";
import * as $index from "./routes/index.tsx";
import * as $today_id_ from "./routes/today/[id].tsx";
import * as $Calendar from "./islands/Calendar.tsx";
import * as $TodayTimer from "./islands/TodayTimer.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/[id].ts": $api_id_,
    "./routes/index.tsx": $index,
    "./routes/today/[id].tsx": $today_id_,
  },
  islands: {
    "./islands/Calendar.tsx": $Calendar,
    "./islands/TodayTimer.tsx": $TodayTimer,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
