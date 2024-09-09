import { getProjectListByAllTagIds } from './src/lib/getProjectList';

async function main() {
    console.log(await getProjectListByAllTagIds(["1, 5"]));
}

main();