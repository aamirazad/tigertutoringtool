import { QuartzFilterPlugin } from "../types"

export const RemoveFolderEmoji: QuartzFilterPlugin<{}> = () => ({
  name: "RemoveFolderEmoji",
  shouldPublish(_ctx, [_tree, vfile]) {
    return vfile.basename?.includes("🗂️") == false
  },
})
