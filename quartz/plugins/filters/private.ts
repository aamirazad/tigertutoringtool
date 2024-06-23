import { QuartzFilterPlugin } from "../types"

export const RemovePrivate: QuartzFilterPlugin<{}> = () => ({
  name: "RemovePrivate",
  shouldPublish(_ctx, [_tree, vfile]) {
    const priavateFlag: boolean = vfile.data?.frontmatter?.draft ?? false
    return !priavateFlag
  },
})
