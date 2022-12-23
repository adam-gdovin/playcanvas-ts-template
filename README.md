A simple TypeScript with WebPack template for PlayCanvas that can also sync with your playcanvas.com project based on [playcanvas-editor-ts-template][playcanvas-editor-ts-template]

## Quick start

This template uses the [playcanvas-sync][playcanvas-sync] tool and [webpack][WebPack] to push files to your PlayCanvas project and requires a little bit of setup with `pcconfig.json`.

1. Make a copy of `template.pcconfig.json` and rename to `pcconfig.json`. This is needed to configure playcanvas-sync to upload the file to correct PlayCanvas Editor project.
2. Complete/Update the following properties in `pcconfig.json` using these [instructions][playcanvas-sync-pcconfig-instructions]:
    - `PLAYCANVAS_API_KEY` - [Instructions to create an API key][create-api-key]
    - `PLAYCANVAS_PROJECT_ID` - [Where to find the project ID][find-project-id]
    - `PLAYCANVAS_BRANCH_ID` [Where to find the branch ID][find-branch-id]
3. On the command line, run `npm install` to install the packages.
4. On the command line, run the npm script `npm run watch-push:webpack`.
5. This will watch the `src` folder for changes, compile into `build/bundle.js` and `build/loading.js` and if successful, upload to your playcanvas.com project.

Please note, if you are adding new `pc.ScriptTypes` or attributes to existing ones, you will need to manually parse the script after upload in the PlayCanvas Editor. [Please read this][playcanvas-sync-new-script-types] for more details.

[playcanvas-editor-ts-template]: https://github.com/playcanvas/playcanvas-editor-ts-template
[webpack]: https://webpack.js.org/
[playcanvas-sync]: https://github.com/playcanvas/playcanvas-sync
[playcanvas-sync-pcconfig-instructions]: https://github.com/playcanvas/playcanvas-sync#config-variables
[playcanvas-sync-new-script-types]: https://github.com/playcanvas/playcanvas-sync#adding-new-files-as-script-components
[create-api-key]: https://developer.playcanvas.com/en/user-manual/api/#authorization
[find-project-id]: https://developer.playcanvas.com/en/user-manual/api/#project_id
[find-branch-id]: https://developer.playcanvas.com/en/user-manual/api/#branch_id
