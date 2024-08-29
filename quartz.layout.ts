import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/aamirazad/tigertutoringtool",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(
      Component.Explorer({
        title: "Explorer", // title of the explorer component
        folderClickBehavior: "link", // what happens when you click a folder ("link" to navigate to folder page on click or "collapse" to collapse folder on click)
        folderDefaultState: "collapsed", // default state of folders ("collapsed" or "open")
        useSavedState: true, // whether to use local storage to save "state" (which folders are opened) of explorer
      }),
    ),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(
      Component.Explorer({
        title: "Explorer", // title of the explorer component
        folderClickBehavior: "link", // what happens when you click a folder ("link" to navigate to folder page on click or "collapse" to collapse folder on click)
        folderDefaultState: "collapsed", // default state of folders ("collapsed" or "open")
        useSavedState: true, // whether to use local storage to save "state" (which folders are opened) of explorer
      }),
    ),
  ],
  right: [],
}
