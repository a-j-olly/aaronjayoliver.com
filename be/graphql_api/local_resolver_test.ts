import {
	getProjectList,
	getProjectListByAllTagIds,
	getProjectListBySomeTagIds,
} from "./src/resolvers/getProjectList";
import { getTagList } from "./src/resolvers/getTagList";

async function main() {
	console.log(await getTagList());
}

main();
