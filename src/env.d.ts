/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly GTIHUB_PERSONAL_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
