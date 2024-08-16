import { QuartzFilterPlugin } from "../types"

export const RemoveExcalidraw: QuartzFilterPlugin<{}> = () => ({
  name: "RemovePrivate",
  shouldPublish(_ctx, [_tree, vfile]) {
    const tags: string[] = vfile.data?.frontmatter?.tags ?? [];
    return !tags.includes('excalidraw');
  },
})
