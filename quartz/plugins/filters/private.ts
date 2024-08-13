import { QuartzFilterPlugin } from "../types"

export const RemovePrivate: QuartzFilterPlugin<{}> = () => ({
  name: "RemovePrivate",
  shouldPublish(_ctx, [_tree, vfile]) {
    const privateFlag: boolean = vfile.data?.frontmatter?.private ?? false
    return !privateFlag
  },
})
