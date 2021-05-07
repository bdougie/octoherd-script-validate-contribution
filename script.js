// @ts-check

/**
 * octoherd-script-good-pr
 *
 * @param {import('@octoherd/cli').Octokit} octokit
 * @param {import('@octoherd/cli').Repository} repository
 */
export async function script(octokit, repository) {
  console.log("foo")
  const [repoOwner, repoName] = repository.full_name.split("/");
  octokit.log.info(`${repoOwner} name: ${repoName}`)

  const data = await octokit.request('GET /repos/{owner}/{repo}/issues', {
    owner: repoOwner,
    repo: repoName,
  })

  // filter data fir todo in issue body

  octokit.log.info(data)
}
