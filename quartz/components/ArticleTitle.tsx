import { FileTitleIcon,IconFolderOptions  } from "../plugins/components/FileIcons";
import { classNames } from "../util/lang";
import { QuartzComponentConstructor, QuartzComponentProps } from "./types";

export default ((opts?: Partial<IconFolderOptions>) => {
	function ArticleTitle(props: QuartzComponentProps) {
		const { displayClass, fileData } = props;
		let title = fileData.frontmatter?.title ?? fileData.slug;
		if (title === "index") {
			const path = fileData.slug?.split("/");
			title = path?.[path.length - 2].replaceAll("-", " ") ?? "index";
		}
		const iconType = (fileData.frontmatter?.icon as string) || opts?.default?.file;
		if (title) {
			if (!opts?.rootIconFolder || !iconType) {
				return <h1 class={classNames(displayClass, "article-title")}>{title}</h1>;
			}
			return (
				<FileTitleIcon displayClass={displayClass} opts={opts} iconType={iconType} title={title} />
			);
		} else {
			return null;
		}
	}

	ArticleTitle.css = `
  .article-title {
    margin: 2rem 0 0 0;
  }
  `;
	return ArticleTitle;
}) satisfies QuartzComponentConstructor;
